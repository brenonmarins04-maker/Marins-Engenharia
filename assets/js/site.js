/* ============================================================
   Marins Engenharia — comportamento do site
   Depende de dados.js (carregado antes)
   ============================================================ */

/* ---------- ícones ---------- */
const ICO = {
  zap: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.13c-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.19 8.19 0 0 1 2.41 5.83c0 4.54-3.7 8.21-8.24 8.21Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.14.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.74 2.66 4.22 3.73.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.23-.17-.48-.29Z"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
  fone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 1.9.6 2.8a2 2 0 0 1-.5 2.1L8.1 9.8a16 16 0 0 0 6 6l1.2-1.1a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.8.6a2 2 0 0 1 1.8 2.1Z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m2 7 10 6 10-6"/></svg>',
  check:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="m20 6-11 11-5-5"/></svg>',
  seta: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M19 12H5m6-7-7 7 7 7"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
  pessoa:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>',
  cama: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 18V7m0 6h18v5M7 11h3a3 3 0 0 1 0-4H7Z"/><path d="M21 18v-5a3 3 0 0 0-3-3h-4"/></svg>',
  banho:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><path d="M3 12h18v3a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4v-3Z"/><path d="M6 12V6a2 2 0 0 1 4 0"/></svg>',
  regua:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" aria-hidden="true"><rect x="2" y="8" width="20" height="8" rx="1"/><path d="M6 8v3M10 8v4M14 8v3M18 8v4"/></svg>'
};

const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c =>
  ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

/* Lê um texto de TEXTOS por caminho: t("vendas.titulo") */
const t = caminho => caminho.split(".").reduce((o, k) => (o == null ? o : o[k]), TEXTOS);

/* Bloco cinza no lugar da foto, com a legenda do que deve entrar ali.
   role="img" + aria-label fazem o papel do alt. */
function ph(legenda, classe){
  return `<span class="ph${classe ? " " + classe : ""}" role="img" aria-label="${esc(legenda)}" data-ph="${esc(legenda)}"></span>`;
}

const entregues = () => EMPREENDIMENTOS.filter(e => !e.exemplo);

/* Troca {edificios} e {apartamentos} pelos números reais */
function troca(v){
  const vars = {
    edificios: entregues().length,
    apartamentos: entregues().reduce((s, e) => s + e.unidades, 0)
  };
  return String(v).replace(/\{(\w+)\}/g, (m, k) => k in vars ? vars[k] : m);
}

/* *palavra* entre asteriscos vira destaque amarelo */
function destaque(texto){
  return esc(texto).replace(/\*([^*]+)\*/g, '<span class="realce">$1</span>');
}

/* ---------- textos fixos das páginas ---------- */
function preencherTextos(){
  document.querySelectorAll("[data-t]").forEach(el => {
    const v = t(el.dataset.t);
    if(typeof v === "string") el.textContent = troca(v);
  });
  document.querySelectorAll("[data-t-placeholder]").forEach(el => {
    const v = t(el.dataset.tPlaceholder);
    if(typeof v === "string") el.placeholder = v;
  });
}

/* ---------- cabeçalho e rodapé (iguais em todas as páginas) ---------- */
function montarCabecalho(){
  const alvo = document.getElementById("cabecalho");
  if(!alvo) return;
  const aqui = location.pathname.split("/").pop() || "index.html";
  const paginaMenu = aqui === "empreendimento.html" ? "edificios.html" : aqui;
  const paginaAtual = NAV.find(n => n.href === paginaMenu);
  const itens = NAV.map(n => {
    const atual = n.href === paginaMenu ? ' aria-current="page"' : "";
    return `<a href="${esc(n.href)}"${n.classe ? ` class="${esc(n.classe)}"` : ""}${atual}>${esc(n.texto)}</a>`;
  }).join("");

  alvo.innerHTML = `
  <div class="topo__in">
    <a class="marca" href="index.html">
      <img src="assets/img/logo-marins.png" alt="${esc(TEXTOS.cabecalho.inicio)}" width="44" height="43">
    </a>
    <span class="topo__pagina">${esc(paginaAtual ? paginaAtual.texto : "")}</span>
    <button class="menu-btn" type="button" aria-expanded="false" aria-controls="nav" aria-label="${esc(TEXTOS.cabecalho.menu)}">${ICO.menu}</button>
    <nav class="nav" id="nav" aria-label="Principal">
      ${itens}
      <a class="btn btn--zap" data-zap="vendas" target="_blank" rel="noopener">${esc(TEXTOS.cabecalho.vendas)}</a>
    </nav>
    <a class="btn btn--zap topo__vendas" data-zap="vendas" target="_blank" rel="noopener">Contato</a>
  </div>`;
  ligarMenu();
  if(document.body.classList.contains("home")){
    const atualizar = () => {
      const progresso = Math.min(window.scrollY / 180, 1);
      alvo.style.setProperty("--topo-opacidade", progresso);
      alvo.classList.toggle("topo--claro", progresso > .5);
    };
    window.addEventListener("scroll", atualizar, {passive:true});
    atualizar();
  }
}

