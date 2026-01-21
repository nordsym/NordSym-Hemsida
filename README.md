# NordSym

System som tänker med er.

**Live:** [nordsym.com](https://nordsym.com)

## What We Do

NordSym AB är en byrå för systemautomation och AI-arkitektur baserad i Stockholm. Vi transformerar traditionella affärsprocesser till intelligenta ekosystem genom att integrera AI som operativsystem. Vi specialiserar oss på Answer Engine Optimization (AEO), intelligent processautomation och autonoma digitala medarbetare.

## Key Offerings

- **AI-First Architecture:** Strategisk systemdesign där AI är kärnan i operativsystemet
- **Intelligent Automation:** End-to-end processautomation som kopplar samman legacy-system med moderna AI-flöden
- **AI Agents:** Autonoma digitala medarbetare för kundtjänst, research och administration
- **Model Context Protocol (MCP):** Implementation av delat kontextminne mellan AI-modeller
- **AEO/GEO Optimization:** Synlighet i AI-sökmotorer (ChatGPT, Perplexity, Gemini)

## Architecture

**Single-File Pattern:**

Hela applikationslogiken, styling och 3D-motorn är inkapslad i en enda optimerad HTML-fil för maximal portabilitet och zero-build deployment.

- **Frontend:** ~150KB (Gzipped) Single Page Application (SPA)
- **State Management:** Vanilla JS klasser (`UnifiedGeometryManager`, `GalleryManager`, `ThemeManager`)
- **Hosting:** GitHub Pages med custom domain
- **Features:**
  - **"Ritbordet" (Workshop):** Interaktivt 3D-byggarläge med joystick-kontroller för mobil
  - **Dual-Theme Engine:** Realtidsväxling mellan "Deep Space" (Dark) och "Blåkopia" (Light/Blueprint)
  - **Starfall Engine:** Custom HTML5 Canvas partikelsystem för bakgrundseffekter
  - **NordGPT Chat:** AI-assistent integrerad via n8n webhook

### Tech Stack
```
Core:
  HTML5, CSS3 (Custom Properties + Tailwind v2 CDN), JavaScript (ES6+)

Visuals & 3D:
  Three.js (r128) - Custom GLSL Shaders (Nebula/Elastic Geometry)
  GSAP 3.12.5 (Animation & ScrollTo)
  Canvas API (Starfall System)

UI Assets:
  Phosphor Icons, Google Fonts (Comfortaa, Inter, Source Code Pro)

Integrations:
  Formspree (Contact forms)
  n8n Webhook (AI Chat Assistant)
```

## Design System

Sajten använder ett robust CSS-variabelsystem för två distinkta visuella teman:

### Deep Space (Default/Dark)
- Background: `#0c1427` (Deep Navy)
- Accent: `#00D4FF` (Cyan Glow)
- Vibe: Immersiv, futuristisk, nebula-baserad

### Blåkopia (Light)
- Background: `#FDFDFD` (Paper White)
- Ink: `#0F172A` (Slate 900)
- Accent: `#0284C7` (Sky 600)
- Vibe: Teknisk ritning, clean, strukturell

## Products

Aktiva produkter och Micro-SaaS-lösningar:

| Produkt | Beskrivning | Länk |
|---------|-------------|------|
| **GenPRD** | AI-ready tekniska specifikationer och SQL-scheman | [genprd.se](https://genprd.se) |
| **FlowVault** | Kurerat bibliotek av produktionsfärdiga n8n-workflows för svenska integrationer | [flowvault.se](https://flowvault.se) |
| **AI-Sök** | Optimeringsplattform för synlighet i AI-sökmotorer (AEO/GEO) | [aisearch.nordsym.com](https://aisearch.nordsym.com) |

## Links

- **Website:** https://nordsym.com
- **AI-Sök:** https://aisearch.nordsym.com
- **FlowVault:** https://flowvault.se
- **GenPRD:** https://genprd.se
- **Contact:** gustav@nordsym.com
- **Location:** Stockholm, Sweden
- **Org.nr:** 559535-5768

## Development

### Local Testing

Single-file arkitektur = ingen build-process krävs.

```bash
git clone https://github.com/nordsym/NordSym-Hemsida.git
cd NordSym-Hemsida

# Öppna index.html i valfri modern webbläsare
# Rekommenderat: VS Code "Live Server" extension för hot-reloading
```

### Deployment

Push till `main` → Auto-deploy via GitHub Pages → Live på nordsym.com

---

**Built by NordSym AB** | Stockholm | 559535-5768
**Architecture:** Single-File Pattern | **Stack:** Vanilla JS + Three.js + GSAP
