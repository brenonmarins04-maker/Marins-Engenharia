# Briefing de desenvolvimento — Site Marins Engenharia
*(versão reformulada, com identidade visual definida)*

## Papel
Atue como Desenvolvedor Front-end e UX/UI Designer. Entregue um site estático
(HTML, CSS e JavaScript puro, sem framework e sem build) pronto para publicar no
GitHub Pages.

## Objetivo comercial
Vender apartamentos. A locação existe apenas como prova de qualidade e comodidade —
o site não pode ser confundido com administradora de imóveis de temporada. Toda a
hierarquia visual precisa refletir isso.

---

## 1. Identidade visual (obrigatória)

Baseada no logotipo: bloco azul com o "N" em negativo, miolo amarelo e tipografia
branca em caixa alta.

| Papel | Cor | Hex | Onde usar |
|---|---|---|---|
| Principal | Azul Marins | `#00378A` | Venda de empreendimentos, botões primários, títulos de seção, barra de obra |
| Principal escuro | Azul profundo | `#002255` | Hero, rodapé, fundos densos |
| Secundária | Amarelo Marins | `#FFCC02` | Locação, filetes de marca, CTA de WhatsApp, destaques |
| Secundária | Branco | `#FFFFFF` | Cards, fundo das seções claras |
| Apoio | Neve `#F3F5FA`, Névoa `#E6EBF4`, Tinta `#0C1626`, Cinza `#5A6478` | | Fundo, bordas, texto |

Regras de cor:
- **Azul = venda. Amarelo = locação.** A seção de locação usa fundo azul com
  acentos amarelos; a de venda usa fundo claro com acentos azuis. A pessoa percebe
  que mudou de assunto antes de ler o título.
- O amarelo `#FFCC02` não tem contraste suficiente para texto sobre branco. Para
  texto amarelo em fundo claro, usar `#B88A00`.
- Filete amarelo de 6 px fecha os blocos azuis (base do hero, topo da locação, topo
  do rodapé) — é a assinatura da marca no layout.

Tipografia:
- Família única: **Archivo** (variável, eixos de largura e peso).
- Títulos: peso 800, largura 108, entreletra −0.022em — ecoa o bloco compacto do
  logotipo.
- Texto: peso 400/500, largura normal. Linha com menos de 80 caracteres.
- Nada de caixa alta em rótulos pequenos.

Forma: cantos de 6 px em botões e 10 px em cards. Sem sombras decorativas — só uma
elevação discreta no hover dos cards de venda.

Movimento: um único momento orquestrado (mosaico do hero deslizando) e o
preenchimento da barra de obra ao entrar na tela. `prefers-reduced-motion`
respeitado.

---

## 2. Estrutura

**Home (`index.html`)**, na ordem:
1. Cabeçalho fixo: logotipo, navegação, botão "Falar com vendas".
2. Hero: mosaico de fotos em duas faixas deslizando em sentidos opostos, sobreposto
   por manchete, subtítulo, dois CTAs e quatro números (25 anos, edifícios
   entregues, apartamentos construídos, 100% no prazo).
3. Empreendimentos: trilho horizontal de cards com foto, status, metragem,
   dormitórios, link de mapa, barra de progresso da obra com data de atualização e
   botão de WhatsApp com mensagem pré-pronta.
4. 25 anos de história: foto, texto institucional e três destaques.
5. Locação: bloco azul com o aviso "Nós construímos o seu patrimônio..." e cards de
   unidades (hóspedes, camas, banheiros, metragem, mapa, WhatsApp, link externo
   opcional do Airbnb).
6. Linha do tempo: 1975, 1985, 2002, 2013, 2026 — fotos históricas em sépia nos
   três primeiros, render e alta resolução nos dois últimos. Visão, missão e valores
   logo abaixo.
7. Depoimentos em três abas: Investidor, Morador, Locatário.
8. Contato: mapa do escritório, dados da empresa e formulário (nome, e-mail,
   telefone, mensagem).
9. Rodapé e botão flutuante de WhatsApp que nunca some.

**Página interna (`empreendimento.html?id=`)**:
foto grande da fachada à esquerda, coluna rolável de plantas e apartamentos ao
centro (clique amplia), e à direita as caixas de localização com pontos de
interesse, ficha do apartamento e andamento da obra.

---

## 3. Regras técnicas

- Todo o conteúdo em `assets/js/dados.js`. Nenhum texto de negócio dentro do HTML.
- Sem imagens reais: cada foto é um bloco cinza com a legenda do que deve entrar ali.
- WhatsApp `5516997667976`, sempre com mensagem injetada:
  `Olá, vi o Edifício [Nome] no site e gostaria de mais informações.`
- Mapa: `https://www.google.com/maps/search/?api=1&query=` + endereço codificado.
- Formulário envia POST JSON para um webhook configurável. Sem webhook, abre o
  WhatsApp com a mensagem montada.
- Mobile first, funcionando de 360 px a 1440 px. Foco de teclado visível (contorno
  amarelo), `alt` em imagens, `aria-*` nas abas e na barra de progresso.

## 4. Dados da empresa

Marins Engenharia Ltda. · Rua 28 de Setembro, 2882 — São Carlos, SP ·
(16) 3307-3606 · WhatsApp (16) 99766-7976 · vendas@marinsengenharia.com.br