function montarRodape(){
  const alvo = document.getElementById("rodape");
  if(!alvo) return;
  const R = TEXTOS.rodape;
  alvo.innerHTML = `
  <div class="env">
    <div class="rodape__grade">
      <div>
        <a class="marca" href="index.html">
          <img src="assets/img/logo-marins.png" alt="${esc(TEXTOS.cabecalho.inicio)}" width="58" height="56">
        </a>
        <p class="rodape__texto">${esc(R.texto)}</p>
      </div>
      <div>
        <h2 class="rodape__tit">${esc(R.site)}</h2>
        <ul>${NAV.map(n => `<li><a href="${esc(n.href)}">${esc(n.texto)}</a></li>`).join("")}</ul>
      </div>
      <div>
        <h2 class="rodape__tit">${esc(R.contato)}</h2>
        <ul>
          <li>${esc(EMPRESA.endereco)}</li>
          <li><a data-tel>${esc(EMPRESA.telefone)}</a></li>
          <li><a data-zap="geral" data-icone="nao" target="_blank" rel="noopener">${esc(EMPRESA.whatsappVisivel)}</a></li>
          <li><a data-mail>${esc(EMPRESA.email)}</a></li>
        </ul>
      </div>
    </div>
    <div class="rodape__fim">
      <span>© <span data-ano></span> ${esc(EMPRESA.razao)}</span>
      <span>${esc(EMPRESA.cidade)}</span>
    </div>
  </div>`;
}

/* ---------- cabeçalho: menu no celular ---------- */
function ligarMenu(){
  const btn = document.querySelector(".menu-btn");
  const nav = document.getElementById("nav");
  if(!btn || !nav) return;
  const definir = aberto => {
    nav.setAttribute("data-aberto", aberto ? "1" : "0");
    btn.setAttribute("aria-expanded", String(aberto));
    btn.setAttribute("aria-label", aberto ? TEXTOS.cabecalho.fecharMenu : TEXTOS.cabecalho.menu);
  };
  btn.addEventListener("click", () => definir(nav.getAttribute("data-aberto") !== "1"));
  nav.addEventListener("click", e => { if(e.target.closest("a")) definir(false); });
  document.addEventListener("keydown", e => {
    if(e.key === "Escape" && nav.getAttribute("data-aberto") === "1"){ definir(false); btn.focus(); }
  });
}

/* ---------- contatos e links vindos de dados.js ---------- */
function preencherContatos(){
  document.querySelectorAll("[data-campo]").forEach(el => {
    const v = EMPRESA[el.dataset.campo];
    if(v) el.textContent = v;
  });
  document.querySelectorAll("[data-zap]").forEach(el => {
    const chave = el.dataset.zap;
    el.href = zap(typeof MENSAGENS[chave] === "string" ? MENSAGENS[chave] : MENSAGENS.geral);
    if(el.dataset.icone !== "nao" && !el.querySelector("svg")) el.insertAdjacentHTML("afterbegin", ICO.zap);
  });
  document.querySelectorAll("[data-tel]").forEach(el => el.href = "tel:" + EMPRESA.telefoneLink);
  document.querySelectorAll("[data-mail]").forEach(el => el.href = "mailto:" + EMPRESA.email);
  document.querySelectorAll("[data-ano]").forEach(el => el.textContent = new Date().getFullYear());
  const icones = { "data-icone-pin":ICO.pin, "data-icone-fone":ICO.fone, "data-icone-zap":ICO.zap, "data-icone-mail":ICO.mail };
  Object.keys(icones).forEach(attr => {
    document.querySelectorAll("[" + attr + "]").forEach(el => el.innerHTML = icones[attr]);
  });

  const mapa = document.getElementById("mapa-escritorio");
  if(mapa){
    mapa.title = TEXTOS.contato.mapaTitulo;
    mapa.src = "https://www.google.com/maps?q=" + encodeURIComponent(EMPRESA.endereco) + "&output=embed";
  }
}

