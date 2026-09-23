/* ============================================================
   BLOG — posts montados pelo método do Guia de Produção de Blog:
   cabeçalho da marca, bloco SEO, título, resumo rápido, introdução,
   seções H2, tabela, FAQ, CTA e fontes. Sem emoji e sem exclamação.
   Cada post tem uma palavra-chave principal diferente, com a cidade.
   Para publicar um novo texto, copie um bloco e troque o conteúdo.
   ============================================================ */
const BLOG = [
  {
    id: "localizacao-centro-sao-carlos",
    data: "Outubro / 2026",
    foto: "assets/img/blog/trentino-fachada.jpg",
    fotoMini: "assets/img/blog/trentino-fachada-mini.jpg",
    alt: "Entrada do Edifício Trentino, na Rua Padre Teixeira, 1456, no centro de São Carlos",
    titulo: "Apartamento no centro de São Carlos: por que a localização pesa",
    resumo: "O que o endereço decide na rotina, no custo mensal e na revenda, e como fica essa conta no Edifício Trentino, na Rua Padre Teixeira.",
    seo: {
      kw: "apartamento no centro de São Carlos",
      meta: "Por que a localização decide a compra de um apartamento no centro de São Carlos: rotina, custo mensal, revenda e o caso do Edifício Trentino.",
      categoria: "Guia da cidade",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em Outubro de 2026"
    },
    resumoRapido: "Localização é o único item de um apartamento que não pode ser reformado. Planta, acabamento e até a fachada mudam com obra; o endereço permanece o mesmo e define o tempo gasto no trajeto, o custo mensal com transporte e a facilidade de revender ou alugar. O Edifício Trentino, da Marins Engenharia, fica na Rua Padre Teixeira, 1456, no centro de São Carlos, com apartamentos de 64,52 m², dois dormitórios sendo uma suíte e varanda gourmet.",
    intro: "Duas plantas idênticas, com o mesmo acabamento e o mesmo preço, valem coisas diferentes se estiverem em ruas diferentes. Essa é a parte da compra que nenhuma reforma corrige depois. Este texto reúne o que a localização decide na prática e mostra como esses critérios se aplicam a um endereço concreto no centro de São Carlos.",
    secoes: [
      {
        titulo: "O que a localização decide antes do acabamento",
        paragrafos: [
          "Um apartamento é escolhido pela planta e vivido pelo endereço. O trajeto diário, o horário em que a rua silencia, a distância até a farmácia e a existência de ponto de ônibus na esquina aparecem todos os dias, enquanto o revestimento do banheiro deixa de ser notado na primeira semana.",
          "Há também o custo que não entra na tabela de vendas. Morar longe do trabalho e dos serviços significa mais combustível, mais tempo parado no trânsito e, em muitas famílias, a necessidade de um segundo carro. Esse gasto é mensal e acompanha o imóvel pela vida inteira."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Tudo em um apartamento pode ser reformado, menos o endereço. É o único item da compra que não tem conserto depois da escritura." }
      },
      {
        titulo: "Localização também é liquidez",
        paragrafos: [
          "Quem compra para morar costuma pensar só na rotina, mas todo imóvel um dia volta ao mercado, por venda ou por locação. Endereço central, com comércio, serviços e transporte por perto, tem público maior e tempo de negociação menor. É o que o mercado chama de liquidez.",
          "Regiões com boa infraestrutura urbana instalada também sofrem menos com mudanças de humor do mercado, porque a demanda não depende de um único fator, como a abertura de uma empresa ou a proximidade de um campus."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Como medir uma localização antes de comprar",
        paragrafos: [
          "Localização boa não é a que aparece bem no anúncio, e sim a que resolve a sua rotina. A forma mais simples de testar é caminhar. Saia do prédio e veja o que cabe em quinze minutos a pé em cada direção.",
          "A tabela abaixo organiza os critérios que mais pesam e como verificar cada um sem depender da descrição do anúncio."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Um endereço concreto: Edifício Trentino, Rua Padre Teixeira, 1456",
        paragrafos: [
          "O Edifício Trentino fica na Rua Padre Teixeira, 1456, no centro de São Carlos. São 24 apartamentos em uma torre, com 64,52 m² de área privativa, dois dormitórios sendo uma suíte, os dois banheiros com box, sala de dois ambientes, cozinha, área de serviço e varanda gourmet.",
          "O endereço reúne as três condições que este texto descreveu: região central com comércio e serviços no entorno, proximidade da USP São Carlos e vizinhança já consolidada, sem depender de infraestrutura futura. É uma rua residencial, mas a poucos minutos do centro comercial da cidade."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-aerea.jpg",
          alt: "Vista aérea do Edifício Trentino e do entorno, no centro de São Carlos",
          legenda: "Edifício Trentino visto de cima: torre única, em quadra residencial do centro de São Carlos.",
          retrato: true
        },
        callout: null
      },
      {
        titulo: "O que o prédio entrega além do endereço",
        paragrafos: [
          "A localização abre a porta, mas o que segura o morador é o conjunto. No Trentino, a área comum foi projetada para uso diário, com hall de entrada, portaria e acesso controlado. O prédio foi entregue e está ocupado, o que permite visitar e conversar com quem mora antes de decidir.",
          "Vale repetir o teste de visita em dois horários diferentes: durante o dia, para ver o movimento da rua e do comércio, e à noite, para ouvir o que acontece na quadra depois das dez."
        ],
        bullets: [
          "Confira o trajeto até o trabalho no horário real, em dia útil.",
          "Caminhe quatro quadras em cada direção e anote o que encontrou.",
          "Verifique as linhas de ônibus no ponto mais próximo.",
          "Pergunte ao porteiro qual é o horário de maior movimento na rua."
        ],
        figura: {
          src: "assets/img/blog/trentino-hall.jpg",
          alt: "Hall de entrada do Edifício Trentino, com painel de madeira, espelho e poltronas",
          legenda: "Hall de entrada do Trentino: a primeira área comum que morador e visita usam todos os dias."
        },
        callout: { tipo: "destaque", texto: "Edifício Trentino: Rua Padre Teixeira, 1456, centro de São Carlos. Apartamentos de 64,52 m², dois dormitórios com uma suíte e varanda gourmet." }
      }
    ],
    tabela: {
      titulo: "Critérios de localização e como verificar cada um",
      colunas: ["Critério", "Por que pesa", "Como verificar"],
      linhas: [
        ["Trajeto diário", "É o gasto de tempo que se repete todo dia útil", "Fazer o percurso entre sete e nove da manhã"],
        ["Serviços a pé", "Reduz o uso do carro e o custo mensal", "Caminhar quinze minutos a partir da portaria"],
        ["Transporte público", "Dá autonomia a quem não dirige", "Conferir linhas e frequência no ponto mais próximo"],
        ["Ruído da rua", "Define o sono e o uso da varanda", "Visitar o endereço depois das 22h"],
        ["Vizinhança consolidada", "Evita depender de obras e promessas futuras", "Observar se há comércio e prédios já ocupados na quadra"],
        ["Edifício Trentino", "Centro, quadra residencial, comércio e serviços por perto", "Visita agendada na Rua Padre Teixeira, 1456"]
      ],
      destaque: 5
    },
    faq: [
      { p: "Onde fica o Edifício Trentino em São Carlos?",
        r: "Na Rua Padre Teixeira, 1456, no centro de São Carlos. O prédio tem 24 apartamentos de 64,52 m², com dois dormitórios sendo uma suíte e varanda gourmet, e foi construído pela Marins Engenharia." },
      { p: "Vale a pena comprar apartamento no centro de São Carlos?",
        r: "Vale para quem quer reduzir deslocamento e resolver serviços a pé, e também para quem pensa em revenda ou locação, porque endereço central costuma ter público maior e negociação mais rápida." },
      { p: "Morar no centro significa conviver com barulho?",
        r: "Depende da rua, não da região. Quadras residenciais próximas ao centro costumam ser silenciosas à noite. A forma de confirmar é visitar o endereço depois das 22h, antes de fechar negócio." },
      { p: "Como visitar o Edifício Trentino?",
        r: "A visita é agendada com o time de vendas da Marins Engenharia pelo WhatsApp. O prédio está entregue e ocupado, o que permite conhecer a área comum e o entorno em horários diferentes." }
    ],
    cta: {
      titulo: "Agende uma visita ao Trentino",
      texto: "Conheça o apartamento, a área comum e a rua antes de decidir. O time de vendas responde em até um dia útil."
    },
    fontes: [
      "Plano Diretor do Município de São Carlos",
      "Prefeitura Municipal de São Carlos",
      "ABNT NBR 15575 (desempenho de edificações habitacionais)",
      "Memorial descritivo do Edifício Trentino",
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "construtora-sao-carlos",
    data: "Setembro / 2026",
    foto: "assets/img/blog/entrada-sao-carlos.jpg",
    fotoMini: "assets/img/blog/entrada-sao-carlos-mini.jpg",
    alt: "Entrada de São Carlos pela rodovia, com o nome da cidade escrito no barranco",
    titulo: "Construtora em São Carlos: como escolher antes de comprar",
    resumo: "Documentos, prazo de obra, garantias e os sinais de alerta que aparecem antes de assinar o contrato.",
    seo: {
      kw: "construtora em São Carlos",
      meta: "Como escolher uma construtora em São Carlos: documentos para exigir, prazo de obra, garantias após a entrega e sinais de alerta no contrato.",
      categoria: "Compra de imóvel",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em Setembro de 2026"
    },
    resumoRapido: "Escolher uma construtora em São Carlos é, na prática, conferir quatro coisas: memorial de incorporação registrado em cartório, responsável técnico com ART no CREA-SP, prazo de entrega escrito em contrato com multa por atraso e assistência técnica depois da chave. A Marins Engenharia incorpora e constrói em São Carlos há 25 anos, com oito edifícios entregues e 172 apartamentos construídos, e responde pelo empreendimento do terreno à entrega.",
    intro: "Quem compra apartamento em São Carlos costuma comparar planta, metragem e preço. O que decide a qualidade da compra, porém, aparece antes disso: quem constrói, o que está registrado em cartório e o que o contrato garante se a obra atrasar. Este guia reúne o que dá para verificar sozinho, sem depender da palavra do vendedor.",
    secoes: [
      {
        titulo: "Construtora e incorporadora não são a mesma coisa",
        paragrafos: [
          "A incorporadora é quem assume o terreno, registra o empreendimento, vende as unidades e responde pelo negócio perante o comprador. A construtora é quem executa a obra. Em muitos lançamentos são empresas diferentes, e o comprador acaba com dois interlocutores quando algo sai do previsto.",
          "Quando a mesma empresa faz as duas partes, existe um único responsável pelo prazo, pelo acabamento e pela assistência. É o caso da Marins Engenharia em São Carlos: compra do terreno, projeto, execução da obra e venda ficam na mesma casa."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Os cinco documentos que você pode exigir",
        paragrafos: [
          "Nenhum desses documentos é sigiloso. Todos podem ser pedidos antes de qualquer sinal ou reserva de unidade."
        ],
        bullets: [
          "Memorial de incorporação registrado no Cartório de Registro de Imóveis, exigido pelo artigo 32 da Lei 4.591/1964 para vender unidades na planta.",
          "Matrícula atualizada do terreno, que mostra proprietário, ônus e eventuais penhoras.",
          "ART ou RRT do responsável técnico, emitida pelo CREA-SP ou pelo CAU.",
          "Alvará de construção expedido pela Prefeitura Municipal de São Carlos.",
          "Habite-se, emitido na conclusão da obra, antes da entrega das chaves."
        ],
        callout: { tipo: "alerta", texto: "Empreendimento sem memorial de incorporação registrado não pode ser comercializado na planta. Se o vendedor não informa o número do registro e a matrícula, pare a negociação." }
      },
      {
        titulo: "Prazo de entrega e a tolerância de 180 dias",
        paragrafos: [
          "A Lei 13.786/2018 permite que o contrato preveja até 180 dias de tolerância sobre a data de entrega, desde que o prazo esteja escrito de forma clara. Passado esse período, o comprador pode exigir a multa prevista em contrato ou desfazer o negócio nas condições previstas em lei.",
          "Na leitura do contrato, procure três informações: a data prevista de conclusão, o tamanho da tolerância e o valor da multa por atraso. Contrato que traz apenas semestre ou ano de entrega, sem dia e mês, deixa o comprador sem parâmetro para cobrar."
        ],
        bullets: [],
        callout: { tipo: "destaque", texto: "Nas obras entregues pela Marins em São Carlos, nenhuma passou da data contratada. Fonte: base de dados interna da Marins Engenharia." }
      },
      {
        titulo: "O que continua garantido depois da chave",
        paragrafos: [
          "O artigo 618 do Código Civil dá cinco anos de garantia por solidez e segurança da construção. A ABNT NBR 15575, norma de desempenho de edificações habitacionais, organiza prazos menores por sistema: impermeabilização, instalações hidráulicas e elétricas, esquadrias, revestimentos e pintura têm prazos próprios.",
          "Esses prazos devem estar no manual do proprietário, entregue junto com a chave. É o manual que define o que é garantia, o que é manutenção do morador e a quem recorrer. Construtora que não entrega manual dificilmente mantém assistência organizada depois."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Uma lista curta para levar na visita",
        paragrafos: [
          "A tabela abaixo resume o que verificar, onde conferir cada item e o sinal de alerta correspondente. Serve para avaliar qualquer construtora em São Carlos, inclusive para comparar propostas concorrentes."
        ],
        bullets: [],
        callout: null
      }
    ],
    tabela: {
      titulo: "O que verificar antes de assinar",
      colunas: ["O que verificar", "Onde conferir", "Sinal de alerta"],
      linhas: [
        ["Memorial de incorporação", "Cartório de Registro de Imóveis", "Vendedor não informa o número do registro"],
        ["Responsável técnico", "ART ou RRT no CREA-SP ou no CAU", "Obra sem responsável identificado"],
        ["Obras anteriores", "Visita aos prédios já entregues", "Nenhum empreendimento concluído na cidade"],
        ["Prazo e multa por atraso", "Cláusula de entrega do contrato", "Prazo sem dia e mês ou sem multa definida"],
        ["Assistência após a entrega", "Manual do proprietário", "Nenhum canal de atendimento depois da chave"],
        ["Como a Marins responde", "Memorial registrado, ART no CREA-SP, manual do proprietário e assistência após a entrega", "—"]
      ],
      destaque: 5
    },
    faq: [
      { p: "Qual a diferença entre construtora e incorporadora em São Carlos?",
        r: "A incorporadora registra o empreendimento e vende as unidades; a construtora executa a obra. Quando a mesma empresa faz as duas funções, como a Marins Engenharia, existe um único responsável pelo prazo e pela assistência." },
      { p: "Como saber se a construtora entrega no prazo?",
        r: "Peça a lista de empreendimentos concluídos, compare a data prevista em contrato com a data do habite-se e visite os prédios entregues. Em São Carlos, os edifícios da Marins podem ser visitados na Rua Padre Teixeira, na Rua São Joaquim e na Rua José Bonifácio." },
      { p: "Posso acompanhar a obra antes da entrega?",
        r: "Sim. A visita é combinada com a empresa por questão de segurança. A Marins também publica o andamento de cada obra na página do empreendimento, com o percentual executado e a data da última atualização." },
      { p: "A Marins Engenharia atende fora de São Carlos?",
        r: "A atuação é concentrada em São Carlos, onde a empresa incorpora e constrói há 25 anos. Consultas de outras cidades podem ser feitas pelo WhatsApp de vendas." }
    ],
    cta: {
      titulo: "Fale com quem construiu o prédio",
      texto: "O time de vendas responde sobre documentação, prazo e unidades disponíveis em até um dia útil."
    },
    fontes: [
      "Lei 4.591/1964 (incorporação imobiliária)",
      "Lei 13.786/2018",
      "Código Civil, artigo 618",
      "ABNT NBR 15575 (desempenho de edificações habitacionais)",
      "CREA-SP",
      "Prefeitura Municipal de São Carlos",
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "apartamento-na-planta-sao-carlos",
    data: "Agosto / 2026",
    foto: "assets/img/blog/verticalizacao.jpg",
    fotoMini: "assets/img/blog/verticalizacao-mini.jpg",
    alt: "Vista aérea de avenida com prédios residenciais e comerciais",
    titulo: "Apartamento na planta em São Carlos: prazos e documentos",
    resumo: "Como funciona a compra na planta, o que o memorial descritivo precisa dizer e as etapas da obra até a entrega da chave.",
    seo: {
      kw: "apartamento na planta em São Carlos",
      meta: "Comprar apartamento na planta em São Carlos: memorial descritivo, etapas da obra, prazos, documentos e riscos que dá para reduzir antes de assinar.",
      categoria: "Compra de imóvel",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em Agosto de 2026"
    },
    resumoRapido: "Comprar apartamento na planta em São Carlos significa pagar durante a obra e receber a chave no fim dela. O que protege o comprador é o memorial de incorporação registrado, o memorial descritivo detalhando acabamentos, o cronograma com data de entrega e o acompanhamento do andamento da obra. A Marins Engenharia publica o percentual executado de cada empreendimento e entrega o manual do proprietário junto com as chaves.",
    intro: "Na planta, o comprador escolhe um apartamento que ainda não existe. O preço costuma ser menor que o do pronto e o pagamento se distribui ao longo da obra, mas a decisão depende de documentos, não de perspectiva artística. Abaixo estão as etapas, os papéis envolvidos e o que reduz risco em cada fase.",
    secoes: [
      {
        titulo: "O que você assina quando compra na planta",
        paragrafos: [
          "A compra na planta é uma promessa de compra e venda de unidade futura. O empreendimento precisa estar registrado no Cartório de Registro de Imóveis antes da primeira venda, conforme a Lei 4.591/1964, e o contrato deve trazer o quadro-resumo exigido pela Lei 13.786/2018, com preço total, forma de pagamento, prazo de entrega e consequências do atraso e da desistência.",
          "Guarde três documentos desde o início: contrato assinado, memorial descritivo e quadro de áreas da unidade. São eles que valem na vistoria, quando o apartamento fica pronto."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "O quadro-resumo fica na primeira página do contrato e precisa ser assinado separadamente. É onde aparecem, juntos, preço, prazo e multa." }
      },
      {
        titulo: "O memorial descritivo é o contrato do acabamento",
        paragrafos: [
          "O memorial descritivo lista o que será entregue em cada ambiente: tipo de piso, revestimento, esquadria, louças, metais, instalações e itens da área comum. Ele vale mais que o apartamento decorado, porque o decorado mostra móveis e objetos que não fazem parte do contrato.",
          "Ao ler o memorial, confira principalmente os pontos que custam caro para trocar depois."
        ],
        bullets: [
          "Instalação de gás, ponto de ar-condicionado e infraestrutura elétrica de cada cômodo.",
          "Tipo de esquadria e de vidro, que definem conforto térmico e acústico.",
          "Impermeabilização de áreas molhadas e da cobertura.",
          "Itens da área comum, incluindo elevador, gerador e vagas de garagem.",
          "Medição individual de água e de energia, que muda o valor do condomínio."
        ],
        callout: null
      },
      {
        titulo: "Da fundação à chave: como a obra avança",
        paragrafos: [
          "Um edifício residencial de médio porte em São Carlos costuma levar de 24 a 30 meses entre a fundação e o habite-se, variando com o número de pavimentos e com o tipo de fundação exigido pelo terreno. A tabela abaixo mostra o que acontece em cada etapa e o que o comprador recebe."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Os riscos reais e o que reduz cada um",
        paragrafos: [
          "O primeiro risco é o atraso. Ele diminui quando o contrato traz data exata, tolerância definida e multa, e quando a construtora tem histórico de obras concluídas na cidade.",
          "O segundo é a diferença entre o que foi vendido e o que é entregue. Ele diminui com memorial descritivo detalhado e vistoria feita item a item, com o memorial na mão, antes de assinar o termo de recebimento.",
          "O terceiro é financeiro: parcelas corrigidas por índice durante a obra e saldo final a financiar. Simule o saldo devedor na entrega antes de assinar, não durante a obra."
        ],
        bullets: [],
        callout: { tipo: "positivo", texto: "Acompanhamento publicado reduz o primeiro risco. Cada empreendimento da Marins tem página própria com o percentual de obra executado e a data da última atualização." }
      }
    ],
    tabela: {
      titulo: "Etapas da obra e o que o comprador recebe",
      colunas: ["Etapa", "O que acontece", "O que você recebe"],
      linhas: [
        ["Lançamento", "Registro do memorial de incorporação e abertura das vendas", "Contrato, memorial descritivo e quadro de áreas"],
        ["Fundação", "Sondagem do terreno, estacas e blocos", "Primeiros relatórios de andamento"],
        ["Estrutura", "Pilares, lajes e alvenaria, pavimento a pavimento", "Percentual executado atualizado"],
        ["Acabamento", "Revestimentos, esquadrias, instalações e pintura", "Visita técnica agendada"],
        ["Entrega", "Habite-se, vistoria e termo de recebimento", "Chave, manual do proprietário e garantias"]
      ],
      destaque: null
    },
    faq: [
      { p: "Quanto tempo leva para receber um apartamento na planta em São Carlos?",
        r: "Entre 24 e 30 meses, contados do início da obra, para edifícios residenciais de médio porte. O contrato pode prever até 180 dias de tolerância, conforme a Lei 13.786/2018." },
      { p: "Posso desistir da compra depois de assinar?",
        r: "Sim, com as consequências previstas no contrato e na Lei 13.786/2018, que define percentuais de retenção. Leia o quadro-resumo antes de assinar, porque é ali que esses valores aparecem." },
      { p: "O apartamento decorado é igual ao que será entregue?",
        r: "Não necessariamente. O que vale é o memorial descritivo. Móveis, objetos e, em alguns casos, revestimentos do decorado não fazem parte do contrato." },
      { p: "Como acompanho a obra do apartamento que comprei?",
        r: "Pela página do empreendimento no site da Marins, que mostra o percentual executado e a data da última atualização, e pelo contato direto com o time de vendas." }
    ],
    cta: {
      titulo: "Consulte as unidades disponíveis",
      texto: "Envie uma mensagem para saber quais apartamentos estão à venda e receber o memorial descritivo completo."
    },
    fontes: [
      "Lei 4.591/1964 (incorporação imobiliária)",
      "Lei 13.786/2018 (quadro-resumo e distrato)",
      "ABNT NBR 15575 (desempenho de edificações habitacionais)",
      "Código Civil, artigo 618",
      "Prefeitura Municipal de São Carlos",
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "onde-morar-sao-carlos",
    data: "Julho / 2026",
    foto: "assets/img/blog/crescimento-urbano.jpg",
    fotoMini: "assets/img/blog/crescimento-urbano-mini.jpg",
    alt: "Vista aérea de São Carlos com rodovia, bairros residenciais e área verde",
    titulo: "Onde morar em São Carlos: guia de regiões para quem compra",
    resumo: "Proximidade das universidades, deslocamento diário, entorno e o que olhar no prédio antes de decidir a região.",
    seo: {
      kw: "onde morar em São Carlos",
      meta: "Onde morar em São Carlos: como pesar proximidade das universidades, deslocamento, entorno e qualidade do prédio antes de comprar o apartamento.",
      categoria: "Guia da cidade",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em Julho de 2026"
    },
    resumoRapido: "A escolha de onde morar em São Carlos costuma se resolver em três perguntas: quanto tempo por dia você quer gastar no deslocamento, se a rotina gira em torno das universidades ou do centro, e se o prédio segue a norma de desempenho da ABNT. Os edifícios da Marins Engenharia ficam nas regiões da Vila Prado, do centro e do entorno da USP São Carlos, em ruas com comércio de bairro e linhas de ônibus.",
    intro: "Em uma cidade de porte médio, a distância entre dois extremos raramente passa de meia hora de carro. Isso faz a escolha do bairro parecer pouco importante, até a rotina começar. Trajeto diário, silêncio à noite e comércio na quadra pesam mais na convivência do que a metragem do apartamento.",
    secoes: [
      {
        titulo: "Comece pelo trajeto, não pelo bairro",
        paragrafos: [
          "Antes de comparar regiões, some o tempo que a casa vai consumir por dia: ida e volta do trabalho, escola das crianças, academia, supermercado. Quinze minutos a mais em cada trecho viram mais de dez horas por mês.",
          "Faça o trajeto no horário real, em um dia útil comum. O mesmo percurso muda de figura entre sete e nove da manhã, principalmente nos acessos às rodovias e nas vias próximas às universidades."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Perto da universidade ou perto do centro",
        paragrafos: [
          "São Carlos tem duas universidades públicas, USP e UFSCar, além de instituições privadas e de um polo de tecnologia. Isso cria duas lógicas de moradia. Perto dos campi, a procura por locação é constante e o perfil do entorno é mais jovem, o que interessa a quem compra para investir.",
          "Na região central e no seu entorno imediato, o ganho é de serviços: bancos, comércio de rua, Santa Casa e escolas a distância curta. É a escolha mais comum de quem compra para morar e quer resolver o dia a dia a pé."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Comprar para investir e comprar para morar levam a bairros diferentes. Defina o objetivo antes de visitar apartamentos, porque ele muda a lista de regiões." }
      },
      {
        titulo: "O que olhar no entorno antes de fechar",
        paragrafos: [
          "Boa parte do que incomoda depois é visível na primeira visita, desde que você saiba o que procurar. A tabela abaixo reúne os critérios que mais aparecem em reclamação de morador e como checar cada um."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Prédio novo e prédio antigo não entregam a mesma coisa",
        paragrafos: [
          "Desde 2013 está em vigor a ABNT NBR 15575, norma de desempenho que define requisitos de conforto térmico, conforto acústico, durabilidade e segurança para edificações habitacionais. Prédios projetados depois dela costumam ter isolamento e instalações em outro patamar.",
          "Some a isso a acessibilidade prevista na ABNT NBR 9050 nas áreas comuns, a medição individual de água e de energia, que muda o valor do condomínio, e a infraestrutura elétrica preparada para ar-condicionado e internet. São itens caros de corrigir em prédio antigo."
        ],
        bullets: [
          "Peça a ata da última assembleia para ver obras pendentes e inadimplência do condomínio.",
          "Verifique a existência de medidores individuais de água e de gás encanado.",
          "Confira a posição do sol no apartamento em uma visita à tarde.",
          "Pergunte quantas vagas de garagem pertencem à unidade e se são demarcadas."
        ],
        callout: null
      }
    ],
    tabela: {
      titulo: "Critérios de entorno e como checar cada um",
      colunas: ["Critério", "Por que importa", "Como checar"],
      linhas: [
        ["Ruído noturno", "Define o sono em noites de semana", "Visitar a rua entre 22h e 23h"],
        ["Comércio de bairro", "Resolve o dia a dia sem carro", "Caminhar quatro quadras ao redor"],
        ["Transporte público", "Reduz o custo fixo da família", "Conferir as linhas e a frequência no ponto mais próximo"],
        ["Fluxo de veículos", "Afeta ruído, poeira e segurança", "Passar no horário de pico"],
        ["Serviços de saúde", "Conta em urgência", "Medir a distância até a Santa Casa e até a UPA mais próxima"],
        ["Onde ficam os edifícios da Marins", "Regiões da Vila Prado, do centro e do entorno da USP São Carlos", "Visitar os prédios entregues na Rua Padre Teixeira e na Rua São Joaquim"]
      ],
      destaque: 5
    },
    faq: [
      { p: "Qual região de São Carlos é melhor para investir em locação?",
        r: "As áreas próximas à USP e à UFSCar mantêm procura constante por causa do calendário acadêmico. Para locação por temporada, a proximidade do centro também pesa." },
      { p: "Vale a pena morar perto do centro de São Carlos?",
        r: "Vale para quem quer resolver serviços a pé e reduzir o uso do carro. O custo é a convivência com o fluxo de veículos e com o ruído do comércio durante o dia." },
      { p: "Prédio novo tem condomínio mais caro?",
        r: "Não necessariamente. Medição individual de água e de energia, equipamentos novos e área comum enxuta costumam compensar o custo de operação." },
      { p: "A Marins Engenharia tem apartamentos disponíveis em qual região?",
        r: "Os edifícios ficam nas regiões da Vila Prado, do centro e do entorno da USP São Carlos. A disponibilidade atual pode ser consultada pelo WhatsApp de vendas." }
    ],
    cta: {
      titulo: "Conheça os edifícios da Marins",
      texto: "Agende uma visita aos prédios entregues em São Carlos e conheça as unidades disponíveis."
    },
    fontes: [
      "ABNT NBR 15575 (desempenho de edificações habitacionais)",
      "ABNT NBR 9050 (acessibilidade)",
      "Prefeitura Municipal de São Carlos",
      "Base de dados interna da Marins Engenharia"
    ]
  }
];
