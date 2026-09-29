/* ============================================================
   ORGANIZADOR DE FOTOS  —  node ferramentas/organizador.js

   Abre uma página em http://localhost:5191 para arrumar as fotos
   dos edifícios: renomear a legenda, tirar as que não interessam,
   trocar a ordem arrastando e acrescentar fotos novas.

   Roda só na sua máquina. Ao salvar, reescreve assets/js/galerias.js
   e roda o gerador de páginas. As fotos retiradas não são apagadas:
   vão para ferramentas/lixeira/, de onde dá para trazer de volta.
   ============================================================ */

const http = require("http");
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { execFile } = require("child_process");

const RAIZ = path.join(__dirname, "..");
const PORTA = 5191;
const LIXEIRA = path.join(__dirname, "lixeira");
const ARQ_GALERIAS = path.join(RAIZ, "assets/js/galerias.js");

/* ---------- leitura dos arquivos de dados do site ---------- */
function carregar(...arquivos) {
  const ctx = { window: {}, document: { addEventListener() {} } };
  vm.createContext(ctx);
  for (const rel of arquivos) {
    const codigo = fs.readFileSync(path.join(RAIZ, rel), "utf8")
      .replace(/^const (\w+) =/gm, "globalThis.$1 =");
    vm.runInContext(codigo, ctx);
  }
  return ctx;
}

const primeiraLinha = () => {
  const l = fs.readFileSync(ARQ_GALERIAS, "utf8").split("\n")[0];
  return l.startsWith("//") ? l : "// Fotos dos edifícios.";
};

function gravarGalerias(galerias) {
  fs.writeFileSync(ARQ_GALERIAS,
    `${primeiraLinha()}\nconst GALERIAS = ${JSON.stringify(galerias, null, 2)};\n`, "utf8");
}

/* ---------- utilidades ---------- */
const TIPOS = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".webp": "image/webp", ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg", ".png": "image/png", ".json": "application/json; charset=utf-8"
};