/* ---------- carrossel do topo ---------- */
function montarCarrossel(){
  const raiz = document.getElementById("carrossel");
  if(!raiz || typeof HERO === "undefined") return;
  const C = TEXTOS.carrossel;

  raiz.innerHTML = `
    <div class="cr__palco">
      ${HERO.map((s, i) => `
        <div class="cr__slide" data-i="${i}">
          <img class="cr__foto" src="${esc(s.foto)}" alt="${esc(s.alt)}"${i ? ' loading="lazy"' : ""}>
          <div class="cr__texto">
            <div class="env">
              <h${i ? "2" : "1"} class="cr__titulo">${destaque(troca(s.titulo))}</h${i ? "2" : "1"}>
              <p class="cr__sub">${esc(troca(s.texto))}</p>
              <a class="btn btn--amarelo" href="${esc(s.href)}">${esc(s.botao)}</a>
            </div>
          </div>
        </div>`).join("")}
    </div>
    <button class="cr__seta cr__seta--esq" type="button" aria-label="${esc(C.anterior)}">${ICO.seta}</button>
    <button class="cr__seta cr__seta--dir" type="button" aria-label="${esc(C.proxima)}">${ICO.seta}</button>
    <div class="cr__pontos">
      ${HERO.map((s, i) => `<button class="cr__ponto" type="button" aria-label="${esc(C.irPara)} ${i + 1}" data-i="${i}"></button>`).join("")}
    </div>`;

  const slides = [...raiz.querySelectorAll(".cr__slide")];
  const pontos = [...raiz.querySelectorAll(".cr__ponto")];
  let atual = 0, relogio = null, animando = false, iniciou = false;
  const reduz = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function mostrar(i){
    const proximo = (i + slides.length) % slides.length;
    if(animando || (iniciou && proximo === atual)) return;
    const anterior = atual;
    atual = proximo;
    if(iniciou && !reduz){
      animando = true;
      slides[anterior].classList.add("cr__slide--saindo");
      slides[atual].classList.add("cr__slide--entrando");
      setTimeout(() => {
        slides[anterior].classList.remove("cr__slide--saindo");
        slides[atual].classList.remove("cr__slide--entrando");
        animando = false;
      }, 1400);
    }
    iniciou = true;
    slides.forEach((s, n) => {
      const ativo = n === atual;
      s.classList.toggle("cr__slide--ativo", ativo);
      if(ativo) s.removeAttribute("aria-hidden"); else s.setAttribute("aria-hidden", "true");
      s.querySelectorAll("a").forEach(a => a.tabIndex = ativo ? 0 : -1);
    });
    pontos.forEach((p, n) => p.setAttribute("aria-current", String(n === atual)));
  }
  function reiniciar(){
    if(reduz) return;               // quem pediu menos movimento troca no botão
    clearInterval(relogio);
    relogio = setInterval(() => mostrar(atual + 1), 6000);   // sempre para frente: 1,2,3,4,1,2...
  }
  const andar = n => { mostrar(atual + n); reiniciar(); };

  raiz.querySelector(".cr__seta--esq").addEventListener("click", () => andar(-1));
  raiz.querySelector(".cr__seta--dir").addEventListener("click", () => andar(1));
  pontos.forEach(p => p.addEventListener("click", () => { mostrar(+p.dataset.i); reiniciar(); }));
  raiz.addEventListener("keydown", e => {
    if(e.key === "ArrowRight") andar(1);
    if(e.key === "ArrowLeft") andar(-1);
  });
  // para de girar enquanto a pessoa lê ou usa o teclado
  raiz.addEventListener("focusin", () => clearInterval(relogio));
  raiz.addEventListener("focusout", reiniciar);

  mostrar(0);
  reiniciar();
}

/* ---------- situação do empreendimento ---------- */
function selosEmpreendimento(emp){
  return `<div class="selos-empreendimento">${emp.id === "trentino"
    ? '<span class="entrega entrega--lancamento">Lançamento</span><span class="entrega entrega--novidades">Últimas unidades</span>'
    : '<span class="entrega">Entregue</span>'}</div>`;
}

/* ---------- cartões de empreendimento (venda) ---------- */
function cartaoEmpreendimento(emp){
  const url = "empreendimento.html?id=" + encodeURIComponent(emp.id);
  const legenda = TEXTOS.vendas.fotoCartao + " — " + emp.nome;
  return `
  <article class="cartao">
    <a class="cartao__foto" href="${url}" tabindex="-1">
      ${selosEmpreendimento(emp)}
      ${emp.foto ? `<img src="${esc(emp.foto)}" alt="${esc(legenda)}" loading="lazy">` : `<span class="foto-ausente">Fotos em breve</span>`}
    </a>
    <div class="cartao__corpo">
      <h3><a href="${url}">${esc(emp.nome)}</a></h3>
      <p class="cartao__meta">${esc(emp.metragem)} &nbsp;·&nbsp; ${esc(emp.dorms)}<br>${esc(emp.torres)}</p>
      <a class="link-mapa" href="${maps(emp.endereco)}" target="_blank" rel="noopener">${ICO.pin}${esc(emp.endereco)}</a>
    </div>
  </article>`;
}

