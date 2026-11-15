"""
GERADOR DE CARROSSEL — Marins Engenharia
========================================

Monta as cartas de um carrossel 1080x1350 (4:5) no padrão visual do
perfil. Lê um roteiro em JSON e escreve um PNG por carta.

  python ferramentas/marketing/carrossel.py roteiros/obra-nova.json

Tipos de carta:
  capa      foto inteira, véu escuro embaixo, título grande
  foto      foto no alto, texto embaixo, fundo azul
  lista     fundo azul, título e passos numerados
  destaque  fundo azul, uma frase grande
  fecho     foto inteira, véu, frase e chamada

Reaproveita as medidas e as cores de story.py.
"""

import json
import os
import sys

from PIL import Image, ImageDraw

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from story import (  # noqa: E402
    AMARELO, AZUL_ESC, AZUL_MED, BRANCO, LOGO,
    ajusta, cartao_foto, escreve_espacado, fonte, largura, quebra,
)

RAIZ = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
AQUI = os.path.dirname(os.path.abspath(__file__))
SAIDA = os.path.join(AQUI, "saida")

L, A = 1080, 1350
MARGEM = 80
UTIL = L - MARGEM * 2


def fundo_azul():
    img = Image.new("RGB", (L, A), AZUL_ESC)
    d = ImageDraw.Draw(img)
    for y in range(A):
        t = min(1.0, (y / (A * 0.7)) ** 0.9)
        cor = tuple(round(AZUL_MED[i] + (AZUL_ESC[i] - AZUL_MED[i]) * t) for i in range(3))
        d.line([(0, y), (L, y)], fill=cor)
    return img


def chapeu(d, claro=True):
    f = fonte(21, "SemiBold")
    txt = "MARINS ENGENHARIA  ·  SÃO CARLOS"
    esp = 4
    cor = (255, 255, 255, 225) if claro else AZUL_ESC
    escreve_espacado(d, ((L - largura(d, txt, f, esp)) / 2, 52), txt, f, cor, esp)


def marca(img, d, y=None):
    """Logo + nome no pé da carta."""
    y = A - 108 if y is None else y
    try:
        logo = Image.open(LOGO).convert("RGBA")
        h = 56
        logo = logo.resize((round(logo.width * h / logo.height), h), Image.LANCZOS)
    except Exception:
        logo = None
    f1, f2 = fonte(27, "Bold"), fonte(15, "SemiBold")
    esp = 3
    larg_txt = max(d.textlength("Marins", font=f1), largura(d, "ENGENHARIA", f2, esp))
    total = (logo.width + 14 if logo else 0) + larg_txt
    x = (L - total) / 2
    if logo:
        img.paste(logo, (round(x), y), logo)
        x += logo.width + 14
    d.text((x, y + 2), "Marins", font=f1, fill=BRANCO)
    escreve_espacado(d, (x + 2, y + 36), "ENGENHARIA", f2, (255, 255, 255, 215), esp)


def veu(img, altura=760, forca=0.93, piso=0.0):
    """Degradê escuro na base, para o texto sobre foto ficar legível.

    `piso` garante um escurecimento mínimo em toda a faixa: sem ele, a
    primeira linha do título cai onde o degradê ainda está fraco e o
    branco briga com o concreto claro da foto.
    """
    camada = Image.new("RGBA", (L, A), (0, 0, 0, 0))
    d = ImageDraw.Draw(camada)
    for i in range(altura):
        y = A - altura + i
        u = i / altura
        # o piso entra aos poucos no primeiro terço: aplicado de uma vez,
        # ele desenha uma linha horizontal visível onde a faixa começa
        entrada = min(1.0, u / 0.35)
        a = round(255 * min(1.0, piso * entrada + (forca - piso) * u ** 1.5))
        d.line([(0, y), (L, y)], fill=AZUL_ESC + (a,))
    return Image.alpha_composite(img.convert("RGBA"), camada).convert("RGB")


def foto_cheia(caminho):
    im = Image.open(caminho).convert("RGB")
    esc = max(L / im.width, A / im.height)
    im = im.resize((max(1, round(im.width * esc)), max(1, round(im.height * esc))), Image.LANCZOS)
    e, t = (im.width - L) // 2, (im.height - A) // 2
    return im.crop((e, t, e + L, t + A))


