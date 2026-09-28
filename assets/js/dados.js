/* ============================================================
   MARINS ENGENHARIA — FONTE ÚNICA DE DADOS DO SITE
   Edite SOMENTE este arquivo para mudar conteúdo do site.
   O HTML só tem estrutura; todo texto de negócio vem daqui.
   ============================================================ */

const EMPRESA = {
  nome: "Marins Engenharia",
  razao: "Marins Engenharia Ltda.",
  endereco: "Rua 28 de Setembro, 2882 — São Carlos, SP",
  telefone: "(16) 3307-3606",
  telefoneLink: "+551633073606",
  whatsapp: "5516997667976",          // só números, com DDI
  whatsappVisivel: "(16) 99766-7976",
  email: "vendas@marinsengenharia.com.br",
  cidade: "São Carlos, SP",
  // Cole aqui a URL do webhook (Zapier, Make, n8n, Formspree...).
  // Enquanto estiver vazio, o formulário abre o WhatsApp como alternativa.
  webhook: ""
};

/* ------------------------------------------------------------
   MENSAGENS DE WHATSAPP
   ------------------------------------------------------------ */
const MENSAGENS = {
  geral: "Olá! Vim pelo site da Marins Engenharia e gostaria de mais informações.",
  vendas: "Olá! Vim pelo site da Marins Engenharia e gostaria de falar com o time de vendas.",
  disponibilidade: "Olá! Gostaria de saber quais unidades estão disponíveis para compra.",
  // O nome já inclui "Edifício" (ex.: "Edifício Trentino")
  edificio: nome => `Olá, vi o ${nome} no site e gostaria de mais informações.`
};

/* Monta link de WhatsApp com mensagem pré-pronta */
function zap(mensagem){
  return "https://wa.me/" + EMPRESA.whatsapp + "?text=" + encodeURIComponent(mensagem);
}
/* Monta link do Google Maps a partir do endereço */
function maps(endereco){
  return "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(endereco + ", " + EMPRESA.cidade);
}

const NAV = [
  { texto: "Home",       href: "/" },
  { texto: "Edifícios",  href: "/edificios" },
  { texto: "Quem Somos", href: "/quem-somos" },
  { texto: "AirBnB",     href: "/locacao", classe: "nav__loc" },
  { texto: "Blog",       href: "/blog" }
];

/* ------------------------------------------------------------
   CARROSSEL DO TOPO
   *palavra* entre asteriscos sai destacada em amarelo.
   {edificios} e {apartamentos} vêm da lista de EMPREENDIMENTOS.
   foto: arquivo em assets/img/predios/
   ------------------------------------------------------------ */
const HERO = [
  {
    foto: "assets/img/predios/turim.jpg",
    alt: "Fachada do Edifício Turim vista de baixo, com céu azul",
    titulo: "*25 anos* construindo em São Carlos.",
    texto: "Incorporamos e construímos prédios residenciais de médio e alto padrão: do terreno à entrega das chaves.",
    botao: "Ver edifícios", href: "edificios.html"
  },
  {
    foto: "assets/img/predios/trivoli.jpg",
    alt: "Fachada do Edifício Trivoli, na Rua São Joaquim",
    titulo: "*100%* das obras entregues ANTES do prazo.",
    texto: "Todas as nossas obras foram entregues antes do prazo contratado.",
    botao: "Quem somos", href: "quem-somos.html"
  },
  {
    foto: "assets/img/predios/escritorio-marins.png",
    alt: "Fachada do escritório da Marins Engenharia",
    titulo: "*{edificios} edifícios* entregues na cidade.",
    texto: "São {apartamentos} apartamentos construídos nas melhores localizações de São Carlos.",
    botao: "Ver edifícios", href: "edificios.html"
  },
  {
    foto: "assets/img/predios/hall-apartamentos.jpg",
    alt: "Hall de entrada com poltronas, espelho e painel de madeira",
    titulo: "Hospede-se em um apartamento *nosso*.",
    texto: "Conheça nossos apartamentos para hospedagem pelo AirBnB e aproveite sua estadia em São Carlos.",
    botao: "Ver unidades", href: "locacao.html"
  }
];