/* ---------- cartões de locação ---------- */
function cartaoLocacao(un){
  const L = TEXTOS.locacao;
  const msg = MENSAGENS.edificio(`${un.predio} (apartamento ${un.apto})`);
  const extra = un.linkExterno
    ? `<a class="link-mapa" href="${esc(un.linkExterno)}" target="_blank" rel="noopener">${esc(L.anuncio)}</a>` : "";
  return `
  <article class="cartao">
    <div class="cartao__foto">
      <span class="cartao__tag">${esc(L.selo)}</span>
      ${ph(L.fotoCartao + " — " + un.nome, "ph--esc")}
    </div>
    <div class="cartao__corpo">
      <p class="loc__predio">${esc(un.predio)}</p>
      <h3>${esc(un.nome)}</h3>
      <ul class="ficha">
        <li>${ICO.pessoa}${un.hospedes} hóspedes</li>
        <li>${ICO.cama}${esc(un.camas)}</li>
        <li>${ICO.banho}${un.banheiros} ${un.banheiros > 1 ? "banheiros" : "banheiro"}</li>
        ${un.metragem ? `<li>${ICO.regua}${esc(un.metragem)}</li>` : ""}
      </ul>
      <p class="cartao__meta">${esc(un.detalhes)}</p>
      <a class="link-mapa" href="${maps(un.endereco)}" target="_blank" rel="noopener">${ICO.pin}${esc(un.endereco)}</a>
      ${extra}
      <div class="cartao__pe">
        <a class="btn btn--zap btn--bloco" href="${zap(msg)}" target="_blank" rel="noopener">${ICO.zap} ${esc(L.botao)}</a>
      </div>
    </div>
  </article>`;
}

/* ---------- linha do tempo ---------- */
function marcoHistoria(m){
  return `
  <article class="marco">
    <div class="marco__ano">${esc(m.ano)}</div>
    <div class="marco__conteudo">
      ${ph(m.foto, m.sepia ? "ph--sepia" : "")}
      <div>
        <h3>${esc(m.titulo)}</h3>
        <p>${esc(m.texto)}</p>
      </div>
    </div>
  </article>`;
}

/* ---------- depoimentos com abas (padrão WAI-ARIA tabs) ---------- */
function ligarDepoimentos(){
  const abas = [...document.querySelectorAll(".aba")];
  const painel = document.getElementById("painel-depoimentos");
  if(!abas.length || !painel) return;

  function selecionar(aba, focar){
    abas.forEach(a => {
      const ativa = a === aba;
      a.setAttribute("aria-selected", String(ativa));
      a.tabIndex = ativa ? 0 : -1;
    });
    painel.setAttribute("aria-labelledby", aba.id);
    painel.innerHTML = (DEPOIMENTOS[aba.dataset.chave] || []).map(d => `
      <figure class="depo">
        <blockquote>“${esc(d.texto)}”</blockquote>
        <figcaption><b>${esc(d.autor)}</b>${esc(d.ref)}</figcaption>
      </figure>`).join("");
    if(focar) aba.focus();
  }

  abas.forEach((aba, i) => {
    aba.addEventListener("click", () => selecionar(aba));
    aba.addEventListener("keydown", e => {
      const n = abas.length;
      const alvo = { ArrowRight: (i + 1) % n, ArrowLeft: (i - 1 + n) % n, Home: 0, End: n - 1 }[e.key];
      if(alvo === undefined) return;
      e.preventDefault();
      selecionar(abas[alvo], true);
    });
  });
  selecionar(abas.find(a => a.getAttribute("aria-selected") === "true") || abas[0]);
}