# ---------- as cartas ----------

def carta_capa(c):
    img = veu(foto_cheia(caminho(c["foto"])), 860, 0.96, 0.34)
    d = ImageDraw.Draw(img)
    chapeu(d)
    f, linhas = ajusta(d, c["titulo"], UTIL, 96, 56, "Bold", 4)
    alt = len(linhas) * round(f.size * 1.14)
    # `nota` avisa quando a imagem é um render, e não o que já existe
    f_n = fonte(23, "SemiBold") if c.get("nota") else None
    alt_nota = (f_n.size + 20) if f_n else 0

    y = A - 190 - alt - alt_nota
    d.rounded_rectangle([MARGEM, y - 44, MARGEM + 110, y - 38], 3, fill=AMARELO)
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.14)
    if f_n:
        d.text((MARGEM, y + 14), c["nota"], font=f_n, fill=(196, 208, 228))
    marca(img, d)
    return img


def carta_foto(c):
    img = fundo_azul()
    d = ImageDraw.Draw(img)
    chapeu(d)
    # foto de ponta a ponta: no feed do celular a carta é pequena e o
    # filete branco comia largura útil sem acrescentar nada
    y = 108
    alt_foto = 760
    cartao = cartao_foto(caminho(c["foto"]), L, alt_foto, raio=0)
    img.paste(cartao, (0, y), cartao)
    y += alt_foto + 48
    f, linhas = ajusta(d, c["texto"], UTIL, 42, 28, "Regular", 5)
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=(228, 234, 244))
        y += round(f.size * 1.42)
    marca(img, d)
    return img


def carta_lista(c):
    img = fundo_azul()
    d = ImageDraw.Draw(img)
    chapeu(d)
    y = 150
    f, linhas = ajusta(d, c["titulo"], UTIL, 72, 46, "Bold", 2)
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.16)
    d.rounded_rectangle([MARGEM, y + 14, MARGEM + 110, y + 20], 3, fill=AMARELO)
    y += 72

    # Os itens ocupam o espaço que sobra entre o título e a assinatura,
    # em vez de ficarem amontoados no alto com um vazio embaixo.
    itens = c["itens"]
    f_n = fonte(30, "Bold")
    f_i = fonte(38, "SemiBold")
    disponivel = (A - 170) - y
    passo = max(76, min(150, round(disponivel / max(1, len(itens)))))
    # com poucos itens a sobra é grande; centralizar tudo afastava demais
    # a lista do título, então o deslocamento tem teto
    y += max(0, min(90, round((disponivel - passo * len(itens)) / 2)))

    for i, item in enumerate(itens, 1):
        d.rounded_rectangle([MARGEM, y, MARGEM + 54, y + 54], 10, fill=AMARELO)
        n = str(i)
        d.text((MARGEM + 27 - d.textlength(n, font=f_n) / 2, y + 9), n, font=f_n, fill=AZUL_ESC)
        d.text((MARGEM + 78, y + 6), item, font=f_i, fill=BRANCO)
        y += passo
    marca(img, d)
    return img


def carta_destaque(c):
    img = fundo_azul()
    d = ImageDraw.Draw(img)
    chapeu(d)
    f, linhas = ajusta(d, c["titulo"], UTIL, 86, 50, "Bold", 4)
    alt = len(linhas) * round(f.size * 1.16)

    f_s, linhas_s = (None, [])
    if c.get("texto"):
        f_s, linhas_s = ajusta(d, c["texto"], UTIL, 36, 26, "Regular", 6)
    alt_s = len(linhas_s) * round(f_s.size * 1.45) if linhas_s else 0

    y = (A - alt - alt_s - 70) / 2
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.16)
    if linhas_s:
        d.rounded_rectangle([MARGEM, y + 20, MARGEM + 110, y + 26], 3, fill=AMARELO)
        y += 70
        for ln in linhas_s:
            d.text((MARGEM, y), ln, font=f_s, fill=(214, 223, 238))
            y += round(f_s.size * 1.45)
    marca(img, d)
    return img


