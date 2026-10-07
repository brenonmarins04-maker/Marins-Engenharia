/* ============================================================
   BLOG — posts montados pelo método do Guia de Produção de Blog:
   cabeçalho da marca, bloco SEO, título, resumo rápido, introdução,
   seções H2, tabela, FAQ, CTA e fontes. Sem emoji e sem exclamação.
   Cada post tem uma palavra-chave principal diferente, com a cidade.
   Para publicar um novo texto, copie um bloco e troque o conteúdo.
   ============================================================ */
const BLOG = [
  {
    id: "vistoria-entrega-chaves-sao-carlos",
    data: "7 de outubro de 2026",
    foto: "assets/img/blog/vistoria-entrega-chaves.webp",
    fotoMini: "assets/img/blog/vistoria-entrega-chaves-mini.webp",
    alt: "Fachada do Edifício Trivoli, da Marins Engenharia, na Rua São Joaquim, com janelas e portão de garagem",
    titulo: "Vistoria na entrega das chaves em São Carlos: roteiro",
    resumo: "Como fazer a vistoria do apartamento novo antes de assinar o termo de recebimento, o que conferir e como registrar o que estiver fora do combinado.",
    seo: {
      kw: "vistoria na entrega das chaves em São Carlos",
      meta: "Vistoria na entrega das chaves em São Carlos: o que conferir no apartamento novo, como registrar problemas e por que revisar antes do termo de recebimento.",
      categoria: "Compra de imóvel",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em 7 de outubro de 2026"
    },
    resumoRapido: "A vistoria é a conferência do apartamento pronto contra o que foi contratado, feita antes de assinar o termo de recebimento. Leve o contrato e o memorial descritivo, teste cada item, anote tudo por escrito e peça que os problemas constem no documento. Pressa na assinatura é o erro mais comum.",
    intro: "Receber a chave é o fim da espera, mas também o último momento para conferir o apartamento com calma. Depois da assinatura do termo de recebimento, fica mais difícil provar o que já estava fora do combinado. Este roteiro mostra como se organizar para a visita e o que olhar em cada ambiente.",
    secoes: [
      {
        titulo: "O que é a vistoria e quando ela acontece",
        paragrafos: [
          "A vistoria é a visita em que o comprador confere o apartamento pronto e compara o que vê com o contrato e com o memorial descritivo. Ela acontece perto da entrega, em data combinada com a construtora.",
          "O termo de recebimento é o documento que registra que o comprador recebeu a unidade. Por isso, a vistoria vem antes dele. Se algo estiver errado, o ideal é que o problema esteja descrito no termo, e não apenas dito de boca."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "O que levar para a visita",
        paragrafos: [
          "Uma boa vistoria depende mais de preparo do que de conhecimento técnico. Separe poucos itens e leve todos."
        ],
        bullets: [
          "Contrato de compra e venda e memorial descritivo, para comparar item a item.",
          "Planta da unidade, com as medidas dos ambientes.",
          "Lanterna, trena e um carregador de celular com adaptador para testar tomadas.",
          "Celular para fotografar e filmar cada problema.",
          "Uma pessoa de confiança, ou um profissional de engenharia, se você preferir uma segunda opinião."
        ],
        callout: null
      },
      {
        titulo: "O que conferir em cada ambiente",
        paragrafos: [
          "Vá cômodo por cômodo, sempre na mesma ordem. Abra e feche portas e janelas, ligue e desligue luzes, abra torneiras e dê descarga. Olhe também para o teto e para os cantos, onde aparecem manchas e fissuras.",
          "A tabela abaixo reúne os pontos principais. Ela não substitui o memorial descritivo, que é a referência para o que foi prometido."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Teste a pressão e o escoamento da água em todos os pontos, inclusive no ralo do box e na área de serviço. Problemas hidráulicos são mais fáceis de resolver antes da mudança." }
      },
      {
        titulo: "Como registrar o que estiver fora do combinado",
        paragrafos: [
          "Anote cada problema com o ambiente, a descrição e uma foto. Entregue a lista por escrito e peça que ela seja anexada ao termo de recebimento, com data e assinatura das duas partes.",
          "Peça também um prazo para o reparo. Sem prazo escrito, a correção fica sem data para acontecer."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Evite assinar o termo de recebimento sem a lista de pendências anexada. Se faltar tempo para olhar tudo, peça outra data de vistoria." }
      },
      {
        titulo: "Depois da vistoria: chaves, manual e garantias",
        paragrafos: [
          "Com o termo assinado, peça o manual do proprietário. Ele explica o uso e a manutenção de cada sistema do apartamento e do prédio, e indica a quem recorrer se algo apresentar defeito.",
          "Guarde o termo, a lista de pendências, as fotos e o manual juntos. Esses documentos valem em qualquer conversa futura sobre assistência."
        ],
        bullets: [],
        callout: null
      }
    ],
    tabela: {
      titulo: "O que conferir na vistoria",
      colunas: ["Item", "Como testar", "O que anotar"],
      linhas: [
        ["Paredes e teto", "Olhar com lanterna, de perto e de lado", "Manchas, fissuras, falhas de pintura"],
        ["Pisos e revestimentos", "Passar a mão e observar o alinhamento", "Peças soltas, trincadas ou manchadas"],
        ["Portas e janelas", "Abrir, fechar e trancar cada uma", "Folgas, atrito, vidros riscados"],
        ["Tomadas e interruptores", "Testar com carregador e ligar cada luz", "Pontos sem energia ou fora do lugar"],
        ["Torneiras, ralos e descargas", "Abrir, dar descarga e observar o escoamento", "Vazamento, entupimento, pressão baixa"],
        ["Medidas dos ambientes", "Conferir com a trena e a planta", "Diferenças em relação à planta"]
      ],
      destaque: null
    },
    faq: [
      { p: "Posso levar alguém para a vistoria?",
        r: "Sim. Levar uma pessoa de confiança ou um profissional de engenharia ajuda a enxergar problemas que passam despercebidos na empolgação da entrega." },
      { p: "Quanto tempo deve durar a vistoria?",
        r: "O tempo necessário para conferir todos os ambientes sem pressa. Se a visita não for suficiente, peça uma segunda data." },
      { p: "O que fazer se encontrar defeitos?",
        r: "Registre cada um por escrito, com fotos, e peça que a lista seja anexada ao termo de recebimento, junto com um prazo para o reparo." },
      { p: "Quando devo assinar o termo de recebimento?",
        r: "Depois de conferir o apartamento e de ter as pendências registradas por escrito. Assinar sem a lista pode dificultar a cobrança dos reparos." },
      { p: "Posso tirar dúvidas sobre a entrega de um apartamento da Marins?",
        r: "Sim. O time de vendas da Marins Engenharia, em São Carlos, responde pelo WhatsApp (16) 99766-7976 ou pelo e-mail vendas@marinsengenharia.com.br." }
    ],
    cta: {
      titulo: "Tire dúvidas sobre a entrega",
      texto: "Fale com o time de vendas da Marins Engenharia para entender as etapas da compra e da entrega de um apartamento em São Carlos."
    },
    fontes: []
  },

  {
    id: "itbi-sao-carlos",
    data: "5 de outubro de 2026",
    foto: "assets/img/blog/itbi-imposto-compra.webp",
    fotoMini: "assets/img/blog/itbi-imposto-compra-mini.webp",
    alt: "Entrada e garagem do Edifício Ferretto, da Marins Engenharia, na Rua Riachuelo, vistas da esquina",
    titulo: "ITBI em São Carlos: o que é e quando se paga",
    resumo: "O que é o ITBI, quem paga, em que momento da compra ele é cobrado e por que sem ele o registro do apartamento não sai.",
    seo: {
      kw: "ITBI em São Carlos",
      meta: "ITBI em São Carlos: o que é o imposto, quem paga, em que etapa da compra ele é cobrado e como se relaciona com a escritura e o registro.",
      categoria: "Compra de imóvel",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em 5 de outubro de 2026"
    },
    resumoRapido: "O ITBI é o imposto municipal cobrado quando a propriedade de um imóvel é transferida em uma compra e venda. Quem paga, em regra, é o comprador. Ele é recolhido antes da escritura e do registro, e o comprovante de pagamento é exigido pelo cartório. Por isso, entra no planejamento da compra junto com as demais despesas de documentação.",
    intro: "Quem compra um apartamento paga o preço combinado com o vendedor e mais um conjunto de despesas que ficam de fora da negociação. O ITBI é uma delas. Este texto explica o que é o imposto, em que momento ele aparece e como se preparar, sem citar alíquotas ou valores, que são definidos pelo município e podem mudar.",
    secoes: [
      {
        titulo: "O que é o ITBI",
        paragrafos: [
          "ITBI é a sigla de Imposto sobre a Transmissão de Bens Imóveis. É um tributo do município: quem cobra é a prefeitura da cidade onde o imóvel está. Em um apartamento em São Carlos, portanto, o imposto é recolhido à prefeitura de São Carlos.",
          "O fato que gera o imposto é a transferência da propriedade entre pessoas vivas, por compra e venda, por exemplo. Ele não é um custo do banco nem do cartório, embora o cartório exija a prova de que foi pago."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Quem paga e quando",
        paragrafos: [
          "Em regra, o ITBI é pago pelo comprador. Isso pode ser combinado de outra forma entre as partes, mas o costume é esse, e vale deixar escrito no contrato quem arca com cada despesa.",
          "O pagamento acontece antes da escritura e do registro. Com o imposto quitado, o comprador apresenta o comprovante ao tabelionato e, depois, ao Cartório de Registro de Imóveis. Sem ele, o registro na matrícula não é feito, e a propriedade não é transferida."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Pague o ITBI apenas com a guia emitida pela prefeitura ou por canal oficial indicado por ela. Desconfie de boleto recebido por mensagem de terceiros." }
      },
      {
        titulo: "Em que ordem as despesas aparecem",
        paragrafos: [
          "Na compra de um apartamento, o ITBI faz parte de uma sequência. Conhecer a ordem evita surpresa no caixa."
        ],
        bullets: [
          "Documentos do comprador, do vendedor e do imóvel são conferidos.",
          "A prefeitura emite a guia do ITBI e o comprador paga.",
          "A escritura é lavrada no tabelionato, ou o contrato é assinado com o banco, quando há financiamento.",
          "O título é levado ao Cartório de Registro de Imóveis e registrado na matrícula."
        ],
        callout: null
      },
      {
        titulo: "ITBI e financiamento",
        paragrafos: [
          "Quem financia o imóvel costuma precisar do dinheiro do imposto e das despesas de cartório em recursos próprios, separados do valor financiado. Pergunte ao banco, antes de fechar, quais despesas ele não cobre.",
          "Se o banco tiver regras próprias para o momento do pagamento do imposto, elas constam na lista de documentos que a instituição entrega ao comprador."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Documentos e etapas da compra estão no texto sobre documentos para comprar apartamento em São Carlos." }
      },
      {
        titulo: "Como se preparar",
        paragrafos: [
          "Antes de assinar, pergunte à prefeitura ou ao tabelionato como o imposto é calculado e emitido no caso do seu imóvel. A forma de apurar a base de cálculo é definida pelo município e pode mudar com o tempo, por isso a informação deve ser confirmada na hora da compra.",
          "Reserve esse valor no orçamento junto com escritura, registro e eventual mudança. Quem só descobre o custo no dia da escritura costuma atrasar a transferência."
        ],
        bullets: [],
        callout: null
      }
    ],
    tabela: {
      titulo: "ITBI em resumo",
      colunas: ["Ponto", "Como funciona em geral"],
      linhas: [
        ["Quem cobra", "A prefeitura do município onde o imóvel está"],
        ["Quem paga", "Em regra, o comprador, salvo combinação diferente por escrito"],
        ["Quando é pago", "Antes da escritura e do registro"],
        ["Para que serve o comprovante", "O cartório o exige para registrar a transferência"],
        ["Valor e forma de cálculo", "Definidos pelo município; confirme na prefeitura ou no tabelionato"]
      ],
      destaque: null
    },
    faq: [
      { p: "O ITBI é a mesma coisa que o IPTU?",
        r: "Não. O ITBI é cobrado uma vez, na transferência do imóvel. O IPTU é o imposto sobre a propriedade, cobrado todos os anos do dono." },
      { p: "Posso registrar o apartamento sem pagar o ITBI?",
        r: "Não. O Cartório de Registro de Imóveis exige o comprovante do imposto para registrar a transferência na matrícula." },
      { p: "Quem paga o ITBI em um financiamento?",
        r: "Em regra, o comprador, e geralmente com recursos próprios, fora do valor financiado. Confirme com o banco o que a instituição cobre." },
      { p: "O ITBI tem o mesmo valor em todas as cidades?",
        r: "Não. Ele é um imposto municipal, e cada município define suas regras. Por isso a consulta deve ser feita na prefeitura da cidade do imóvel." },
      { p: "Posso tirar dúvidas sobre a compra de um apartamento da Marins?",
        r: "Sim. O time de vendas da Marins Engenharia, em São Carlos, responde pelo WhatsApp (16) 99766-7976 ou pelo e-mail vendas@marinsengenharia.com.br." }
    ],
    cta: {
      titulo: "Planeje a compra com antecedência",
      texto: "Fale com o time de vendas da Marins Engenharia para entender as etapas da compra de um apartamento em São Carlos."
    },
    fontes: []
  },

  {
    id: "valor-do-condominio-sao-carlos",
    data: "3 de outubro de 2026",
    foto: "assets/img/blog/valor-condominio.webp",
    fotoMini: "assets/img/blog/valor-condominio-mini.webp",
    alt: "Garagem coberta do Edifício Trentino, da Marins Engenharia, com pilares sinalizados e piso intertravado",
    titulo: "O que compõe o valor do condomínio em São Carlos",
    resumo: "As despesas que entram no rateio mensal, a diferença entre taxa ordinária e extraordinária, para que serve o fundo de reserva e o que pedir antes de comprar.",
    seo: {
      kw: "valor do condomínio em São Carlos",
      meta: "O que compõe o valor do condomínio em São Carlos: as despesas que entram no rateio, a diferença entre taxa ordinária e extraordinária e o que conferir.",
      categoria: "Custos de morar",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em 3 de outubro de 2026"
    },
    resumoRapido: "A taxa de condomínio não é um preço cobrado por alguém: é a divisão, entre os moradores, do custo de manter as áreas que pertencem a todos. Entram nessa conta pessoal, água e energia das áreas comuns, manutenção dos equipamentos, conservação, seguro da edificação e a administração. Entender a composição ajuda a comparar prédios antes de comprar e a participar das decisões depois.",
    intro: "Na hora de comparar apartamentos, o valor do condomínio costuma aparecer como um número solto, sem explicação. Ele não é arbitrário: sai de um orçamento aprovado em assembleia e dividido entre as unidades. Este texto mostra o que entra nessa conta, o que muda de um prédio para outro e quais documentos pedir antes de assinar.",
    secoes: [
      {
        titulo: "O condomínio não é uma tarifa, é um rateio",
        paragrafos: [
          "Quem mora em apartamento é dono da sua unidade e, junto com os vizinhos, das áreas comuns: hall, escada, garagem, elevador, telhado, fachada, instalações. Manter tudo isso custa dinheiro, e esse custo é dividido entre os moradores conforme a regra da convenção do condomínio.",
          "Por isso o valor não é definido por uma empresa, e sim por um orçamento discutido e aprovado pelos próprios condôminos em assembleia. A administradora executa esse orçamento e presta contas, mas não decide sozinha quanto será cobrado."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "As despesas que entram na conta todo mês",
        paragrafos: [
          "A composição muda de prédio para prédio, conforme o que existe para manter. Em linhas gerais, estes são os grupos de despesa que costumam aparecer no balancete."
        ],
        bullets: [
          "Pessoal: salários e encargos de porteiro, zelador e equipe de limpeza, quando o prédio tem funcionários próprios.",
          "Consumo das áreas comuns: energia da iluminação, dos elevadores e das bombas, além da água, quando não há medição individual.",
          "Manutenção de equipamentos: elevador, portão, bombas, interfone, sistema de incêndio e, onde houver, câmeras.",
          "Conservação: limpeza, jardinagem, pequenos reparos e material de uso comum.",
          "Seguro da edificação, obrigatório por lei para o condomínio.",
          "Administração: a taxa da empresa que cuida da contabilidade, da folha e da prestação de contas."
        ],
        callout: null
      },
      {
        titulo: "Ordinária e extraordinária: quem paga o quê",
        paragrafos: [
          "A despesa ordinária é a do dia a dia, aquela que se repete todo mês: pessoal, consumo, manutenção de rotina, limpeza. A extraordinária é a que não faz parte da rotina, como a troca de um elevador, a pintura da fachada ou uma obra de reforço na estrutura.",
          "A distinção importa quando o apartamento está alugado. Pela legislação de locação, a despesa ordinária cabe ao inquilino e a extraordinária ao proprietário. Antes de assinar um contrato de aluguel, confira como essa divisão está escrita nele."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Rateio de obra grande não entra na conta mensal e costuma vir em cobrança separada. Pergunte se há algum rateio em andamento antes de fechar a compra." }
      },
      {
        titulo: "Para que serve o fundo de reserva",
        paragrafos: [
          "Boa parte dos condomínios recolhe, junto com a taxa mensal, um percentual destinado ao fundo de reserva. É uma poupança do prédio, criada para cobrir imprevistos e despesas que não cabem no orçamento do mês.",
          "Um fundo bem formado reduz a chance de os moradores serem surpreendidos por uma cobrança extra quando algo quebra. A convenção do condomínio define o percentual e as regras de uso."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Por que o tamanho do prédio muda a conta",
        paragrafos: [
          "Boa parte das despesas é fixa: o elevador custa o mesmo para manter, tenha o prédio dezesseis ou cem apartamentos. Quando há menos unidades, cada uma arca com uma fatia maior desse custo fixo. Quando há mais, o mesmo custo se dilui.",
          "A área comum pesa na mesma direção. Prédio com muita estrutura de lazer tem mais o que limpar, iluminar e consertar, e isso aparece na taxa todo mês. Os edifícios da Marins Engenharia em São Carlos têm entre dezesseis e trinta e dois apartamentos, com áreas comuns enxutas: hall, garagem coberta e circulação."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "O que pedir antes de comprar",
        paragrafos: [
          "O valor atual da taxa diz pouco sozinho. O que explica esse valor, e indica se ele tende a subir, está nos documentos do condomínio. Peça-os ao vendedor ou à administradora."
        ],
        bullets: [
          "A convenção do condomínio e o regimento interno.",
          "Os últimos balancetes, para ver em que o dinheiro está sendo gasto.",
          "A previsão orçamentária do ano em curso.",
          "As atas das últimas assembleias, onde aparecem obras aprovadas e discussões em aberto.",
          "A declaração de que a unidade não tem taxas em atraso."
        ],
        callout: { tipo: "info", texto: "Débito de condomínio acompanha o imóvel, não o antigo dono. Confirme a quitação antes de assinar." }
      }
    ],
    tabela: {
      titulo: "Para onde vai o valor do condomínio",
      colunas: ["Grupo de despesa", "O que cobre", "Tipo"],
      linhas: [
        ["Pessoal", "Portaria, zeladoria e limpeza, com encargos", "Ordinária"],
        ["Consumo das áreas comuns", "Energia, água e gás das partes de uso coletivo", "Ordinária"],
        ["Manutenção de equipamentos", "Elevador, bombas, portão, interfone, incêndio", "Ordinária"],
        ["Seguro da edificação", "Cobertura obrigatória do prédio", "Ordinária"],
        ["Administração", "Contabilidade, folha e prestação de contas", "Ordinária"],
        ["Fundo de reserva", "Poupança do prédio para imprevistos", "Conforme a convenção"],
        ["Obras e reformas de vulto", "Pintura de fachada, troca de elevador, reforço estrutural", "Extraordinária"]
      ],
      destaque: null
    },
    faq: [
      { p: "Quem define o valor do condomínio?",
        r: "Os próprios moradores, em assembleia, ao aprovar a previsão orçamentária. A administradora executa e presta contas, mas não decide o valor sozinha." },
      { p: "O valor é igual para todos os apartamentos?",
        r: "Depende da convenção do condomínio. Em muitos prédios o rateio segue a fração ideal de cada unidade, e não uma divisão em partes iguais. Confira na convenção." },
      { p: "Condomínio mais barato é sempre melhor?",
        r: "Não necessariamente. Taxa muito baixa pode significar manutenção adiada, que volta depois como rateio extra. Vale olhar os balancetes junto com o valor." },
      { p: "Quem paga o condomínio no apartamento alugado?",
        r: "Pela legislação de locação, as despesas ordinárias cabem ao inquilino e as extraordinárias ao proprietário. Confirme como isso está escrito no contrato." },
      { p: "Posso tirar dúvidas sobre um edifício da Marins?",
        r: "O time de vendas da Marins Engenharia, em São Carlos, responde pelo WhatsApp (16) 99766-7976 ou pelo e-mail vendas@marinsengenharia.com.br." }
    ],
    cta: {
      titulo: "Conheça os edifícios da Marins",
      texto: "Fale com o time de vendas da Marins Engenharia para conhecer os apartamentos disponíveis em São Carlos."
    },
    fontes: []
  },

  {
    id: "avaliacao-imovel-financiamento-sao-carlos",
    data: "1 de outubro de 2026",
    foto: "assets/img/blog/avaliacao-imovel-financiamento.webp",
    fotoMini: "assets/img/blog/avaliacao-imovel-financiamento-mini.webp",
    alt: "Fachada do Edifício Ferretto, da Marins Engenharia, vista da esquina com céu azul",
    titulo: "Avaliação do imóvel no financiamento em São Carlos",
    resumo: "O que o banco avalia antes de liberar o crédito, quem faz a vistoria, como o laudo se relaciona com o preço e o que fazer se o valor sair menor.",
    seo: {
      kw: "avaliação do imóvel no financiamento em São Carlos",
      meta: "Avaliação do imóvel no financiamento em São Carlos: o que o banco confere, quem faz a vistoria e o que fazer se o laudo vier abaixo do preço.",
      categoria: "Financiamento",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em 1 de outubro de 2026"
    },
    resumoRapido: "Quando você financia um apartamento, o banco manda um profissional avaliar o imóvel antes de liberar o crédito. A avaliação confere a documentação, o estado do prédio e o valor de mercado. O valor do laudo, e não o preço combinado na venda, costuma ser a base para calcular quanto o banco financia. Por isso vale entender o processo antes de fechar negócio.",
    intro: "Muita gente descobre a avaliação do imóvel só no meio do financiamento, quando o banco devolve um valor diferente do esperado. Este guia explica, sem entrar em números que mudam de banco para banco, o que é essa etapa, o que é conferido e como se preparar.",
    secoes: [
      {
        titulo: "Para que o banco avalia o imóvel",
        paragrafos: [
          "No financiamento imobiliário, o próprio imóvel fica como garantia da dívida. Por isso o banco precisa saber quanto ele vale e se está em condições regulares. A avaliação protege o banco, mas também ajuda o comprador a não pagar mais do que o imóvel vale.",
          "A avaliação é uma etapa à parte da análise de crédito. A análise de crédito olha para a sua renda e o seu histórico. A avaliação olha para o apartamento."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "O que é conferido na vistoria",
        paragrafos: [
          "Em geral, um engenheiro ou arquiteto indicado pela instituição financeira visita o imóvel, compara com a documentação e emite um laudo. Cada banco tem o seu procedimento e a sua lista, por isso peça a relação atualizada ao seu gerente."
        ],
        bullets: [
          "Se a metragem e a descrição do apartamento batem com a matrícula.",
          "O estado de conservação da unidade e das áreas comuns do prédio.",
          "A localização e o padrão da região.",
          "A existência de reformas ou alterações que não constem nos documentos.",
          "Comparação com valores de imóveis semelhantes na vizinhança."
        ],
        callout: null
      },
      {
        titulo: "Valor de venda e valor de avaliação não são a mesma coisa",
        paragrafos: [
          "O preço de venda é o que comprador e vendedor combinam. O valor de avaliação é a opinião técnica do avaliador sobre o imóvel naquele momento. Os dois podem coincidir ou não.",
          "O banco calcula o financiamento a partir do menor entre os dois valores, conforme a regra de cada instituição. Se a avaliação sair abaixo do preço, a diferença precisa vir do comprador, com recursos próprios. Pergunte ao banco, antes de assinar o compromisso de compra, como ele faz esse cálculo."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Não pague sinal alto antes de saber o resultado da avaliação. Se o laudo vier abaixo do preço, o valor que falta sai do seu bolso." }
      },
      {
        titulo: "Como se preparar para a avaliação",
        paragrafos: [
          "Um imóvel com documentos em ordem costuma passar pela avaliação com menos atrito. Se você é o comprador, confira a matrícula atualizada e a regularidade da unidade antes de pedir o financiamento. Se você é o vendedor, deixe o apartamento acessível para a visita e tenha à mão a documentação.",
          "No caso de imóvel na planta, a avaliação segue a lógica do projeto e da obra, e o banco acompanha o andamento. As regras variam, então peça as condições por escrito."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "A lista de documentos da compra está no texto sobre documentos para comprar apartamento em São Carlos." }
      },
      {
        titulo: "Se o valor da avaliação vier menor",
        paragrafos: [
          "Isso acontece e não significa que o negócio acabou. Você tem algumas saídas, e a melhor depende do caso."
        ],
        bullets: [
          "Cobrir a diferença com recursos próprios.",
          "Renegociar o preço com o vendedor com base no laudo.",
          "Pedir ao banco a explicação do cálculo e, se for possível, a revisão.",
          "Desistir do negócio, se o contrato previu essa condição."
        ],
        callout: null
      }
    ],
    tabela: {
      titulo: "Avaliação do imóvel em resumo",
      colunas: ["Etapa", "Quem faz", "O que resulta"],
      linhas: [
        ["Análise de crédito", "Banco", "Aprovação do comprador e limite de crédito"],
        ["Avaliação e vistoria", "Profissional indicado pelo banco", "Laudo com o valor do imóvel"],
        ["Conferência da documentação", "Banco e cartório", "Confirmação de que o imóvel está regular"],
        ["Definição do valor financiado", "Banco", "Quanto será financiado e quanto o comprador paga de entrada"]
      ],
      destaque: null
    },
    faq: [
      { p: "Quem paga a avaliação do imóvel?",
        r: "Em geral o custo é repassado ao comprador, mas depende do banco. Pergunte o valor e a forma de cobrança antes de iniciar o processo." },
      { p: "A avaliação garante que o imóvel é um bom negócio?",
        r: "Não. Ela serve ao banco para conceder o crédito. O comprador deve fazer a própria pesquisa de preço, de documentação e de localização." },
      { p: "Posso escolher o avaliador?",
        r: "Na maioria dos casos o banco indica o profissional ou a empresa que faz o laudo. Confirme com a sua instituição." },
      { p: "A avaliação vale para outro banco?",
        r: "Normalmente não. Cada instituição faz a sua avaliação conforme os critérios próprios." },
      { p: "Posso tirar dúvidas sobre financiamento com a Marins?",
        r: "O time de vendas da Marins Engenharia, em São Carlos, responde pelo WhatsApp (16) 99766-7976 ou pelo e-mail vendas@marinsengenharia.com.br." }
    ],
    cta: {
      titulo: "Converse antes de financiar",
      texto: "Fale com o time de vendas da Marins Engenharia para tirar dúvidas sobre a compra de um apartamento em São Carlos."
    },
    fontes: []
  },

  {
    id: "documentos-comprar-apartamento-sao-carlos",
    data: "30 de setembro de 2026",
    foto: "assets/img/blog/documentos-compra-apartamento.webp",
    fotoMini: "assets/img/blog/documentos-compra-apartamento-mini.webp",
    alt: "Fachada do Edifício Ferretto, da Marins Engenharia, na Rua Riachuelo, com céu azul",
    titulo: "Documentos para comprar apartamento em São Carlos",
    resumo: "Quais documentos o comprador e o vendedor precisam apresentar, o que conferir na matrícula e como organizar a papelada antes de assinar.",
    seo: {
      kw: "documentos para comprar apartamento em São Carlos",
      meta: "Documentos para comprar apartamento em São Carlos: o que o comprador e o vendedor apresentam, o que conferir na matrícula e certidões do imóvel.",
      categoria: "Compra de imóvel",
      leitura: "4 min de leitura",
      atualizado: "Atualizado em 30 de setembro de 2026"
    },
    resumoRapido: "Para comprar apartamento em São Carlos, o comprador reúne documentos pessoais e comprovantes de renda, e o vendedor entrega os documentos do imóvel: matrícula atualizada, certidões e declaração de condomínio. O ponto central é a matrícula, que mostra quem é o dono e se há dívida ou restrição sobre a unidade. Confira tudo antes de pagar qualquer sinal.",
    intro: "Comprar apartamento envolve mais papel do que parece. Parte dele é do comprador, parte é do vendedor, e parte é emitida em cartório ou na prefeitura. Este guia organiza cada grupo de documentos e explica para que serve cada um, sem entrar em valores, que mudam de caso a caso.",
    secoes: [
      {
        titulo: "Documentos do comprador",
        paragrafos: [
          "O comprador prova quem é e, quando há financiamento, prova que consegue pagar. Cada instituição financeira tem a própria lista, por isso peça a relação atualizada ao banco antes de começar a reunir os papéis."
        ],
        bullets: [
          "Documento de identidade e CPF.",
          "Certidão de estado civil: nascimento, casamento ou outra, conforme o caso.",
          "Comprovante de residência recente.",
          "Comprovantes de renda, como holerites, extratos ou declaração de imposto de renda.",
          "Documentos do cônjuge ou companheiro, quando a compra envolve o casal."
        ],
        callout: null
      },
      {
        titulo: "Documentos do vendedor",
        paragrafos: [
          "O vendedor também precisa provar quem é e que pode vender. Se o vendedor for pessoa jurídica, como uma construtora ou incorporadora, os documentos da empresa entram no lugar dos pessoais.",
          "Peça cópia de tudo e guarde os originais para o dia da escritura. Documento vencido ou ilegível costuma atrasar o processo mais do que qualquer outro problema."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "Documentos do imóvel: a matrícula vem primeiro",
        paragrafos: [
          "A matrícula é o registro do apartamento no Cartório de Registro de Imóveis. Ela mostra o proprietário atual, a descrição da unidade e os ônus que existirem, como hipoteca, penhora ou alienação fiduciária. Peça uma certidão atualizada, emitida há pouco tempo, e não uma cópia antiga.",
          "Além da matrícula, o vendedor costuma apresentar a certidão de quitação de tributos do imóvel e a declaração do condomínio informando que não há taxas em atraso. Dívida de condomínio acompanha a unidade, por isso essa declaração protege o comprador."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Se o nome na matrícula não é o de quem está vendendo, ou se a matrícula mostra restrição que ninguém explicou, pare a negociação até esclarecer por escrito." }
      },
      {
        titulo: "Certidões sobre as pessoas envolvidas",
        paragrafos: [
          "Além dos documentos do imóvel, é prática comum pedir certidões sobre o vendedor, para saber se existem ações judiciais ou dívidas que possam alcançar o bem vendido. Um profissional de confiança, como um advogado ou o próprio cartório, indica quais certidões fazem sentido em cada caso.",
          "Esse cuidado vale para compra entre particulares. Em compra direto com a construtora, a documentação do empreendimento já costuma estar organizada, e o comprador pode pedi-la por escrito."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Compra na planta tem uma lista própria de documentos, como o memorial de incorporação e o memorial descritivo. Ela está no texto sobre apartamento na planta em São Carlos." }
      },
      {
        titulo: "Da papelada à escritura e ao registro",
        paragrafos: [
          "Com os documentos conferidos, a compra segue para a escritura, feita em tabelionato de notas, ou para o contrato com o banco, quando há financiamento. Depois, o comprador leva o título ao Cartório de Registro de Imóveis. Só com o registro na matrícula o apartamento passa a ser oficialmente seu.",
          "Pergunte ao tabelionato e ao cartório quais custos e prazos se aplicam ao seu caso. Eles variam e devem ser confirmados no momento da compra."
        ],
        bullets: [],
        callout: null
      }
    ],
    tabela: {
      titulo: "Resumo dos documentos e para que servem",
      colunas: ["Documento", "Quem apresenta", "Para que serve"],
      linhas: [
        ["Identidade, CPF e estado civil", "Comprador e vendedor", "Identificar as partes e definir quem precisa assinar"],
        ["Comprovantes de renda", "Comprador", "Análise de crédito quando há financiamento"],
        ["Certidão de matrícula atualizada", "Vendedor", "Confirmar o proprietário e conferir ônus sobre o imóvel"],
        ["Quitação de tributos do imóvel", "Vendedor", "Mostrar que não há tributo do imóvel em aberto"],
        ["Declaração de condomínio", "Vendedor", "Confirmar que não há taxa em atraso"],
        ["Escritura e registro", "Tabelionato e Cartório de Registro de Imóveis", "Formalizar a compra e transferir a propriedade"]
      ],
      destaque: null
    },
    faq: [
      { p: "Qual é o documento mais importante na compra de um apartamento?",
        r: "A certidão de matrícula atualizada. Ela mostra o proprietário e os ônus sobre a unidade, e por isso deve ser conferida antes de qualquer pagamento." },
      { p: "Preciso de advogado para comprar apartamento?",
        r: "A lei não exige em todos os casos, mas ter um profissional para revisar documentos e contrato reduz o risco, principalmente em compra entre particulares." },
      { p: "O que acontece se o vendedor tem dívida de condomínio?",
        r: "A dívida de condomínio está ligada à unidade. Por isso, peça a declaração do condomínio antes de fechar e combine por escrito quem paga o que estiver em aberto." },
      { p: "Quando o apartamento passa a ser meu?",
        r: "Quando a escritura ou o contrato é registrado na matrícula, no Cartório de Registro de Imóveis. A assinatura sozinha não transfere a propriedade." },
      { p: "Posso tirar dúvidas sobre a documentação de um empreendimento da Marins?",
        r: "Sim. O time de vendas da Marins Engenharia, em São Carlos, responde pelo WhatsApp (16) 99766-7976 ou pelo e-mail vendas@marinsengenharia.com.br." }
    ],
    cta: {
      titulo: "Tire dúvidas sobre a documentação",
      texto: "Fale com o time de vendas da Marins Engenharia para saber como organizar os documentos da compra."
    },
    fontes: [
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "investir-imoveis-sao-carlos",
    data: "30 de setembro de 2026",
    foto: "assets/img/blog/investidor-capa.jpg",
    fotoMini: "assets/img/blog/investidor-capa-mini.jpg",
    alt: "Vista aérea do Edifício Trentino e do entorno, no centro de São Carlos",
    titulo: "Investir em imóveis em São Carlos: rentabilidade e liquidez",
    resumo: "Como calcular o retorno de verdade, quais custos entram na conta e que tipo de apartamento atende cada perfil de inquilino.",
    seo: {
      kw: "investir em imóveis em São Carlos",
      meta: "Investir em imóveis em São Carlos: como calcular rentabilidade líquida, custos que entram na conta, perfis de inquilino e liquidez na revenda.",
      categoria: "Investimento",
      leitura: "5 min de leitura",
      atualizado: "Atualizado em 30 de setembro de 2026"
    },
    resumoRapido: "Investir em imóveis em São Carlos costuma render por dois caminhos: aluguel mensal e valorização na revenda. O que define o resultado é a conta líquida, feita depois de ITBI, registro, condomínio nos meses vagos, manutenção, administração, imposto de renda e vacância. Apartamentos de dois dormitórios em região central atendem o público mais amplo, que é o que reduz vacância. O Edifício Trentino, da Marins Engenharia, tem unidades de 64,52 m² com dois dormitórios, sendo uma suíte, na Rua Padre Teixeira, 1456, no Centro.",
    intro: "A parte fácil de investir em imóvel é a compra. A difícil é manter a unidade alugada, com inquilino bom, sem surpresa de custo. Este texto organiza a conta que o investidor precisa fazer antes de assinar, os três formatos de investimento que existem na cidade e o tipo de apartamento que sustenta cada um deles.",
    secoes: [
      {
        titulo: "Por que São Carlos aparece na conta do investidor",
        paragrafos: [
          "São Carlos é uma cidade de porte médio com duas universidades públicas, USP e UFSCar, instituições privadas e um polo de tecnologia. Isso cria demanda por moradia que não depende de um único empregador nem de uma única temporada do ano.",
          "Para o investidor, o efeito prático é a diversidade de inquilino: estudante de pós-graduação, professor, profissional que vem por contrato de trabalho, casal jovem e família. Cidade com público variado sofre menos quando um desses grupos encolhe."
        ],
        bullets: [],
        callout: { tipo: "info", texto: "Demanda diversa vale mais que demanda alta. O que protege o investidor não é a fila de interessados hoje, é a existência de vários tipos de inquilino ao longo dos anos." }
      },
      {
        titulo: "Os três formatos de investimento e o que cada um exige",
        paragrafos: [
          "Não existe formato melhor em abstrato. Existe o que combina com o capital disponível, com o tempo que você pretende dedicar e com o risco que aceita correr."
        ],
        bullets: [
          "Locação residencial por contrato longo: renda previsível, menos trabalho e contrato regido pela Lei 8.245/1991. Exige reserva para vacância e manutenção.",
          "Locação por temporada: diária mais alta e flexibilidade de uso, com custo de enxoval, limpeza, anúncio e gestão. Depende de localização e de avaliação boa nas plataformas.",
          "Compra na planta para revenda: entrada menor e pagamento diluído na obra, com ganho concentrado na entrega. Exige folga financeira para o saldo final e tolerância ao prazo de obra."
        ],
        callout: null
      },
      {
        titulo: "Como calcular a rentabilidade de verdade",
        paragrafos: [
          "A conta que aparece nos anúncios costuma ser a rentabilidade bruta: aluguel mensal multiplicado por doze e dividido pelo valor do imóvel. Ela serve para comparar oportunidades, não para decidir.",
          "A conta que importa é a líquida, feita depois de descontar os custos fixos e os eventuais. Um exemplo ilustrativo: um apartamento de 400 mil reais alugado por 2 mil reais rende 6% ao ano na conta bruta. Depois de condomínio em meses vagos, IPTU, manutenção, taxa de administração e imposto de renda, o número fica abaixo disso. Faça essa conta com os valores reais do imóvel que você está avaliando antes de fechar."
        ],
        bullets: [],
        callout: { tipo: "alerta", texto: "Rentabilidade bruta não paga conta. Só a líquida, com vacância e imposto incluídos, mostra o que sobra por mês no bolso do proprietário." }
      },
      {
        titulo: "Os custos que precisam estar na planilha",
        paragrafos: [
          "A tabela abaixo reúne o que costuma entrar na conta de um imóvel para locação, com o momento em que cada item incide. Alguns são únicos, na compra; outros acompanham o investimento pela vida inteira."
        ],
        bullets: [],
        callout: null
      },
      {
        titulo: "O que reduz vacância no dia a dia",
        paragrafos: [
          "Vacância é o custo mais silencioso do investimento: cada mês vago apaga a margem de vários meses alugados. O que encurta o tempo entre inquilinos é a combinação de localização central, planta funcional e apartamento pronto para morar.",
          "Armários planejados, cozinha equipada, ponto de ar-condicionado e medição individual de água e energia aparecem na primeira visita e pesam na decisão de quem aluga. Prédio novo também reduz manutenção nos primeiros anos, o que protege o resultado."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-sala.jpg",
          alt: "Sala de dois ambientes do apartamento do Edifício Trentino, com painel de madeira e cozinha ao fundo",
          legenda: "Apartamento pronto para morar encurta o tempo entre um inquilino e outro."
        },
        callout: null
      },
      {
        titulo: "Que perfil de inquilino cada apartamento atende",
        paragrafos: [
          "Studios e unidades de um dormitório atendem estudante e profissional sozinho, com diária ou aluguel menor e troca mais frequente. Apartamentos de dois dormitórios com suíte alcançam casal, família pequena e profissional que divide, que é o público que costuma ficar mais tempo no mesmo endereço.",
          "O segundo dormitório também amplia a saída: serve como quarto de filho, de visita ou escritório. Na revenda, esse mesmo apartamento disputa com um número maior de compradores."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-quarto.jpg",
          alt: "Dormitório social do apartamento do Trentino, com duas camas de solteiro e armário planejado",
          legenda: "Dormitório social com armário planejado: atende filho, visita ou home office.",
          retrato: true
        },
        callout: null
      },
      {
        titulo: "O caso do Edifício Trentino",
        paragrafos: [
          "O Trentino fica na Rua Padre Teixeira, 1456, no Centro de São Carlos. São 24 apartamentos em uma torre, com 64,52 m² de área privativa, dois dormitórios sendo uma suíte, os dois banheiros com box, sala de dois ambientes, cozinha, área de serviço e varanda gourmet.",
          "Para o investidor, três pontos importam nesse endereço: região central, que amplia o público e sustenta a liquidez; planta de dois dormitórios, que atende do casal à família pequena; e prédio pronto para visitar, o que permite avaliar o padrão de acabamento e o condomínio antes de comprar."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-hall.jpg",
          alt: "Hall de entrada do Edifício Trentino, com painel de madeira, espelho e poltronas",
          legenda: "Área comum entregue e em uso: dá para conferir o padrão e o custo de condomínio antes de investir."
        },
        callout: { tipo: "destaque", texto: "Edifício Trentino: Rua Padre Teixeira, 1456, Centro. Apartamentos de 64,52 m², dois dormitórios com uma suíte e varanda gourmet, construídos pela Marins Engenharia." }
      }
    ],
    tabela: {
      titulo: "Custos que entram na conta do investidor",
      colunas: ["Item", "Quando incide", "Observação"],
      linhas: [
        ["ITBI, escritura e registro", "Uma vez, na compra", "Percentuais definidos pelo município e pelo cartório"],
        ["IPTU", "Anual", "Pode ser repassado ao inquilino, se o contrato previr"],
        ["Condomínio", "Mensal", "Fica com o proprietário nos meses em que a unidade está vaga"],
        ["Manutenção entre inquilinos", "Eventual", "Pintura, reparos e limpeza antes de uma nova locação"],
        ["Taxa de administração", "Mensal", "Percentual do aluguel, quando há imobiliária"],
        ["Imposto de renda sobre o aluguel", "Mensal", "Recolhido por carnê-leão, pela tabela progressiva"],
        ["Vacância", "Eventual", "Cada mês vago consome a margem de vários meses alugados"]
      ],
      destaque: null
    },
    faq: [
      { p: "Quanto rende um apartamento alugado em São Carlos?",
        r: "Depende do valor pago pelo imóvel e do aluguel praticado na região. Calcule a rentabilidade bruta dividindo doze aluguéis pelo valor do imóvel e depois desconte condomínio em meses vagos, IPTU, manutenção, administração e imposto de renda para chegar à líquida." },
      { p: "É melhor alugar por contrato longo ou por temporada?",
        r: "Contrato longo dá renda previsível e pouco trabalho. Temporada rende mais por diária, mas exige enxoval, limpeza, gestão e boa localização. A escolha depende do tempo que você pode dedicar ao imóvel." },
      { p: "Comprar na planta vale a pena para investir?",
        r: "Vale quando existe folga financeira para o saldo na entrega e tolerância ao prazo de obra. A vantagem é a entrada menor e o pagamento diluído; o risco é o atraso, que diminui com construtora de histórico conhecido na cidade." },
      { p: "O Edifício Trentino serve para quem quer investir?",
        r: "Sim. Fica no Centro, tem apartamentos de 64,52 m² com dois dormitórios, sendo uma suíte, e está pronto para visitar, o que permite avaliar acabamento e entorno antes da compra. A disponibilidade é consultada pelo WhatsApp de vendas." }
    ],
    cta: {
      titulo: "Fale sobre investimento com a Marins",
      texto: "Consulte as unidades disponíveis e os valores de condomínio antes de fazer a sua conta. Retorno em até um dia útil."
    },
    fontes: [
      "Lei 8.245/1991 (Lei do Inquilinato)",
      "Lei 13.786/2018",
      "Receita Federal do Brasil (tributação de aluguéis, carnê-leão)",
      "Prefeitura Municipal de São Carlos (ITBI e IPTU)",
      "Memorial descritivo do Edifício Trentino",
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "melhores-bairros-sao-carlos",
    data: "30 de setembro de 2026",
    foto: "assets/img/blog/bairros-capa.jpg",
    fotoMini: "assets/img/blog/bairros-capa-mini.jpg",
    alt: "Vista do centro de São Carlos a partir do Edifício Trentino, com prédios e casas ao redor",
    titulo: "Melhores bairros de São Carlos: por que o Centro lidera",
    resumo: "Um ranking montado por critérios de rotina, serviços e liquidez, com o Centro em primeiro lugar e o caso do Edifício Trentino.",
    seo: {
      kw: "melhores bairros de São Carlos",
      meta: "Melhores bairros de São Carlos para morar: ranking por deslocamento, serviços e liquidez, com o Centro em primeiro lugar e o caso do Trentino.",
      categoria: "Guia da cidade",
      leitura: "5 min de leitura",
      atualizado: "Atualizado em 30 de setembro de 2026"
    },
    resumoRapido: "Entre os melhores bairros de São Carlos para morar, o Centro fica em primeiro lugar por um motivo objetivo: é a região que concentra comércio, bancos, serviços de saúde, escolas e linhas de ônibus em raio de caminhada, o que reduz deslocamento diário e mantém a liquidez do imóvel na revenda e na locação. O Edifício Trentino, da Marins Engenharia, fica na Rua Padre Teixeira, 1456, no Centro, com apartamentos de 64,52 m², dois dormitórios sendo uma suíte e varanda gourmet.",
    intro: "Lista de melhores bairros costuma ser questão de gosto. Esta não é. A ordem abaixo segue quatro critérios verificáveis: tempo de deslocamento, serviços que cabem em uma caminhada, oferta de transporte público e liquidez do imóvel quando chega a hora de vender ou alugar. Por esses critérios, o Centro de São Carlos fica em primeiro lugar, e o texto explica por quê.",
    secoes: [
      {
        titulo: "Como este ranking foi montado",
        paragrafos: [
          "Nenhum bairro é bom ou ruim em abstrato. O que existe é encaixe entre a região e a rotina de quem mora. Para que a comparação não virasse opinião, a ordem seguiu critérios que qualquer pessoa consegue conferir em uma visita."
        ],
        bullets: [
          "Deslocamento diário: quanto tempo a região custa, por dia, em trajetos de trabalho e escola.",
          "Serviços a pé: o que resolve em quinze minutos de caminhada a partir da portaria.",
          "Transporte público: linhas e frequência no ponto mais próximo.",
          "Infraestrutura consolidada: comércio e prédios já ocupados, sem depender de obras futuras.",
          "Liquidez: facilidade de vender ou alugar o imóvel mais adiante."
        ],
        callout: { tipo: "info", texto: "Se a sua rotina é toda na universidade, o peso dos critérios muda e a ordem também. O ranking é um ponto de partida, não uma sentença." }
      },
      {
        titulo: "1. Centro: a região que resolve mais coisas a pé",
        paragrafos: [
          "O Centro de São Carlos concentra o que os outros bairros distribuem: comércio de rua, bancos, cartórios, farmácias, supermercados, escolas, Santa Casa e as principais linhas de ônibus da cidade. Essa concentração é o que faz a diferença na conta do dia a dia, porque cada serviço resolvido a pé é um deslocamento de carro a menos.",
          "Há um segundo efeito, menos visível na hora da compra. Imóvel em região central tem público maior quando volta ao mercado, seja para venda, seja para locação. Isso reduz o tempo de negociação e dá margem melhor ao proprietário.",
          "O ponto de atenção do Centro é o ruído e o fluxo de veículos durante o dia comercial. A forma de resolver isso é escolher quadra residencial próxima ao centro comercial, em vez da avenida principal. É exatamente a situação da Rua Padre Teixeira."
        ],
        bullets: [],
        callout: { tipo: "destaque", texto: "Centro em primeiro lugar por três razões: menor deslocamento diário, maior oferta de serviços em raio de caminhada e melhor liquidez na revenda e na locação." }
      },
      {
        titulo: "As outras regiões e para quem elas se encaixam",
        paragrafos: [
          "Depois do Centro, a escolha depende do que pesa mais na sua rotina. As quatro regiões abaixo aparecem com frequência na procura de quem compra em São Carlos."
        ],
        bullets: [
          "Vila Nery: bairro residencial tradicional colado ao Centro, com comércio de bairro e ruas mais calmas. Encaixa em quem quer proximidade do centro sem o movimento comercial na porta.",
          "Santa Felícia: região mais próxima da UFSCar, com procura constante por locação e comércio voltado ao público universitário.",
          "Vila Prado: bairro consolidado, com comércio de rua, escolas e acesso rápido ao Centro e à USP São Carlos.",
          "Parque Faber Castell: área planejada e mais afastada, com lotes maiores e perfil residencial. Encaixa em quem prioriza silêncio e aceita depender do carro."
        ],
        callout: null
      },
      {
        titulo: "Onde o Edifício Trentino se encaixa nesse mapa",
        paragrafos: [
          "O Trentino fica na Rua Padre Teixeira, 1456, no Centro. É uma rua residencial dentro da região central, o que resolve o principal ponto de atenção do Centro: o morador fica perto dos serviços sem ficar dentro do movimento comercial.",
          "São 24 apartamentos em uma torre, com 64,52 m² de área privativa, dois dormitórios sendo uma suíte, os dois banheiros com box, sala de dois ambientes, cozinha, área de serviço e varanda gourmet. O prédio está pronto, o que permite visitar o apartamento e o entorno em horários diferentes antes de decidir."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-sala.jpg",
          alt: "Sala de dois ambientes do apartamento do Edifício Trentino, com painel de madeira e cozinha ao fundo",
          legenda: "Sala de dois ambientes integrada à cozinha, em apartamento de 64,52 m² do Trentino."
        },
        callout: null
      },
      {
        titulo: "O que o apartamento entrega por dentro",
        paragrafos: [
          "Localização abre a porta, mas quem mora convive com a planta. No Trentino, a cozinha tem bancada de granito e liga à área de serviço, e a suíte e o dormitório social ficam separados da área social do apartamento.",
          "Na visita, olhe a cozinha e os quartos com a mesma atenção que você daria à rua: posição das tomadas, ponto de ar-condicionado, espaço para armário planejado e incidência de sol no fim da tarde."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-cozinha.jpg",
          alt: "Cozinha do apartamento do Trentino, com bancada de granito, cooktop e armários planejados",
          legenda: "Cozinha com bancada de granito e passagem para a área de serviço."
        },
        callout: null
      },
      {
        titulo: "A conta que a localização faz todo mês",
        paragrafos: [
          "Morar perto do trabalho e dos serviços tem efeito direto em três linhas do orçamento: combustível, manutenção do carro e tempo. A região central é a que mais reduz essas três de uma vez, porque permite resolver parte da rotina a pé ou de ônibus.",
          "Some o efeito na revenda. Entre dois apartamentos iguais, o que fica em região com serviços consolidados costuma ser negociado mais rápido. Localização não é só conforto: é o item da compra que não pode ser reformado depois."
        ],
        bullets: [],
        figura: {
          src: "assets/img/blog/trentino-suite.jpg",
          alt: "Suíte do apartamento do Trentino, com cama de casal e armário planejado",
          legenda: "Suíte do apartamento tipo, com armário planejado e janela para a rua residencial.",
          retrato: true
        },
        callout: null
      }
    ],
    tabela: {
      titulo: "Ranking por critérios de rotina, serviços e liquidez",
      colunas: ["Posição e região", "Ponto forte", "Para quem se encaixa"],
      linhas: [
        ["1. Centro", "Serviços, bancos, saúde e ônibus em raio de caminhada", "Quem quer reduzir deslocamento e garantir liquidez"],
        ["2. Vila Nery", "Rua calma colada à região central", "Quem quer o Centro por perto, sem o movimento comercial"],
        ["3. Santa Felícia", "Proximidade da UFSCar e procura constante por locação", "Investidor e público universitário"],
        ["4. Vila Prado", "Bairro consolidado com acesso rápido ao Centro e à USP", "Famílias que usam carro no dia a dia"],
        ["5. Parque Faber Castell", "Área planejada, silenciosa e mais afastada", "Quem prioriza silêncio e aceita depender do carro"],
        ["Edifício Trentino", "Centro, em quadra residencial da Rua Padre Teixeira", "Quem quer o primeiro lugar da lista sem o barulho da avenida"]
      ],
      destaque: 5
    },
    faq: [
      { p: "Qual o melhor bairro para morar em São Carlos?",
        r: "Pelos critérios de deslocamento, serviços a pé, transporte e liquidez, o Centro fica em primeiro lugar. Para quem estuda ou trabalha na UFSCar, a região de Santa Felícia costuma fazer mais sentido." },
      { p: "Morar no Centro de São Carlos é barulhento?",
        r: "Depende da rua. As avenidas comerciais têm fluxo alto durante o dia, mas as quadras residenciais próximas, como a Rua Padre Teixeira, são silenciosas à noite. Visite o endereço depois das 22h para confirmar." },
      { p: "Qual região de São Carlos é melhor para investir?",
        r: "O Centro, pela liquidez na venda e na locação, e a região próxima à UFSCar, pela procura ligada ao calendário acadêmico. A escolha depende do tipo de inquilino que você quer atender." },
      { p: "O Edifício Trentino fica em qual bairro?",
        r: "No Centro, na Rua Padre Teixeira, 1456. São apartamentos de 64,52 m², com dois dormitórios sendo uma suíte e varanda gourmet, construídos pela Marins Engenharia." }
    ],
    cta: {
      titulo: "Visite o Trentino no Centro",
      texto: "Agende um horário para conhecer o apartamento, a área comum e a rua. O time de vendas responde em até um dia útil."
    },
    fontes: [
      "Plano Diretor do Município de São Carlos",
      "Prefeitura Municipal de São Carlos",
      "Memorial descritivo do Edifício Trentino",
      "Base de dados interna da Marins Engenharia"
    ]
  },

  {
    id: "localizacao-centro-sao-carlos",
    data: "30 de setembro de 2026",
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
      atualizado: "Atualizado em 30 de setembro de 2026"
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
        r: "A visita é agendada com o time de vendas da Marins Engenharia pelo WhatsApp. O prédio está pronto, o que permite conhecer o apartamento, a área comum e o entorno." }
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
    data: "30 de setembro de 2026",
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
      atualizado: "Atualizado em 30 de setembro de 2026"
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
        callout: { tipo: "info", texto: "Peça a lista de empreendimentos já entregues e compare a data prevista em contrato com a data do habite-se. É a forma mais simples de conferir o histórico de qualquer construtora." }
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
        r: "Sim. A visita é combinada com a empresa por questão de segurança, e o time de vendas informa em que etapa a obra está." },
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
    data: "30 de setembro de 2026",
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
      atualizado: "Atualizado em 30 de setembro de 2026"
    },
    resumoRapido: "Comprar apartamento na planta em São Carlos significa pagar durante a obra e receber a chave no fim dela. O que protege o comprador é o memorial de incorporação registrado, o memorial descritivo detalhando acabamentos, o cronograma com data de entrega e o acompanhamento do andamento da obra. Peça à construtora o cronograma da obra por escrito e o manual do proprietário na entrega das chaves.",
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
        callout: { tipo: "positivo", texto: "Combine no contrato como o andamento será informado: relatório por escrito, visita agendada ou canal direto com o time de vendas." }
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
        r: "Pelo contato direto com o time de vendas da Marins, que informa a etapa da obra e agenda visitas ao canteiro quando é seguro." }
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
    data: "30 de setembro de 2026",
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
      atualizado: "Atualizado em 30 de setembro de 2026"
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