/* ---------- formulário de contato ---------- */
function ligarFormulario(){
  const form = document.getElementById("form-contato");
  if(!form) return;
  const C = TEXTOS.contato;
  const aviso = form.querySelector(".form__aviso");
  const avisar = (tipo, texto) => { aviso.dataset.tipo = tipo; aviso.textContent = texto; };

  form.addEventListener("submit", async e => {
    e.preventDefault();
    const dados = {
      nome: form.nome.value.trim(),
      email: form.email.value.trim(),
      telefone: form.telefone.value.trim(),
      mensagem: form.mensagem.value.trim(),
      origem: location.href,
      enviadoEm: new Date().toISOString()
    };

    form.querySelectorAll("[aria-invalid]").forEach(c => c.removeAttribute("aria-invalid"));
    const faltando = ["nome", "email", "telefone"].filter(k => !dados[k]);
    if(faltando.length){
      faltando.forEach(k => form[k].setAttribute("aria-invalid", "true"));
      form[faltando[0]].focus();
      return avisar("erro", C.faltaCampo);
    }
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dados.email)){
      form.email.setAttribute("aria-invalid", "true");
      form.email.focus();
      return avisar("erro", C.emailInvalido);
    }

    // Sem webhook configurado: leva a conversa para o WhatsApp.
    if(!EMPRESA.webhook){
      const texto = `Olá! Meu nome é ${dados.nome}.\nE-mail: ${dados.email}\nTelefone: ${dados.telefone}` +
        (dados.mensagem ? `\n\n${dados.mensagem}` : "");
      window.open(zap(texto), "_blank", "noopener");
      return avisar("ok", C.abriuZap);
    }

    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    avisar("", C.enviando);
    try{
      const r = await fetch(EMPRESA.webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dados)
      });
      if(!r.ok) throw new Error(r.status);
      form.reset();
      avisar("ok", C.enviado);
    }catch(err){
      avisar("erro", C.falhou);
    }finally{
      btn.disabled = false;
    }
  });
}

/* ---------- montagem de cada página ---------- */
const encher = (id, html) => { const el = document.getElementById(id); if(el) el.innerHTML = html; };

function montarHome(){
  montarCarrossel();
  encher("numeros", TEXTOS.numeros.map(n =>
    `<div class="dado"><b>${esc(troca(n.valor))}</b><span>${esc(n.rotulo)}</span></div>`).join(""));
  encher("trilho-vendas", EMPREENDIMENTOS.map(cartaoEmpreendimento).join(""));
}

function montarEdificios(){
  encher("grade-edificios", EMPREENDIMENTOS.map(cartaoEmpreendimento).join(""));
}

function montarQuemSomos(){
  const A = TEXTOS.anos;
  encher("anos-foto", `<img class="anos__foto" src="assets/img/predios/escritorio-marins.png" alt="Fachada do escritório da Marins Engenharia" loading="lazy">`);
  encher("anos-paragrafos", A.paragrafos.map(p => `<p>${esc(p)}</p>`).join(""));
  encher("anos-destaques", A.destaques.map(d => `<li><b>${esc(d.titulo)}</b><span>${esc(d.texto)}</span></li>`).join(""));
  encher("linha-tempo", HISTORIA.map(marcoHistoria).join(""));
  encher("principios", ["Missão", "Valores", "Visão"].map(titulo => TEXTOS.historia.principios.find(p => p.titulo === titulo)).map(p => `
    <div><h3>${esc(p.titulo)}</h3><p>${esc(p.texto)}</p></div>`).join(""));
}

function montarLocacao(){
  encher("grade-locacao", LOCACAO.map(cartaoLocacao).join(""));
  document.querySelectorAll("#grade-locacao .cartao").forEach((card, i) => {
    const id = LOCACAO[i].id.replace(/-\d+$/, "");
    const emp = EMPREENDIMENTOS.find(e => e.id === id);
    const fotos = emp ? fotosEmpreendimento(emp) : (GALERIAS[id] || []);
    if(fotos.length){
      card.querySelector(".cartao__foto .ph").outerHTML = miniaturaFoto(fotos[0], 0);
      ligarLupa(card, fotos);
    }
  });
}

function montarBlog(){
  const alvo = document.getElementById("grade-blog");
  if(!alvo) return;
  const B = TEXTOS.paginas.blog;
  alvo.innerHTML = (typeof BLOG !== "undefined" && BLOG.length)
    ? BLOG.map(post => {
        const url = "post.html?id=" + encodeURIComponent(post.id);
        return `
      <article class="post">
        <a class="post__foto-link" href="${url}" tabindex="-1">
          ${post.foto
            ? `<img class="post__foto" src="${esc(post.fotoMini || post.foto)}" alt="${esc(post.alt || post.titulo)}" loading="lazy">`
            : ph("Foto do post — " + post.titulo, "post__foto")}
        </a>
        <div class="post__corpo">
          <p class="post__data">${esc(post.data)}</p>
          <h3><a href="${url}">${esc(post.titulo)}</a></h3>
          <p class="post__resumo">${esc(post.resumo)}</p>
          <a class="post__link" href="${url}">${esc(B.ler)}</a>
        </div>
      </article>`;
      }).join("")
    : `<p class="medida">${esc(B.vazio)}</p>`;
}

