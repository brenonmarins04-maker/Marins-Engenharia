"""
GERADOR DE STORIES — Marins Engenharia
======================================

Monta um story 1080x1920 pronto para postar, no padrão visual do
carrossel do Instagram. Dois modelos:

  obra  — atualização de andamento de obra
  blog  — chamada de um texto novo do blog

Uso:
  python ferramentas/marketing/story.py obra \
      --foto fotos/obra-15-11.jpg \
      --titulo "Fundação concluída" \
      --texto "Sapatas e baldrames prontos. A estrutura começa na semana que vem." \
      --data "15 de novembro"

  python ferramentas/marketing/story.py blog \
      --foto assets/img/blog/itbi-sao-carlos.webp \
      --titulo "ITBI: o que é e quando se paga" \
      --categoria "Compra de imóvel"

Saída: ferramentas/marketing/saida/<modelo>-<data>.png

As cores vieram da medição dos slides do carrossel, não de chute.
"""

import argparse
import os
import sys
from datetime import date

from PIL import Image, ImageDraw, ImageFont

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
AQUI = os.path.dirname(os.path.abspath(__file__))
FONTE = os.path.join(AQUI, "fontes", "Montserrat-var.ttf")
LOGO = os.path.join(RAIZ, "assets", "img", "logo-marins.png")
SAIDA = os.path.join(AQUI, "saida")

L, A = 1080, 1920

# medidas tiradas dos slides do carrossel
AZUL_ESC = (0x0B, 0x1C, 0x3A)
AZUL_MED = (0x3E, 0x53, 0x7E)
AMARELO = (0xF6, 0xC4, 0x01)
BRANCO = (255, 255, 255)

# o Instagram cobre o topo e o rodapé com a própria interface
TOPO_SEGURO = 250
BASE_SEGURA = 1700


def fonte(tamanho, peso="Bold"):
    f = ImageFont.truetype(FONTE, tamanho)
    try:
        f.set_variation_by_name(peso)
    except Exception:
        pass
    return f


def largura(d, texto, f, espaco=0):
    if not espaco:
        return d.textlength(texto, font=f)
    return sum(d.textlength(c, font=f) + espaco for c in texto) - espaco


def escreve_espacado(d, xy, texto, f, cor, espaco):
    """PIL não tem entrelinha de caractere; desenha letra a letra."""
    x, y = xy
    for c in texto:
        d.text((x, y), c, font=f, fill=cor)
        x += d.textlength(c, font=f) + espaco


def quebra(d, texto, f, limite):
    linhas, atual = [], ""
    for palavra in texto.split():
        teste = (atual + " " + palavra).strip()
        if d.textlength(teste, font=f) <= limite:
            atual = teste
        else:
            if atual:
                linhas.append(atual)
            atual = palavra
    if atual:
        linhas.append(atual)
    return linhas


def ajusta(d, texto, limite_px, maximo, minimo, peso="Bold", max_linhas=3):
    """Maior corpo de letra que ainda cabe em max_linhas."""
    for tam in range(maximo, minimo - 1, -2):
        f = fonte(tam, peso)
        linhas = quebra(d, texto, f, limite_px)
        if len(linhas) <= max_linhas:
            return f, linhas
    f = fonte(minimo, peso)
    return f, quebra(d, texto, f, limite_px)


def fundo():
    """Degradê vertical igual ao dos slides: azul médio em cima, escuro embaixo."""
    img = Image.new("RGB", (L, A), AZUL_ESC)
    d = ImageDraw.Draw(img)
    for y in range(A):
        t = min(1.0, (y / (A * 0.62)) ** 0.9)
        cor = tuple(round(AZUL_MED[i] + (AZUL_ESC[i] - AZUL_MED[i]) * t) for i in range(3))
        d.line([(0, y), (L, y)], fill=cor)
    return img


def cartao_foto(caminho, caixa_l, caixa_a, raio=24, borda=4):
    """Foto cortada para preencher a caixa, canto arredondado e filete branco."""
    im = Image.open(caminho).convert("RGB")
    escala = max(caixa_l / im.width, caixa_a / im.height)
    nova = (max(1, round(im.width * escala)), max(1, round(im.height * escala)))
    im = im.resize(nova, Image.LANCZOS)
    esq = (im.width - caixa_l) // 2
    topo = (im.height - caixa_a) // 2
    im = im.crop((esq, topo, esq + caixa_l, topo + caixa_a))

    mascara = Image.new("L", (caixa_l, caixa_a), 0)
    ImageDraw.Draw(mascara).rounded_rectangle([0, 0, caixa_l - 1, caixa_a - 1], raio, fill=255)

    cartao = Image.new("RGBA", (caixa_l + borda * 2, caixa_a + borda * 2), (0, 0, 0, 0))
    ImageDraw.Draw(cartao).rounded_rectangle(
        [0, 0, cartao.width - 1, cartao.height - 1], raio + borda, fill=BRANCO + (255,))
    cartao.paste(im, (borda, borda), mascara)
    return cartao


