/* ============================================================
   GERADOR DE PÁGINAS ESTÁTICAS  —  node ferramentas/gerar-paginas.js

   Por que existe: o site monta o conteúdo com JavaScript. Isso funciona
   para quem navega, mas deixa todas as páginas de prédio com o mesmo
   título e a mesma descrição para o Google. Este script lê dados.js e
   blog.js e escreve uma página por edifício e uma por texto do blog,
   cada uma com título, meta description, canonical, Open Graph, dados
   estruturados e o texto principal já no HTML.

   Também escreve sitemap.xml e robots.txt.

   Rode depois de mexer em dados.js ou blog.js.
   ============================================================ */

const fs = require("fs");
const path = require("path");
const vm = require("vm");

const RAIZ = path.join(__dirname, "..");
const SITE = "https://www.marinsengenharia.com.br";   // domínio final, depois da troca da Wix

/* ---------- carrega os dados do site ---------- */
const contexto = { window: {}, document: { addEventListener(){} } };
vm.createContext(contexto);
for (const arquivo of ["assets/js/dados.js", "assets/js/blog.js"]) {
  const codigo = fs.readFileSync(path.join(RAIZ, arquivo), "utf8")
    // const no topo do arquivo não vira global no sandbox; vira aqui
    .replace(/^const (\w+) =/gm, "globalThis.$1 =");
  vm.runInContext(codigo, contexto);
}
const { EMPRESA, EMPREENDIMENTOS, BLOG, TEXTOS } = contexto;

const esc = s => String(s == null ? "" : s)
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

const versao = () => {
  const m = fs.readFileSync(path.join(RAIZ, "index.html"), "utf8").match(/\?v=([\d-]+)/);
  return m ? m[1] : "1";
};
const V = versao();

// Novo endereço evita reutilizar a folha antiga armazenada no navegador.
fs.copyFileSync(path.join(RAIZ, "assets/css/style.css"), path.join(RAIZ, "assets/css/marins-layout.css"));

/* ---------- molde comum ---------- */
function pagina({ titulo, descricao, canonical, imagem, jsonLd, corpo, id, scripts, rota }) {
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<base href="/">
<title>${esc(titulo)}</title>
<meta name="description" content="${esc(descricao)}">
<link rel="canonical" href="${esc(canonical)}">
<meta name="theme-color" content="#00378A">
<link rel="icon" href="/assets/img/logo-marins.png">

<meta property="og:type" content="${id.tipo === "post" ? "article" : "website"}">
<meta property="og:title" content="${esc(titulo)}">
<meta property="og:description" content="${esc(descricao)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(SITE + "/" + imagem)}">
<meta property="og:locale" content="pt_BR">
<meta name="twitter:card" content="summary_large_image">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;700;800&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/css/marins-layout.css?v=${V}">
<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>

<a class="pular" href="${rota}#conteudo">Pular para o conteúdo</a>
<header class="topo" id="cabecalho"></header>

<main id="conteudo">
${corpo}
</main>

<footer class="rodape" id="rodape"></footer>

<a class="zap-fixo" data-zap="geral" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">
  <span>WhatsApp</span>
</a>

<script>window.PAGINA_ID = ${JSON.stringify(id.valor)};</script>
${scripts.map(s => `<script src="/assets/js/${s}?v=${V}"></script>`).join("\n")}
</body>
</html>
`;
}

/* ---------- páginas dos edifícios ---------- */
function paginaEmpreendimento(emp) {
  const url = `${SITE}/edificios/${emp.id}`;
  const descricao = `${emp.nome}: ${emp.metragem}, ${emp.dorms}, ${emp.torres}. ${emp.endereco}, São Carlos. Construído pela Marins Engenharia.`.slice(0, 155);

  // texto que o Google lê antes do JavaScript rodar; o site substitui depois
  const corpo = `  <div id="pagina-empreendimento">
    <div class="env secao">
      <h1>${esc(emp.nome)}</h1>
      <p>${esc(emp.torres)}</p>
      <p>${esc(emp.metragem)} · ${esc(emp.dorms)}</p>
      <p>${esc(emp.detalhes)}</p>
      <p>${esc(emp.endereco)}, ${esc(EMPRESA.cidade)}</p>
    </div>
  </div>

  <section class="anos secao--fina" aria-labelledby="outros-titulo">
    <div class="env">
      <div class="cab">
        <div>
          <p class="rotulo" data-t="interna.outrosRotulo"></p>
          <h2 id="outros-titulo" class="h2--menor" data-t="interna.outrosTitulo"></h2>
        </div>
        <a class="btn btn--linha" href="/edificios" data-t="interna.voltar"></a>
      </div>
      <div class="trilho" id="trilho-outros" tabindex="0" aria-labelledby="outros-titulo"></div>
    </div>
  </section>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ApartmentComplex",
    name: emp.nome,
    url,
    numberOfAccommodationUnits: emp.unidades,
    address: {
      "@type": "PostalAddress",
      streetAddress: emp.endereco,
      addressLocality: "São Carlos",
      addressRegion: "SP",
      addressCountry: "BR"
    },
    provider: { "@type": "Organization", name: EMPRESA.razao, url: SITE }
  };
  if (emp.foto) jsonLd.image = `${SITE}/${emp.foto}`;

  return pagina({
    titulo: `${emp.nome} — apartamentos em São Carlos | Marins Engenharia`,
    descricao,
    canonical: url,
    imagem: emp.foto || "assets/img/logo-marins.png",
    jsonLd,
    corpo,
    id: { valor: emp.id, tipo: "empreendimento" },
    rota: `/edificios/${emp.id}`,
    scripts: ["dados.js", "galerias.js", "site.js"]
  });
}