/* ---------- página de um post (10 blocos do guia de produção) ---------- */
function montarPost(){
  const raiz = document.getElementById("pagina-post");
  if(!raiz) return;
  const B = TEXTOS.paginas.blog;
  const id = new URLSearchParams(location.search).get("id");
  const post = (typeof BLOG !== "undefined" ? BLOG : []).find(x => x.id === id);

  if(!post){
    raiz.innerHTML = `
      <div class="env secao">
        <h1>${esc(B.naoEncontrado)}</h1>
        <p class="medida emp__sub">${esc(B.naoEncontradoTexto)}</p>
        <a class="btn btn--linha" href="blog.html">${esc(B.voltar)}</a>
      </div>`;
    return;
  }

  document.title = post.titulo + " — " + EMPRESA.nome;
  const meta = document.querySelector('meta[name="description"]');
  if(meta) meta.content = post.seo.meta;

  const callout = c => c
    ? `<div class="callout callout--${esc(c.tipo)}"><p>${esc(c.texto)}</p></div>` : "";

  const secoes = post.secoes.map(s => `
    <section class="post__secao">
      <h2>${esc(s.titulo)}</h2>
      ${s.paragrafos.map(t => `<p>${esc(t)}</p>`).join("")}
      ${s.bullets && s.bullets.length ? `<ul class="post__lista">${s.bullets.map(b => `<li>${esc(b)}</li>`).join("")}</ul>` : ""}
      ${callout(s.callout)}
    </section>`).join("");

  const tabela = post.tabela ? `
    <div class="post__tabela-caixa">
      <table class="post__tabela">
        <caption>${esc(post.tabela.titulo)}</caption>
        <thead><tr>${post.tabela.colunas.map(t => `<th scope="col">${esc(t)}</th>`).join("")}</tr></thead>
        <tbody>
          ${post.tabela.linhas.map((linha, i) => `
            <tr${post.tabela.destaque === i ? ' class="post__tabela-destaque"' : ""}>
              ${linha.map((cel, j) => j === 0
                ? `<th scope="row">${esc(cel)}</th>`
                : `<td>${esc(cel)}</td>`).join("")}
            </tr>`).join("")}
        </tbody>
      </table>
    </div>` : "";

  const faq = `
    <section class="post__secao">
      <h2>${esc(B.perguntas)}</h2>
      <div class="faq">
        ${post.faq.map(f => `
          <div class="faq__item">
            <h3>${esc(f.p)}</h3>
            <p>${esc(f.r)}</p>
          </div>`).join("")}
      </div>
    </section>`;

  const outros = BLOG.filter(x => x.id !== post.id).slice(0, 2).map(x => `
    <a class="post__outro" href="post.html?id=${encodeURIComponent(x.id)}">
      <span class="post__outro-data">${esc(x.data)}</span>
      <span class="post__outro-titulo">${esc(x.titulo)}</span>
    </a>`).join("");

  raiz.innerHTML = `
  <header class="post-capa">
    <img class="post-capa__foto" src="${esc(post.foto)}" alt="${esc(post.alt)}">
    <div class="post-capa__texto">
      <div class="env">
        <p class="post-capa__marca">${esc(EMPRESA.nome)}</p>
        <p class="post-capa__sub">${esc(TEXTOS.rodape.texto)}</p>
        <p class="post-capa__pe">${esc(post.seo.categoria)} &nbsp;·&nbsp; ${esc(post.data)}</p>
      </div>
    </div>
  </header>

  <div class="env secao post__env">
    <a class="volta" href="blog.html">${ICO.seta} ${esc(B.voltar)}</a>

    <div class="post__seo">
      <p><b>${esc(B.seo)}</b> ${esc(B.palavraChave)} <b>${esc(post.seo.kw)}</b></p>
      <p>${esc(B.metaDescription)} ${esc(post.seo.meta)}</p>
      <p>${esc(post.seo.categoria)} &nbsp;·&nbsp; ${esc(post.seo.leitura)} &nbsp;·&nbsp; ${esc(post.seo.atualizado)}</p>
    </div>

    <h1 class="post__titulo">${esc(post.titulo)}</h1>

    <div class="post__resumo-rapido">
      <p class="post__resumo-rotulo">${esc(B.resumoRapido)}</p>
      <p>${esc(post.resumoRapido)}</p>
    </div>

    <p class="post__intro">${esc(post.intro)}</p>

    ${secoes}
    ${tabela}
    ${faq}

    <div class="post__cta">
      <h2>${esc(post.cta.titulo)}</h2>
      <p>${esc(post.cta.texto)}</p>
      <p class="post__cta-contato">${esc(EMPRESA.telefone)} &nbsp;·&nbsp; ${esc(EMPRESA.whatsappVisivel)} &nbsp;·&nbsp; ${esc(EMPRESA.email)}</p>
      <a class="btn btn--zap" data-zap="vendas" target="_blank" rel="noopener">${esc(TEXTOS.cabecalho.vendas)}</a>
    </div>

    <div class="post__fontes">
      <p class="post__fontes-rotulo">${esc(B.fontes)}</p>
      <p>${post.fontes.map(f => esc(f)).join(" | ")}</p>
    </div>

    ${outros ? `<div class="post__leia"><p class="post__fontes-rotulo">${esc(B.leiaTambem)}</p><div class="post__outros">${outros}</div></div>` : ""}
  </div>`;
}