def carta_fecho(c):
    img = veu(foto_cheia(caminho(c["foto"])), 900, 0.96, 0.38)
    d = ImageDraw.Draw(img)
    chapeu(d)
    f, linhas = ajusta(d, c["titulo"], UTIL, 82, 48, "Bold", 3)
    alt = len(linhas) * round(f.size * 1.16)
    # `nota` identifica a imagem quando ela é um render, e não uma foto do
    # que já existe. Sem isso o projeto passa por obra pronta.
    f_n = fonte(24, "SemiBold") if c.get("nota") else None
    y = A - 300 - alt - (f_n.size + 18 if f_n else 0)
    if f_n:
        d.text((MARGEM, y), c["nota"].upper(), font=f_n, fill=(198, 210, 230))
        y += f_n.size + 18
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.16)
    if c.get("cta"):
        f_c = fonte(34, "Bold")
        txt = c["cta"]
        larg = d.textlength(txt, font=f_c)
        y += 26
        d.rounded_rectangle([MARGEM, y, MARGEM + larg + 64, y + f_c.size + 38], 12, fill=AMARELO)
        d.text((MARGEM + 32, y + 17), txt, font=f_c, fill=AZUL_ESC)
    marca(img, d)
    return img


def carta_mapa(c):
    """Mapa desenhado do quarteirão: ruas reais, sem captura do Google."""
    img = fundo_azul()
    d = ImageDraw.Draw(img)
    chapeu(d)

    y = 130
    f, linhas = ajusta(d, c["titulo"], UTIL, 72, 46, "Bold", 2)
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.16)
    d.rounded_rectangle([MARGEM, y + 14, MARGEM + 110, y + 20], 3, fill=AMARELO)

    # malha de ruas: verticais e horizontais em frações da área do mapa
    topo, base = y + 86, A - 250
    esq, dir_ = MARGEM, L - MARGEM
    verticais = c.get("verticais", [])
    horizontais = c.get("horizontais", [])
    via = (255, 255, 255, 46)
    f_rua = fonte(21, "SemiBold")

    for v in verticais:
        x = esq + (dir_ - esq) * v["em"]
        d.line([(x, topo), (x, base)], fill=via, width=16)
    for h in horizontais:
        yy = topo + (base - topo) * h["em"]
        d.line([(esq, yy), (dir_, yy)], fill=via, width=16)

    def rotulo(texto, cx, cy, f, cor, centrado=True):
        """Texto sobre uma tarja escura: sem ela o nome some na via branca."""
        larg = d.textlength(texto, font=f)
        x0 = cx - larg / 2 if centrado else cx
        x0 = min(max(esq - 6, x0), dir_ - larg + 6)
        pad_x, pad_y = 10, 6
        d.rounded_rectangle(
            [x0 - pad_x, cy - pad_y, x0 + larg + pad_x, cy + f.size + pad_y],
            8, fill=AZUL_ESC + (225,))
        d.text((x0, cy), texto, font=f, fill=cor)

    for v in verticais:
        x = esq + (dir_ - esq) * v["em"]
        rotulo(v["nome"], x, topo - 40, f_rua, (198, 210, 230))
    for h in horizontais:
        yy = topo + (base - topo) * h["em"]
        rotulo(h["nome"], esq + 14, yy - 44, f_rua, (198, 210, 230), centrado=False)

    # marcos: o destaque em amarelo, os demais em branco
    f_m = fonte(25, "Bold")
    for m in c.get("marcos", []):
        x = esq + (dir_ - esq) * m["x"]
        yy = topo + (base - topo) * m["y"]
        destaque = m.get("destaque")
        r = 17 if destaque else 11
        cor = AMARELO if destaque else (255, 255, 255, 235)
        d.ellipse([x - r, yy - r, x + r, yy + r], fill=cor)
        if destaque:
            d.ellipse([x - r - 9, yy - r - 9, x + r + 9, yy + r + 9],
                      outline=AMARELO + (120,), width=4)
        f_r = f_m if destaque else fonte(22, "SemiBold")
        rotulo(m["nome"], x, yy + r + 14, f_r,
               AMARELO if destaque else (226, 233, 245))

    if c.get("rodape"):
        f_p = fonte(29, "SemiBold")
        lp = quebra(d, c["rodape"], f_p, UTIL)
        yy = A - 210
        for ln in lp:
            d.text((MARGEM, yy), ln, font=f_p, fill=(214, 223, 238))
            yy += round(f_p.size * 1.38)

    marca(img, d)
    return img


