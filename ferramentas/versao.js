/* ============================================================
   VERSÃO DOS ARQUIVOS  —  node ferramentas/versao.js

   Os HTML pedem o CSS e o JS com ?v=AAAAMMDD-N. Sem subir esse
   número, quem já visitou o site continua recebendo a versão
   guardada no navegador — as mudanças não aparecem.

   Este módulo sobe o número em todos os HTML de uma vez. É usado
   pelo organizador de fotos ao salvar e dá para rodar na mão.
   ============================================================ */

const fs = require("fs");
const path = require("path");

const RAIZ = path.join(__dirname, "..");

/* Só os HTML que ficam na raiz: os de edificios/ e blog/ são
   escritos pelo gerador, que copia a versão daqui. */
const paginas = () => fs.readdirSync(RAIZ).filter(a => a.endsWith(".html"));

function subir() {
  const hoje = new Date().toISOString().slice(0, 10).replace(/-/g, "");
  let atual = null;

  for (const arq of paginas()) {
    const m = fs.readFileSync(path.join(RAIZ, arq), "utf8").match(/\?v=(\d{8})-(\d+)/);
    if (m) { atual = m; break; }
  }
  if (!atual) return null;

  // mesmo dia continua a contagem; dia novo recomeça do 1
  const nova = atual[1] === hoje ? `${hoje}-${Number(atual[2]) + 1}` : `${hoje}-1`;
  const velha = `${atual[1]}-${atual[2]}`;

  let mexidos = 0;
  for (const arq of paginas()) {
    const alvo = path.join(RAIZ, arq);
    const antes = fs.readFileSync(alvo, "utf8");
    const depois = antes.split(`?v=${velha}`).join(`?v=${nova}`);
    if (depois !== antes) { fs.writeFileSync(alvo, depois, "utf8"); mexidos++; }
  }
  return { de: velha, para: nova, paginas: mexidos };
}

module.exports = { subir };

if (require.main === module) {
  const r = subir();
  console.log(r ? `versão ${r.de} → ${r.para} em ${r.paginas} páginas`
                : "nenhum ?v= encontrado nos HTML");
}