/* ---------- página interna do empreendimento ---------- */
function montarEmpreendimento(){
  const raiz = document.getElementById("pagina-empreendimento");
  if(!raiz) return;
  const I = TEXTOS.interna;

  const id = new URLSearchParams(location.search).get("id");
  const emp = EMPREENDIMENTOS.find(e => e.id === id);

  const outros = document.getElementById("trilho-outros");
  if(outros) outros.innerHTML = EMPREENDIMENTOS.filter(e => e !== emp).map(cartaoEmpreendimento).join("");

  if(!emp){
    raiz.innerHTML = `
      <div class="env secao">
        <h1>${esc(I.naoEncontrado)}</h1>
        <p class="medida emp__sub">${esc(I.naoEncontradoTexto)}</p>
      </div>`;
    return;
  }

  document.title = emp.nome + " — " + EMPRESA.nome;
  const msg = MENSAGENS.edificio(emp.nome);
  document.querySelectorAll(".zap-fixo").forEach(el => el.dataset.zapPronto = zap(msg));

  const fotos = fotosEmpreendimento(emp);
  raiz.innerHTML = `
  <div class="env secao">
    <a class="volta" href="edificios.html">${ICO.seta} ${esc(I.voltar)}</a>

    <header class="emp__cab">
      <div>
        <h1>${esc(emp.nome)}</h1>
        <p class="emp__sub">${emp.id === "trentino" ? "Lançamento" : "Entregue"} &nbsp;·&nbsp; ${esc(emp.torres)}</p>
      </div>
      <a class="btn btn--zap" href="${zap(msg)}" target="_blank" rel="noopener">${ICO.zap} ${esc(TEXTOS.vendas.botaoCartao)}</a>
    </header>

    <div class="emp__grade">
      <div class="emp__principal">
        ${selosEmpreendimento(emp)}
        ${fotos.length ? miniaturaFoto(fotos[0], 0, "emp__foto") : '<p class="foto-ausente">Fotos em breve</p>'}
      </div>
      <div class="emp__galeria" aria-label="Fotos do edifício">
        ${fotos.map((foto, i) => miniaturaFoto(foto, i)).join("")}
      </div>

      <div class="emp__lado">
        <section class="caixa">
          <h2>${esc(I.localizacao)}</h2>
          <a class="link-mapa" href="${maps(emp.endereco)}" target="_blank" rel="noopener">${ICO.pin}${esc(emp.endereco)}</a>
          <h3>${esc(I.perto)}</h3>
          <ul class="perto">
            ${emp.pontos.map(p => `<li>${ICO.check}${esc(p)}</li>`).join("")}
          </ul>
        </section>

        <section class="caixa">
          <h2>${esc(I.apartamento)}</h2>
          <table class="tabela">
            <tbody>
              <tr><th scope="row">${esc(I.metragem)}</th><td>${esc(emp.metragem)}</td></tr>
              <tr><th scope="row">${esc(I.dormitorios)}</th><td>${esc(emp.dorms)}</td></tr>
              <tr><th scope="row">${esc(I.estrutura)}</th><td>${esc(emp.torres)}</td></tr>
              <tr><th scope="row">${esc(I.situacao)}</th><td>${emp.id === "trentino" ? "Lançamento — Últimas unidades" : "Entregue"}</td></tr>
            </tbody>
          </table>
          <h3>${esc(I.itens)}</h3>
          <p class="caixa__texto">${esc(emp.detalhes)}</p>
        </section>



      </div>
    </div>
  </div>`;

  ligarLupa(raiz, fotos);
}