/* ------------------------------------------------------------
   TEXTOS DAS SEÇÕES
   {edificios} e {apartamentos} são calculados a partir da lista
   de EMPREENDIMENTOS (ignorando os marcados como exemplo).
   ------------------------------------------------------------ */
const TEXTOS = {
  cabecalho: { vendas: "Falar com vendas", menu: "Abrir menu", fecharMenu: "Fechar menu", inicio: "Marins Engenharia — página inicial" },

  carrossel: { anterior: "Foto anterior", proxima: "Próxima foto", irPara: "Ir para a foto" },

  numeros: [
    { valor: "25", rotulo: "anos em São Carlos" },
    { valor: "100%", rotulo: "das obras entregues ANTES do prazo" }   // CONFIRMAR antes de publicar
  ],

  hero: {
    titulo: "O que construímos fica à vista.",
    texto: "Incorporamos e construímos prédios residenciais de médio e alto padrão em São Carlos.",
    ctaVer: "Ver empreendimentos",
    ctaVendas: "Falar com vendas",
    numeros: [
      { valor: "25", rotulo: "anos em São Carlos" },
      { valor: "100%", rotulo: "das obras entregues ANTES do prazo" }   // CONFIRMAR antes de publicar
    ]
  },

  vendas: {
    rotulo: "Venda de empreendimentos",
    titulo: "Nossos edifícios",
    tituloHome: "Nossos Edifícios",
    verTodos: "Ver todos os edifícios",
    depoimento: "O que dizem de quem mora aqui",
    texto: "Cada prédio tem uma página com plantas, localização, pontos de interesse ao redor e o andamento atualizado da obra.",
    cta: "Ver disponibilidade",
    botaoCartao: "Falar sobre este prédio",
    zapCartao: "Falar no WhatsApp sobre o",
    esgotado: "100% vendido",
    disponivel: "Apartamentos disponíveis",
    unidades: "Unidades disponíveis para venda",
    unidadesTexto: "Consulte valores e condições pelo WhatsApp de vendas.",
    semUnidades: "Este empreendimento está 100% vendido. Fale com a gente para saber sobre o próximo lançamento.",   // rótulo da bolinha, lido por leitor de tela
    obraExecutada: "da obra executada",
    fotoCartao: "Foto da fachada"
  },

  anos: {
    foto: "Foto da fachada — empreendimento em destaque",
    titulo: "25 anos de história",
    paragrafos: [
      "Estabelecida em São Carlos há 25 anos, a Marins Engenharia nasceu com o crescimento do setor e se firmou no mercado residencial, incorporando e construindo apartamentos de médio e alto padrão nas melhores localizações da cidade.",
      "Trabalhamos alinhados à Indústria 4.0 da construção civil: processos digitais, decisões baseadas em dados e controle da qualidade da escolha do material até a mão de obra."
    ],
    destaques: [
      { titulo: "100% dos edifícios entregues ANTES do prazo",
        texto: "Todas as nossas obras foram entregues antes do prazo contratado." },
      { titulo: "Cultura e valores preservados há décadas",
        texto: "Pessoas, inovação, objetividade, resultados, ética, meio ambiente e qualidade. Não são um quadro na parede: orientam a decisão de cada obra." }
    ]
  },

  locacao: {
    rotulo: "AirBnB",
    titulo: "Hospede-se em um apartamento nosso",
    aviso: "Sinta-se em casa durante sua estadia em São Carlos. Conheça os apartamentos da Marins disponíveis para hospedagem pelo AirBnB.",
    selo: "Disponível",
    botao: "Reservar pelo WhatsApp",
    verUnidades: "Ver apartamentos no AirBnB",
    anuncio: "Ver anúncio completo",
    fotoCartao: "Foto do apartamento"
  },

  historia: {
    rotulo: "A empresa",
    titulo: "Missão, visão e valores",
    principios: [
      { titulo: "Visão",
        texto: "Ser a melhor empresa em vendas, com retorno e qualidade ao cliente no setor da construção civil, com transparência em produtos diferenciados." },
      { titulo: "Missão",
        texto: "Estabelecer confiança plena com o cliente, garantindo o retorno do investimento e buscando excelência na qualidade através da padronização e do controle dos processos." },
      { titulo: "Valores",
        texto: "Pessoas, inovação, objetividade, resultados, ética, meio ambiente e qualidade — do corpo técnico que contratamos à tecnologia que aplicamos em obra." }
    ]
  },

  depoimentos: {
    rotulo: "Depoimentos",
    titulo: "O que dizem quem já ficou em um apartamento nosso",
    texto: "Avaliações deixadas por hóspedes que se hospedaram nos apartamentos da Marins em São Carlos."
  },

  contato: {
    rotulo: "Contato",
    titulo: "Dúvidas? Venha nos conhecer",
    texto: "Nosso escritório fica na Rua 28 de Setembro, em São Carlos. Se preferir, mande a mensagem aqui e retornamos.",
    mapaTitulo: "Localização do escritório da Marins Engenharia",
    escritorio: "Escritório",
    telefone: "Telefone",
    whatsapp: "WhatsApp de vendas",
    email: "E-mail",
    phMensagem: "Conte qual empreendimento interessou e o melhor horário para falarmos.",
    enviar: "Enviar mensagem",
    aviso: "Ao enviar, abrimos o WhatsApp com a sua mensagem pronta. Você confere antes de mandar.",
    enviando: "Enviando...",
    faltaCampo: "Preencha nome, e-mail e telefone para continuarmos.",
    emailInvalido: "Confira o e-mail: parece incompleto.",
    abriuZap: "Abrimos o WhatsApp com sua mensagem pronta para enviar.",
    enviado: "Mensagem enviada. Retornamos em até um dia útil.",
    falhou: "Não foi possível enviar agora. Chame no WhatsApp (16) 99766-7976 ou tente de novo."
  },

  paginas: {
    edificios: {
      rotulo: "Portfólio",
      titulo: "Edifícios da Marins",
      texto: "Conheça nossos edifícios: fotos, localização e detalhes dos apartamentos em uma página dedicada a cada empreendimento."
    },
    quemSomos: {
      rotulo: "A empresa",
      titulo: "Quem somos"
    },
    locacao: {
      rotulo: "AirBnB",
      titulo: "Apartamentos para sua estadia"
    },
    blog: {
      rotulo: "Blog",
      titulo: "Construtoras em São Carlos: guias de quem constrói",
      texto: "Documentos, prazos, regiões da cidade e o que olhar antes de comprar apartamento em São Carlos.",
      ler: "Ler o texto completo",
      voltar: "Todos os textos",
      naoEncontrado: "Texto não encontrado",
      naoEncontradoTexto: "O endereço acessado não corresponde a nenhum texto publicado.",
      seo: "SEO",
      palavraChave: "Palavra-chave principal:",
      metaDescription: "Meta description:",
      resumoRapido: "Resumo rápido",
      perguntas: "Perguntas frequentes",
      fontes: "Fontes e referências",
      leiaTambem: "Leia também",
      vazio: "Ainda não publicamos nenhum texto por aqui. Volte em breve."
    }
  },

  rodape: {
    texto: "Incorporação e construção de prédios residenciais em São Carlos, SP.",
    site: "Site",
    contato: "Contato"
  },

  interna: {
    voltar: "Todos os empreendimentos",
    fotoPrincipal: "Foto principal da fachada",
    plantas: "Plantas e apartamentos",
    localizacao: "Localização",
    perto: "Por perto",
    apartamento: "O apartamento",
    metragem: "Metragem",
    dormitorios: "Dormitórios",
    estrutura: "Estrutura",
    situacao: "Situação",
    itens: "Itens do apartamento",
    obra: "Andamento da obra",
    outrosRotulo: "Outros edifícios",
    outrosTitulo: "Veja o portfólio completo",
    naoEncontrado: "Empreendimento não encontrado",
    naoEncontradoTexto: "O endereço acessado não corresponde a nenhum prédio publicado.",
    fechar: "Fechar"
  }
};