const json = (res, dados, codigo = 200) => {
  res.writeHead(codigo, { "Content-Type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(dados));
};

function corpo(req, limiteMB = 60) {
  return new Promise((ok, erro) => {
    const pedacos = []; let tamanho = 0;
    req.on("data", d => {
      tamanho += d.length;
      if (tamanho > limiteMB * 1024 * 1024) { erro(new Error("corpo grande demais")); req.destroy(); return; }
      pedacos.push(d);
    });
    req.on("end", () => { try { ok(JSON.parse(Buffer.concat(pedacos).toString("utf8"))); } catch (e) { erro(e); } });
    req.on("error", erro);
  });
}

/* Caminho de foto só pode apontar para dentro das galerias. */
function caminhoSeguro(rel) {
  const limpo = String(rel || "").replace(/\\/g, "/");
  if (!/^assets\/img\/galerias\/[a-z0-9-]+\/[a-zA-Z0-9._-]+$/.test(limpo)) return null;
  const abs = path.join(RAIZ, limpo);
  if (!abs.startsWith(path.join(RAIZ, "assets", "img", "galerias"))) return null;
  return { rel: limpo, abs };
}

/* ---------- API ---------- */
async function api(req, res, url) {

  if (url.pathname === "/api/dados") {
    const { GALERIAS, EMPREENDIMENTOS } = carregar("assets/js/galerias.js", "assets/js/dados.js");
    const nomes = Object.fromEntries(EMPREENDIMENTOS.map(e => [e.id, e.nome]));
    const predios = Object.keys(GALERIAS).sort().map(id => ({
      id,
      nome: nomes[id] || id,
      fotos: GALERIAS[id]
    }));
    return json(res, { predios });
  }

  if (url.pathname === "/api/salvar" && req.method === "POST") {
    const { predio, fotos } = await corpo(req);
    const { GALERIAS } = carregar("assets/js/galerias.js");
    if (!GALERIAS[predio]) return json(res, { erro: "edifício desconhecido" }, 400);
    if (!Array.isArray(fotos)) return json(res, { erro: "lista inválida" }, 400);

    const limpas = [];
    for (const f of fotos) {
      const src = caminhoSeguro(f.src), mini = caminhoSeguro(f.mini);
      if (!src || !mini) return json(res, { erro: "caminho de foto inválido" }, 400);
      if (!fs.existsSync(src.abs)) return json(res, { erro: "arquivo não existe: " + src.rel }, 400);
      limpas.push({ src: src.rel, mini: mini.rel, legenda: String(f.legenda || "").trim() });
    }

    // arquivos que deixaram de ser usados vão para a lixeira, não somem
    const usados = new Set(limpas.flatMap(f => [path.basename(f.src), path.basename(f.mini)]));
    const pasta = path.join(RAIZ, "assets/img/galerias", predio);
    let guardados = 0;
    if (fs.existsSync(pasta)) {
      const destino = path.join(LIXEIRA, predio);
      for (const arq of fs.readdirSync(pasta)) {
        if (usados.has(arq)) continue;
        fs.mkdirSync(destino, { recursive: true });
        fs.renameSync(path.join(pasta, arq), path.join(destino, arq));
        guardados++;
      }
    }

    GALERIAS[predio] = limpas;
    gravarGalerias(GALERIAS);

    // sem subir o ?v=, quem já visitou o site continua vendo a galeria antiga
    const versao = require("./versao").subir();

    const gerador = await new Promise(ok =>
      execFile(process.execPath, [path.join(__dirname, "gerar-paginas.js")], { cwd: RAIZ },
        (e, saida, erro) => ok(e ? "falhou: " + (erro || e.message) : "ok")));

    return json(res, { ok: true, fotos: limpas.length, guardados, gerador, versao: versao && versao.para });
  }

  if (url.pathname === "/api/enviar" && req.method === "POST") {
    const { predio, cheia, mini, extensao } = await corpo(req);
    const { GALERIAS } = carregar("assets/js/galerias.js");
    if (!GALERIAS[predio]) return json(res, { erro: "edifício desconhecido" }, 400);
    const ext = /^(webp|jpg|png)$/.test(extensao) ? extensao : "webp";

    const pasta = path.join(RAIZ, "assets/img/galerias", predio);
    fs.mkdirSync(pasta, { recursive: true });
    // primeiro número livre, olhando pasta e lixeira para não repetir nome
    const ocupados = new Set();
    for (const p of [pasta, path.join(LIXEIRA, predio)]) {
      if (!fs.existsSync(p)) continue;
      for (const a of fs.readdirSync(p)) { const m = a.match(/^(\d+)/); if (m) ocupados.add(Number(m[1])); }
    }
    let n = 1; while (ocupados.has(n)) n++;
    const base = String(n).padStart(3, "0");

    fs.writeFileSync(path.join(pasta, `${base}.${ext}`), Buffer.from(cheia, "base64"));
    fs.writeFileSync(path.join(pasta, `${base}-mini.${ext}`), Buffer.from(mini, "base64"));

    return json(res, {
      src: `assets/img/galerias/${predio}/${base}.${ext}`,
      mini: `assets/img/galerias/${predio}/${base}-mini.${ext}`
    });
  }

  return json(res, { erro: "rota desconhecida" }, 404);
}

/* ---------- servidor ---------- */
http.createServer(async (req, res) => {
  const url = new URL(req.url, "http://localhost");
  try {
    if (url.pathname.startsWith("/api/")) return await api(req, res, url);

    if (url.pathname === "/" || url.pathname === "/index.html") {
      res.writeHead(200, { "Content-Type": TIPOS[".html"], "Cache-Control": "no-store" });
      return res.end(fs.readFileSync(path.join(__dirname, "organizador.html")));
    }

    // fotos e demais arquivos do site, só para leitura
    const alvo = path.join(RAIZ, decodeURIComponent(url.pathname).replace(/^\/+/, ""));
    if (!alvo.startsWith(RAIZ) || !fs.existsSync(alvo) || fs.statSync(alvo).isDirectory()) {
      res.writeHead(404); return res.end("não encontrado");
    }
    res.writeHead(200, { "Content-Type": TIPOS[path.extname(alvo).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    fs.createReadStream(alvo).pipe(res);

  } catch (e) {
    json(res, { erro: e.message }, 500);
  }
}).listen(PORTA, () => {
  console.log(`\n  Organizador de fotos:  http://localhost:${PORTA}\n`);
  console.log("  Fotos retiradas vão para ferramentas/lixeira/ (dá para trazer de volta).");
  console.log("  Ctrl+C para encerrar.\n");
});
