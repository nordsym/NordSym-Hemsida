# NordSym

System som tänker med er.

🔗 **Live:** [nordsym.com](https://nordsym.com)

## 🎯 What We Do

NordSym AB is a system automation and AI architecture agency based in Stockholm. We transform traditional business operations into intelligent ecosystems by integrating "AI as an Operating System." We specialize in Answer Engine Optimization (AEO), intelligent process automation, and autonomous digital workers.

## ✨ Key Offerings

- **AI-First Architecture:** Strategic system design where AI is the core operating system
- **Intelligent Automation:** End-to-end process automation connecting legacy systems with modern AI flows
- **AI Agents:** Autonomous digital workers for customer service, research, and administration
- **Model Context Protocol (MCP):** Implementation of shared context memory across AI models
- **Spatial Computing Interfaces:** Advanced 3D/WebGL interfaces for complex data navigation

## 🏗️ Architecture

**Single-File Pattern:**

The entire application logic, styling, and 3D engine are encapsulated within a single optimized HTML file for maximum portability and zero-build deployment.

- **Frontend:** ~150KB (Gzipped) Single Page Application (SPA)
- **State Management:** Vanilla JS classes (`UnifiedGeometryManager`, `GalleryManager`, `ThemeManager`)
- **Hosting:** GitHub Pages
- **Special Features:**
  - **"Ritbordet" (The Workshop):** Interactive 3D builder mode with custom joystick controls for mobile
  - **Dual-Theme Engine:** Real-time switching between "Deep Space" (Dark) and "Blåkopia" (Light/Blueprint) modes
  - **Starfall Engine:** Custom HTML5 Canvas particle system for background effects
  - **Glass Box Terminal:** Real-time simulation of system logic logs

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

Integrations & Analytics:
  Google Analytics 4 (G-KRLNF7DHVJ)
  Microsoft Clarity
  Formspree (Contact forms & Waitlists)
  n8n Webhook (AI Chat Assistant)
```

## 🎨 Design System

The site utilizes a robust CSS variable system to handle two distinct visual themes:

### Deep Space (Default/Dark)
- Background: `#0c1427` (Deep Navy)
- Accent: `#00D4FF` (Cyan Glow)
- Vibe: Immersive, futuristic, nebula-based

### Blåkopia (Light)
- Background: `#FDFDFD` (Paper White)
- Ink: `#0F172A` (Slate 900)
- Accent: `#0284C7` (Sky 600)
- Vibe: Technical blueprint, clean, structural

## 📊 Products Portfolio

The architecture showcases several proprietary products and Micro-SaaS solutions:

- **[GenPRD](https://github.com/nordsym/genPRD)** - AI-ready technical specifications and SQL schemas generated in seconds
- **[FlowVault](https://github.com/nordsym/flowvault)** - Curated library of production-ready n8n workflows for Swedish integrations (Fortnox, BankID)
- **[AI-Sök / AEO Platform](https://github.com/nordsym/aeo-platform)** - Optimization platform for visibility in AI search engines like ChatGPT and Perplexity
- **Klara** - Autonomous catering and logistics agent
- **Beaver** (Waitlist) - Construction industry administration tool
- **FlowNode** (Waitlist) - Visual orchestration builder for AI agents

## 🔗 Links

- **Website:** https://nordsym.com
- **Contact:** gustav@nordsym.com
- **Location:** Stockholm, Sweden
- **Org.nr:** 559535-5768

## 🛠️ Development

### Local Testing

Since the architecture is a single file, no build process (Webpack/Vite) is strictly necessary for local testing.

```bash
git clone https://github.com/nordsym/NordSym-Hemsida.git
cd NordSym-Hemsida

# Open index.html in any modern browser
# Recommended: Use VS Code "Live Server" extension for hot-reloading
```

### Deployment

Push to `main` → Auto-deploys via GitHub Pages → Live at nordsym.com

---

**Built by NordSym AB** | Stockholm | 559535-5768  
**Architecture:** Single-File Pattern | **Stack:** Vanilla JS + Three.js + GSAP