/* ------------------------------------------------------------
   EMPREENDIMENTOS (VENDAS)
   ------------------------------------------------------------ */
const EMPREENDIMENTOS = [
  {
    id: "trentino",
    nome: "Edifício Trentino",
    // único empreendimento com apartamentos à venda
    disponiveis: [
      { andar: "1º andar", aptos: ["12", "13", "14"] },
      { andar: "2º andar", aptos: ["22", "24"] },
      { andar: "4º andar", aptos: ["42", "44"] },
      { andar: "6º andar", aptos: ["62"] }
    ],
    foto: "assets/img/predios/trentino.jpg",
    status: "Entregue",
    torres: "1 torre com 24 apartamentos",
    unidades: 24,
    metragem: "64,52 m²",
    dorms: "2 dormitórios (1 suíte)",
    detalhes: "02 dormitórios (sendo 01 suíte), ambos banheiros com box, sala dois ambientes, cozinha, área de serviço e varanda gourmet.",
    endereco: "Rua Padre Teixeira, 1456",
    plantas: ["Apto 12 — 64,52 m²", "Apto 41 — 64,52 m²", "Varanda gourmet", "Hall de entrada", "Área comum"]
  },
  {
    id: "turim",
    nome: "Edifício Turim",
    vendido: true,
    foto: "assets/img/predios/turim.jpg",
    status: "Vendido",
    torres: "1 torre com 20 apartamentos",
    unidades: 20,
    metragem: "57,27 m²",
    dorms: "2 dormitórios",
    detalhes: "02 dormitórios, banheiro com box, sala 02 ambientes, cozinha com gás encanado, área de serviço, sacada com vidro na fachada.",
    endereco: "Rua São Joaquim, 1885",
    plantas: ["Apto 22 — 57,27 m²", "Cozinha com gás encanado", "Sacada envidraçada", "Fachada"]
  },
  {
    id: "trieste",
    nome: "Edifício Trieste",
    vendido: true,
    foto: "assets/img/predios/trieste.jpg",
    status: "Vendido",
    torres: "1 torre com 24 apartamentos",
    unidades: 24,
    metragem: "68,77 m²",
    dorms: "2 dormitórios (1 suíte)",
    detalhes: "02 dormitórios (1 suíte), wc social, balcão americano, sala com dois ambientes, cozinha, área de serviço, sacada com vidro na fachada.",
    endereco: "Rua Padre Teixeira, 1465",
    plantas: ["Apto 62 — 68,77 m²", "Sala dois ambientes", "Suíte", "Sacada envidraçada", "Fachada"]
  },
  {
    id: "trivoli",
    nome: "Edifício Trivoli",
    vendido: true,
    foto: "assets/img/predios/trivoli.jpg",
    status: "Vendido",
    torres: "1 torre com 20 apartamentos",
    unidades: 20,
    metragem: "42,49 m²",
    dorms: "1 suíte",
    detalhes: "01 suíte, sala dois ambientes, cozinha com cooktop elétrico Tramontina, área de serviço, sacada com vidro na fachada.",
    endereco: "Rua São Joaquim, 2225",
    plantas: ["Apto 31 — 42,49 m²", "Cozinha com cooktop", "Suíte", "Fachada"]
  },
  {
    id: "trento",
    nome: "Edifício Trento",
    vendido: true,
    foto: "assets/img/predios/trento.jpg",
    status: "Vendido",
    torres: "1 torre com 20 apartamentos (14 com 42 m²)",
    unidades: 20,
    metragem: "42,00 m²",
    dorms: "1 suíte",
    detalhes: "01 suíte, balcão americano, sala, cozinha com cooktop elétrico Tramontina, área de serviço, sacada com vidro na fachada.",
    endereco: "Rua Padre Teixeira, 1680",
    plantas: ["Apto 32 — 42,00 m²", "Apto 33 — 42,00 m²", "Balcão americano", "Fachada"]
  },
  {
    id: "treviso",
    nome: "Edifício Treviso",
    vendido: true,
    status: "Vendido",
    torres: "1 torre com 16 apartamentos",
    unidades: 16,
    metragem: "65 m²",
    dorms: "2 dormitórios (1 suíte)",
    detalhes: "02 dormitórios (1 suíte), banheiro com box, sala, cozinha, área de serviço.",
    endereco: "Rua José Bonifácio, 1627",
    plantas: ["Apto 21 — 65 m²", "Sala", "Suíte", "Fachada"]
  },
  {
    id: "mario-verzola",
    nome: "Edifício Mario Verzola",
    vendido: true,
    foto: "assets/img/predios/mario-verzola.jpg",
    status: "Vendido",
    torres: "1 torre com 16 apartamentos",
    unidades: 16,
    metragem: "43 m²",
    dorms: "1 dormitório",
    detalhes: "01 dormitório, banheiro com box, sala, cozinha, área de serviço.",
    endereco: "Rua Aldino Del Nero, 257",
    plantas: ["Apto 14 — 43 m²", "Sala e cozinha", "Fachada"]
  },
  {
    id: "ana-terra",
    nome: "Edifício Ana Terra",
    vendido: true,
    foto: "assets/img/predios/ana-terra.jpg",
    status: "Vendido",
    torres: "2 torres com 32 apartamentos",
    unidades: 32,
    metragem: "43 m²",
    dorms: "1 dormitório",
    detalhes: "01 dormitório, banheiro com box, sala, cozinha e área de serviço.",
    endereco: "Rua Dona Maria Jacinta, 136",
    plantas: ["Apto 11 — 43 m²", "Área comum", "Torre A", "Torre B"]
  },

];