def painel(img, caixa, raio=14, cor=(255, 255, 255, 20)):
    """Retângulo translúcido.

    O ImageDraw ignora o alfa quando desenha direto numa imagem RGB: o
    painel saía branco sólido e engolia o texto por cima. Por isso vai
    numa camada RGBA e depois é composta.
    """
    camada = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ImageDraw.Draw(camada).rounded_rectangle(caixa, raio, fill=cor)
    return Image.alpha_composite(img.convert("RGBA"), camada).convert("RGB")


def carta_opcoes(c):
    """Duas tipologias lado a lado, cada uma com o que tem dentro."""
    img = fundo_azul()
    d = ImageDraw.Draw(img)
    chapeu(d)

    y = 130
    f, linhas = ajusta(d, c["titulo"], UTIL, 72, 44, "Bold", 2)
    for ln in linhas:
        d.text((MARGEM, y), ln, font=f, fill=BRANCO)
        y += round(f.size * 1.16)
    d.rounded_rectangle([MARGEM, y + 14, MARGEM + 110, y + 20], 3, fill=AMARELO)
    y += 74

    ops = c["opcoes"]
    alt = 470
    larg = (UTIL - 28) // 2
    f_area = fonte(62, "Bold")
    f_qtd = fonte(24, "SemiBold")
    f_it = fonte(26, "Regular")

    for i, op in enumerate(ops[:2]):
        x = MARGEM + i * (larg + 28)
        img = painel(img, [x, y, x + larg, y + alt])
    d = ImageDraw.Draw(img)

    for i, op in enumerate(ops[:2]):
        x = MARGEM + i * (larg + 28)
        d.rounded_rectangle([x, y, x + larg, y + 7], 4, fill=AMARELO)

        yy = y + 40
        d.text((x + 26, yy), op["area"], font=f_area, fill=AMARELO)
        yy += 76
        d.text((x + 26, yy), op["quantas"], font=f_qtd, fill=(198, 211, 232))
        yy += 48
        for it in op["itens"]:
            d.ellipse([x + 28, yy + 11, x + 36, yy + 19], fill=(255, 255, 255, 170))
            d.text((x + 50, yy), it, font=f_it, fill=BRANCO)
            yy += 42

    y += alt + 44
    if c.get("resumo"):
        f_r = fonte(27, "SemiBold")
        passo = 46
        img = painel(img, [MARGEM, y, L - MARGEM, y + 24 + passo * len(c["resumo"])],
                     cor=(255, 255, 255, 15))
        d = ImageDraw.Draw(img)
        yy = y + 18
        for it in c["resumo"]:
            d.rounded_rectangle([MARGEM + 26, yy + 13, MARGEM + 40, yy + 21], 4, fill=AMARELO)
            d.text((MARGEM + 56, yy), it, font=f_r, fill=(228, 234, 246))
            yy += passo

    marca(img, d)
    return img


TIPOS = {"capa": carta_capa, "foto": carta_foto, "lista": carta_lista,
         "destaque": carta_destaque, "fecho": carta_fecho,
         "mapa": carta_mapa, "opcoes": carta_opcoes}


def caminho(p):
    return p if os.path.isabs(p) else os.path.join(RAIZ, p)


def principal():
    if len(sys.argv) < 2:
        print("uso: python carrossel.py <roteiro.json>")
        return False
    arq = caminho(sys.argv[1])
    roteiro = json.load(open(arq, encoding="utf-8"))

    nome = roteiro.get("nome", "carrossel")
    pasta = os.path.join(SAIDA, nome)
    os.makedirs(pasta, exist_ok=True)

    for i, c in enumerate(roteiro["cartas"], 1):
        tipo = c.get("tipo", "destaque")
        if tipo not in TIPOS:
            print(f"   carta {i}: tipo '{tipo}' desconhecido")
            continue
        img = TIPOS[tipo](c)
        dest = os.path.join(pasta, f"{i:02d}-{tipo}.png")
        img.save(dest, "PNG", optimize=True)
        print(f"   {i:02d}  {tipo:9} {os.path.getsize(dest)//1024:5} KB   {dest}")
    print(f"\n   {len(roteiro['cartas'])} cartas em {pasta}")
    return True


if __name__ == "__main__":
    sys.exit(0 if principal() else 1)