/* ---------- fotos reais e visualizador ---------- */
function fotosEmpreendimento(emp){
  const fotos = [...(GALERIAS[emp.id] || [])];
  if(emp.foto) fotos.unshift({src:emp.foto, mini:emp.foto, legenda:"Fachada — " + emp.nome});
  return fotos;
}
function miniaturaFoto(foto, i, classe = ""){
  return `<button class="miniatura" type="button" data-foto-indice="${i}" aria-label="Ampliar: ${esc(foto.legenda)}">
    <img class="${classe}" src="${esc(classe ? foto.src : foto.mini)}" alt="${esc(foto.legenda)}" loading="lazy">
    <span>${esc(foto.legenda)}</span></button>`;
}
function ligarLupa(escopo, fotos){
  escopo.addEventListener("click", e => {
    const origem = e.target.closest("[data-foto-indice]");
    if(!origem || !fotos.length) return;
    let indice = Number(origem.dataset.fotoIndice);
    const cx = document.createElement("div");
    cx.className = "lupa";
    cx.setAttribute("role", "dialog");
    cx.setAttribute("aria-modal", "true");
    cx.setAttribute("aria-label", "Galeria de fotos");
    cx.innerHTML = `<button class="lupa__fechar" type="button">Fechar</button>
      <div class="lupa__cx"><img class="lupa__imagem" alt=""><p class="lupa__leg" aria-live="polite"></p>
      <div class="lupa__controles"><button type="button" data-anterior aria-label="Foto anterior">← Anterior</button>
      <button type="button" data-proxima aria-label="Próxima foto">Próxima →</button></div></div>`;
    document.body.appendChild(cx);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const mostrar = n => {
      indice = (n + fotos.length) % fotos.length;
      const foto = fotos[indice];
      const img = cx.querySelector("img");
      img.src = foto.src;
      img.alt = foto.legenda;
      cx.querySelector(".lupa__leg").textContent = `${foto.legenda} · ${indice + 1} / ${fotos.length}`;
    };
    const botoes = [...cx.querySelectorAll("button")];
    const teclas = ev => {
      if(ev.key === "Escape") fechar();
      if(ev.key === "ArrowLeft") { ev.preventDefault(); mostrar(indice - 1); }
      if(ev.key === "ArrowRight") { ev.preventDefault(); mostrar(indice + 1); }
      if(ev.key === "Tab"){
        ev.preventDefault();
        botoes[(botoes.indexOf(document.activeElement) + (ev.shiftKey ? -1 : 1) + botoes.length) % botoes.length].focus();
      }
    };
    function fechar(){
      cx.remove();
      document.body.style.overflow = overflow;
      document.removeEventListener("keydown", teclas);
      origem.focus();
    }
    cx.querySelector("[data-anterior]").onclick = () => mostrar(indice - 1);
    cx.querySelector("[data-proxima]").onclick = () => mostrar(indice + 1);
    cx.addEventListener("click", ev => { if(ev.target === cx || ev.target.closest(".lupa__fechar")) fechar(); });
    document.addEventListener("keydown", teclas);
    mostrar(indice);
    botoes[0].focus();
  });
}

/* Navegação móvel dos prédios: gesto nativo, encaixe e botões opcionais. */
function ligarTrilhos(){
  document.querySelectorAll("#trilho-vendas, #trilho-outros, #grade-edificios").forEach(trilho => {
    const cards = [...trilho.children];
    if(!cards.length) return;
    const controles = document.createElement("div");
    controles.className = "trilho-controles";
    controles.innerHTML = `<button type="button" aria-label="Prédio anterior">←</button><span></span><button type="button" aria-label="Próximo prédio">→</button>`;
    trilho.after(controles);
    const [anterior, proximo] = controles.querySelectorAll("button");
    let atual = 0;
    const atualizar = () => {
      const inicio = trilho.getBoundingClientRect().left + parseFloat(getComputedStyle(trilho).paddingLeft);
      atual = cards.reduce((melhor, card, i) => Math.abs(card.getBoundingClientRect().left - inicio) < Math.abs(cards[melhor].getBoundingClientRect().left - inicio) ? i : melhor, 0);
      controles.querySelector("span").textContent = `${atual + 1} de ${cards.length} · Deslize para ver mais`;
      anterior.disabled = atual === 0;
      proximo.disabled = atual === cards.length - 1;
    };
    const mover = passo => {
      const destino = cards[Math.max(0, Math.min(cards.length - 1, atual + passo))];
      const deslocamento = destino.getBoundingClientRect().left - trilho.getBoundingClientRect().left - parseFloat(getComputedStyle(trilho).paddingLeft);
      trilho.scrollBy({left:deslocamento, behavior:window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth"});
    };
    anterior.onclick = () => mover(-1);
    proximo.onclick = () => mover(1);
    trilho.addEventListener("scroll", atualizar, {passive:true});
    window.addEventListener("resize", atualizar);
    atualizar();
  });
}

/* ---------- início ---------- */
document.addEventListener("DOMContentLoaded", () => {
  montarCabecalho();
  montarRodape();
  preencherTextos();
  montarHome();
  montarEdificios();
  montarQuemSomos();
  montarLocacao();
  montarBlog();
  montarPost();
  montarEmpreendimento();
  ligarTrilhos();
  preencherContatos();
  document.querySelectorAll("[data-zap-pronto]").forEach(el => el.href = el.dataset.zapPronto);
  ligarDepoimentos();
  ligarFormulario();
});
