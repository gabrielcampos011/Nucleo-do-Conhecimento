# Spec — WordPress Page Template: Núcleo do Conhecimento

**Data:** 2026-05-21  
**Status:** Aprovado

---

## Objetivo

Converter a landing page React existente em um arquivo PHP standalone para WordPress, sem depender do Elementor. A página será acessível em `nucleourbano.com.br/conhecimento`.

---

## Arquitetura

### Arquivo principal

`/wp-content/themes/SEU-TEMA/page-conhecimento.php`

- Declaração de template WordPress no topo: `/* Template Name: Núcleo do Conhecimento */`
- Não usa `wp_head()` nem `wp_footer()` — entrega HTML puro sem overhead do WP
- Usa `content_url('uploads/nucleo-conhecimento')` para montar a URL dos assets dinamicamente
- `<?= date('Y') ?>` para o ano no footer
- Todo CSS em `<style>` no `<head>`
- Todo JS em `<script>` antes do `</body>`

### Assets (subir via FTP)

Destino: `/wp-content/uploads/nucleo-conhecimento/`

```
fonts/
  NexaLight.otf
  NexaRegular.otf
  NexaBold.otf
  NexaHeavy.otf
  NexaBlack.otf
  RomanSophisticated-Regular.otf
assets/
  Logo-branca-nucleo-do-conhecimento.png
  Logo-realizacao.png
  logo-sebrae-branca.png
  flutuante-amarelo.webp      (renomear: sem espaço)
  arcos-flutuantes.webp       (renomear: sem espaço)
```

Origem local: `landing-page/public/fonts/` e `landing-page/public/assets/`

---

## Seções e componentes

| Seção | ID âncora | Notas |
|---|---|---|
| Hero | — | Barras animadas geradas por JS; esfera e arco flutuantes |
| Sobre | `#sobre` | Cards com carousel placeholder (dots clicáveis, sem imagens reais ainda) |
| Trilhas | `#trilhas` | Tabs Profissionais/Lojistas em JS puro |
| Por Que | `#por-que` | Lista com checkmarks dourados, layout 2 colunas |
| Lançamento | `#lancamento` | Embed YouTube (`qgmgnxJFFhw`), quote Darwin |
| Footer | `#planos` | CTA strip, navegação, redes sociais (IG/IN com `href="#"` por ora) |

---

## Conversão React → Vanilla

| React | Vanilla |
|---|---|
| `useState` para tabs | `querySelectorAll` + `classList.toggle` |
| `useState` para carousel dots | Event listener nos botões dot |
| `useReveal` hook | `IntersectionObserver` (threshold 0.12, rootMargin -40px) |
| CSS Modules | Prefixo `.nc-` em todas as classes para isolar do WP |
| `Array.from({length:N}).map(...)` | HTML estático para barras/dots |
| `new Date().getFullYear()` | `<?= date('Y') ?>` |

---

## Identidade Visual

Conforme `GUIA_IDENTIDADE_VISUAL.md`:
- Fundo: `#0D0A05` (primário), `#1A1208` (secundário)
- Dourado: `#E8A020` (principal), `#F5C842` (claro)
- Fontes: Nexa (corpo) + Roman Sophisticated (display/títulos)
- Elementos decorativos nos cantos, nunca centralizados

---

## Deploy no WordPress

1. Upload do `page-conhecimento.php` na pasta do tema ativo (via FTP)
2. Upload da pasta `nucleo-conhecimento/` em `wp-content/uploads/` (via FTP)
3. No WP Admin: Páginas → Nova Página → Template: "Núcleo do Conhecimento" → Publicar
4. Definir slug da página como `conhecimento`

---

## Fora do escopo

- Links reais para inscrição (CTA e footer mantêm `href="#planos"` por ora)
- Links de redes sociais (mantêm `href="#"` por ora)
- Imagens reais no carousel da seção Sobre (mantêm placeholder)