def chapeu(img, d):
    """Linha de topo: MARINS ENGENHARIA · SÃO CARLOS."""
    f = fonte(24, "SemiBold")
    txt = "MARINS ENGENHARIA  ·  SÃO CARLOS"
    esp = 5
    larg = largura(d, txt, f, esp)
    escreve_espacado(d, ((L - larg) / 2, TOPO_SEGURO - 90), txt, f, (255, 255, 255, 230), esp)


def rodape(img, d):
    """Logo + nome, centralizados, como no pé dos slides."""
    y = BASE_SEGURA + 40
    try:
        logo = Image.open(LOGO).convert("RGBA")
        h = 74
        logo = logo.resize((round(logo.width * h / logo.height), h), Image.LANCZOS)
    except Exception:
        logo = None

    f1 = fonte(34, "Bold")
    f2 = fonte(19, "SemiBold")
    nome, sub = "Marins", "ENGENHARIA"
    esp = 4
    larg_txt = max(d.textlength(nome, font=f1), largura(d, sub, f2, esp))
    larg_total = (logo.width + 18 if logo else 0) + larg_txt
    x = (L - larg_total) / 2

    if logo:
        img.paste(logo, (round(x), y), logo)
        x += logo.width + 18
    d.text((x, y + 4), nome, font=f1, fill=BRANCO)
    escreve_espacado(d, (x + 2, y + 48), sub, f2, (255, 255, 255, 220), esp)


def selo(d, texto, x, y, f, cor_fundo=AMARELO, cor_texto=AZUL_ESC, pad=(26, 14)):
    larg = d.textlength(texto, font=f)
    alt = f.size
    caixa = [x, y, x + larg + pad[0] * 2, y + alt + pad[1] * 2 + 6]
    d.rounded_rectangle(caixa, 10, fill=cor_fundo)
    d.text((x + pad[0], y + pad[1]), texto, font=f, fill=cor_texto)
    return caixa[3] - caixa[1]


def monta(modelo, foto, titulo, texto, extra):
    img = fundo()
    d = ImageDraw.Draw(img)
    chapeu(img, d)

    margem = 80
    util = L - margem * 2
    y = TOPO_SEGURO

    # etiqueta do tipo de story
    etiqueta = "ACOMPANHE A OBRA" if modelo == "obra" else "NOVO NO BLOG"
    f_et = fonte(26, "Bold")
    y += selo(d, etiqueta, margem, y, f_et) + 34

    # título
    f_tit, linhas = ajusta(d, titulo, util, 86, 48, "Bold", 3)
    for ln in linhas:
        d.text((margem, y), ln, font=f_tit, fill=BRANCO)
        y += round(f_tit.size * 1.16)
    y += 10

    # filete amarelo
    d.rounded_rectangle([margem, y, margem + 120, y + 6], 3, fill=AMARELO)
    y += 46

    # Tudo abaixo da foto é medido ANTES, para a foto receber só o que sobra.
    # Sem isso a última linha do texto e a data se sobrepõem.
    f_txt = fonte(34, "Regular")
    linhas_txt = quebra(d, texto, f_txt, util) if texto else []
    passo_txt = round(f_txt.size * 1.42)
    alt_txt = len(linhas_txt) * passo_txt + (30 if linhas_txt else 0)

    f_ex = fonte(28, "SemiBold")
    alt_extra = (f_ex.size + 34 if modelo == "obra" else f_ex.size + 56) if extra else 0

    alt_foto = max(420, min(900, BASE_SEGURA - y - alt_txt - alt_extra - 30))

    if foto and os.path.exists(foto):
        cartao = cartao_foto(foto, util, alt_foto)
        img.paste(cartao, (margem - 4, y - 4), cartao)
        y += alt_foto + 38
    else:
        print("   aviso: foto nao encontrada, story sai sem imagem")

    for ln in linhas_txt:
        d.text((margem, y), ln, font=f_txt, fill=(226, 232, 242))
        y += passo_txt
    if linhas_txt:
        y += 30

    # linha final: data da obra, ou a chamada do blog
    if extra:
        if modelo == "obra":
            d.text((margem, y), extra, font=f_ex, fill=AMARELO)
        else:
            selo(d, extra, margem, y, f_ex, AMARELO, AZUL_ESC)

    rodape(img, d)
    return img


def principal():
    p = argparse.ArgumentParser(description="Gera stories da Marins Engenharia")
    p.add_argument("modelo", choices=["obra", "blog"])
    p.add_argument("--foto", required=True)
    p.add_argument("--titulo", required=True)
    p.add_argument("--texto", default="")
    p.add_argument("--data", default="")
    p.add_argument("--categoria", default="")
    p.add_argument("--saida", default="")
    a = p.parse_args()

    foto = a.foto if os.path.isabs(a.foto) else os.path.join(RAIZ, a.foto)
    extra = a.data if a.modelo == "obra" else (a.categoria or "Leia no site")

    img = monta(a.modelo, foto, a.titulo, a.texto, extra)

    os.makedirs(SAIDA, exist_ok=True)
    destino = a.saida or os.path.join(SAIDA, f"{a.modelo}-{date.today():%Y-%m-%d}.png")
    img.save(destino, "PNG", optimize=True)
    print(f"   {destino}  ({img.width}x{img.height}, {os.path.getsize(destino)//1024} KB)")
    return destino


if __name__ == "__main__":
    sys.exit(0 if principal() else 1)