/* ------------------------------------------------------------
   LOCAÇÃO — unidades disponíveis
   apto: número usado na mensagem de WhatsApp
   linkExterno: cole aqui o link do Airbnb, se houver
   ------------------------------------------------------------ */
const LOCACAO = [
  { id:"ferretto-41", nome:"Ferretto 41", apto:"41", predio:"Edifício Ferretto", endereco:"Rua Riachuelo, 907",
    hospedes:3, camas:"1 cama e sofá-cama", banheiros:1, metragem:"38,22 m²",
    detalhes:"01 dormitório suíte, balcão americano, sala, cozinha e área de serviço. Apartamento inteiro.", linkExterno:"" },
  { id:"ferretto-53", nome:"Ferretto 53", apto:"53", predio:"Edifício Ferretto", endereco:"Rua Riachuelo, 907",
    hospedes:3, camas:"2 camas e sofá-cama", banheiros:1, metragem:"",
    detalhes:"01 dormitório suíte, balcão americano, sala, cozinha e área de serviço.", linkExterno:"" },
  { id:"trieste-62", nome:"Trieste 62", apto:"62", predio:"Edifício Trieste", endereco:"Rua Padre Teixeira, 1465",
    hospedes:5, camas:"3 camas e sofá-cama", banheiros:2, metragem:"68,77 m²",
    detalhes:"02 dormitórios (1 suíte), wc social, balcão americano, sala com dois ambientes, cozinha e área de serviço, sacada envidraçada.", linkExterno:"" },
  { id:"trento-32", nome:"Trento 32", apto:"32", predio:"Edifício Trento", endereco:"Rua Padre Teixeira, 1680",
    hospedes:3, camas:"2 camas e sofá-cama", banheiros:1, metragem:"42,00 m²",
    detalhes:"01 suíte, sala, cozinha e área de serviço, sacada envidraçada.", linkExterno:"" },
  { id:"trento-33", nome:"Trento 33", apto:"33", predio:"Edifício Trento", endereco:"Rua Padre Teixeira, 1680",
    hospedes:3, camas:"2 camas e sofá-cama", banheiros:1, metragem:"42,00 m²",
    detalhes:"01 suíte, sala, cozinha e área de serviço, sacada envidraçada.", linkExterno:"" }
];


/* ------------------------------------------------------------
   DEPOIMENTOS
   Investidor e Morador são FICTÍCIOS (placeholder) — troque
   pelos depoimentos reais. Locatário usa os textos reais.
   ------------------------------------------------------------ */
const DEPOIMENTOS = [
    { texto:"A Milena superou todas as expectativas na atenção, zelo e receptividade! Apartamento excelente, limpeza excelente! Tudo feito com muito carinho pra receber os hóspedes...",
      autor:"Gabi", ref:"Hóspede — Novembro/2019" },
    { texto:"O apartamento é maravilhoso, com todos os detalhes para facilitar nossa vida... A limpeza estava impecável. O quarto muito aconchegante com ótima cama...",
      autor:"Angélica", ref:"Hóspede — Agosto/2019" },
    { texto:"A hospedagem foi incrível. No meu caso que fui com criança me atendeu muito mais que um hotel. A cozinha é completa... O prédio é tranquilo e fica próximo do centro.",
      autor:"Rafael", ref:"Hóspede — Março/2019" }
];


/* Os posts do blog ficam em assets/js/blog.js */