/* ---------- páginas dos textos do blog ---------- */
function paginaPost(post) {
  const url = `${SITE}/blog/${post.id}`;

  const secoes = post.secoes.map(s => `
      <section>
        <h2>${esc(s.titulo)}</h2>
        ${s.paragrafos.map(t => `<p>${esc(t)}</p>`).join("")}
        ${(s.bullets && s.bullets.length) ? `<ul>${s.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
        ${s.callout ? `<p>${esc(s.callout.texto)}</p>` : ""}
      </section>`).join("");

  const corpo = `  <article id="pagina-post">
    <div class="env secao">
      <h1>${esc(post.titulo)}</h1>
      <p>${esc(post.resumoRapido)}</p>
      <p>${esc(post.intro)}</p>
      ${secoes}
      <section>
        <h2>${esc(TEXTOS.paginas.blog.perguntas || "Perguntas frequentes")}</h2>
        ${post.faq.map(f => `<h3>${esc(f.p)}</h3><p>${esc(f.r)}</p>`).join("")}
      </section>
    </div>
  </article>`;

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: post.titulo,
      description: post.seo.meta,
      image: `${SITE}/${post.foto}`,
      url,
      inLanguage: "pt-BR",
      author: { "@type": "Organization", name: EMPRESA.razao },
      publisher: {
        "@type": "Organization",
        name: EMPRESA.razao,
        logo: { "@type": "ImageObject", url: `${SITE}/assets/img/logo-marins.png` }
      },
      articleSection: post.seo.categoria,
      keywords: post.seo.kw
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: post.faq.map(f => ({
        "@type": "Question",
        name: f.p,
        acceptedAnswer: { "@type": "Answer", text: f.r }
      }))
    }
  ];

  return pagina({
    titulo: `${post.titulo} | Marins Engenharia`,
    descricao: post.seo.meta,
    canonical: url,
    imagem: post.foto,
    jsonLd,
    corpo,
    id: { valor: post.id, tipo: "post" },
    rota: `/blog/${post.id}`,
    scripts: ["blog.js", "dados.js", "galerias.js", "site.js"]
  });
}

/* ---------- escrita dos arquivos ---------- */
function escrever(rel, conteudo) {
  const destino = path.join(RAIZ, rel);
  fs.mkdirSync(path.dirname(destino), { recursive: true });
  fs.writeFileSync(destino, conteudo, "utf8");
  console.log("  " + rel);
}

console.log("Páginas de edifício:");
EMPREENDIMENTOS.forEach(emp => escrever(`edificios/${emp.id}.html`, paginaEmpreendimento(emp)));

console.log("Páginas de blog:");
BLOG.forEach(post => escrever(`blog/${post.id}.html`, paginaPost(post)));

/* ---------- sitemap e robots ---------- */
const hoje = new Date().toISOString().slice(0, 10);
const fixas = [
  { url: "/", prio: "1.0" },
  { url: "/edificios", prio: "0.9" },
  { url: "/quem-somos", prio: "0.7" },
  { url: "/locacao", prio: "0.7" },
  { url: "/blog", prio: "0.8" }
];
const enderecos = [
  ...fixas,
  ...EMPREENDIMENTOS.map(e => ({ url: `/edificios/${e.id}`, prio: "0.8" })),
  ...BLOG.map(p => ({ url: `/blog/${p.id}`, prio: "0.6" }))
];

escrever("sitemap.xml",
`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${enderecos.map(e => `  <url>
    <loc>${SITE}${e.url}</loc>
    <lastmod>${hoje}</lastmod>
    <priority>${e.prio}</priority>
  </url>`).join("\n")}
</urlset>
`);

escrever("robots.txt",
`User-agent: *
Allow: /

Sitemap: ${SITE}/sitemap.xml
`);

console.log(`\n${EMPREENDIMENTOS.length} edifícios, ${BLOG.length} textos, ${enderecos.length} endereços no sitemap.`);
