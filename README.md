# Marins Engenharia — site institucional

Site estático (HTML, CSS e JavaScript puro). Não precisa de build, servidor ou framework.

## Estrutura

```
index.html              Home (hero, empreendimentos, 25 anos, locação, história, depoimentos, contato)
empreendimento.html     Página interna de cada prédio — abre via ?id=  (ex.: empreendimento.html?id=trentino)
assets/css/style.css    Todo o visual
assets/js/dados.js      >>> TODO O CONTEÚDO DO SITE ESTÁ AQUI <<<
assets/js/site.js       Comportamento (cards, abas, barra de obra, formulário, menu)
assets/img/logo-marins.png  Logotipo (cabeçalho, rodapé e favicon)
PROMPT.md               Briefing reformulado, com a identidade visual definida
.nojekyll               Evita que o GitHub Pages ignore arquivos
```

## Como o conteúdo está organizado

O HTML só tem estrutura. Todo texto de negócio mora em `assets/js/dados.js`:

| Bloco | O que controla |
|---|---|
| `EMPRESA` | Endereço, telefones, e-mail, WhatsApp e URL do webhook |
| `MENSAGENS` | Mensagens pré-prontas do WhatsApp (`edificio(nome)` gera "Olá, vi o Edifício X no site...") |
| `TEXTOS` | Títulos, parágrafos, botões e avisos de cada seção, das duas páginas |
| `EMPREENDIMENTOS` | Cards de venda e página interna de cada prédio |
| `LOCACAO` | Cards de locação |
| `HISTORIA` | Linha do tempo |
| `DEPOIMENTOS` | As três abas de depoimentos |

No HTML, um elemento com `data-t="hero.titulo"` recebe o texto de `TEXTOS.hero.titulo`;
`data-zap="vendas"` vira link de WhatsApp com `MENSAGENS.vendas`. Os números do hero
(`{edificios}` e `{apartamentos}`) são calculados a partir da lista de empreendimentos.

Ficaram no HTML só o `<title>`/descrição (para buscadores), os itens de menu e os rótulos
dos campos do formulário.

## Testar localmente

Os textos são montados por JavaScript, então abra por um servidor (não com duplo clique):

```bash
python -m http.server 8000
```

e acesse `http://localhost:8000`.

## Publicar no GitHub Pages

1. Crie o repositório e envie todos os arquivos na raiz.
2. Repositório → **Settings** → **Pages**.
3. Em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)`.
4. O site sai em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

## O que trocar antes de publicar

### 1. Imagens
Não há nenhuma imagem no projeto — todo lugar de foto é um bloco cinza com a legenda do
que deve entrar ali (`<span class="ph" data-ph="Foto da fachada — Edifício Trentino">`).

Para colocar uma foto de verdade, troque o bloco por uma `<img>`:

```html
<img src="assets/img/trentino-fachada.jpg" alt="Fachada do Edifício Trentino" loading="lazy">
```

Nas fotos geradas por JavaScript (cards e página interna), o caminho pode ser adicionado
como um campo `foto:` em `dados.js` e usado em `site.js`.

### 2. Conteúdo inventado — revisar
Está tudo marcado no `dados.js`:

- **Edifício Verona** — empreendimento **fictício**, criado só para mostrar a barra de obra em
  andamento (62%). Apague o bloco ou substitua pelo lançamento real.
- **Depoimentos de Investidor e Morador** — todos fictícios (`exemplo: true`). Os de Locatário
  são os textos reais da Gabi, Angélica e Rafael.
- **Linha do tempo (1975, 1985, 2002, 2013)** — textos são rascunho, precisam da história real.
- **Pontos de interesse** ("5 min da USP", "3 min do centro") — estimativas, confirmar.
- **"100% das obras entregues no prazo"** — confirmar se pode ser afirmado publicamente.
- O texto institucional diz "25 anos" e a linha do tempo começa em **1975**. Vale alinhar.

### 3. Formulário de contato (webhook)
Em `assets/js/dados.js`, preencha:

```js
webhook: "https://hooks.zapier.com/..."   // ou Make, n8n, Formspree, etc.
```

O formulário envia um POST `application/json` com:

```json
{ "nome": "", "email": "", "telefone": "", "mensagem": "", "origem": "", "enviadoEm": "" }
```

Enquanto o campo estiver vazio, o botão abre o WhatsApp já com a mensagem montada — ou seja,
o site funciona desde o primeiro dia mesmo sem integração.

### 4. Locação
Cada unidade aceita um `linkExterno` em `dados.js` (Airbnb, Booking). Se preenchido, aparece
o link "Ver anúncio completo" no card.

## Identidade visual

Cores tiradas do próprio logotipo:

| Cor | Hex | Uso |
|---|---|---|
| Azul Marins | `#00378A` | Principal — venda de empreendimentos |
| Azul profundo | `#002255` | Hero e rodapé |
| Amarelo Marins | `#FFCC02` | Secundária — locação, filetes, CTA de WhatsApp |
| Branco | `#FFFFFF` | Cards e seções claras |

**Azul = venda. Amarelo = locação.** É assim que o site separa as duas áreas sem precisar
explicar. A seção de locação é azul com acentos amarelos e traz o aviso de que a empresa
constrói o patrimônio e apenas disponibiliza algumas unidades.

O amarelo não tem contraste para texto sobre branco — para isso o CSS usa `--amarelo-esc`
(`#B88A00`).

Tipografia: **Archivo** variável, títulos em peso 800 e largura 108 (ecoando o bloco do
logotipo), texto em largura normal.

Para mudar qualquer cor, edite as variáveis no topo de `assets/css/style.css`.

O logotipo está em `assets/img/logo-marins.png` e também serve de favicon. Se tiver uma
versão em SVG ou em fundo transparente, troque o arquivo mantendo o nome.

## Enviar para o repositório

```bash
git clone https://github.com/brenonmarins04-maker/Marins-Engenharia.git
# copie os arquivos deste projeto para dentro da pasta clonada
cd Marins-Engenharia
git add .
git commit -m "Site institucional com identidade da marca"
git push origin main
```

Depois: Settings -> Pages -> Deploy from a branch -> `main` -> `/ (root)`.
