<div align="center">

# ARTEFACT — The Atelier Journal
### Official UI/UX & Creative Engineering Portfolio of **Zaid Saifi**

[![Live Demo](https://img.shields.io/badge/Live_Site-zaidsportfolio.in-B8925A?style=for-the-badge&logo=vercel&logoColor=white)](https://zaidsportfolio.in/)
[![React 19](https://img.shields.io/badge/React_19-19.0.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Lenis Smooth Scroll](https://img.shields.io/badge/Lenis_Scroll-60FPS-orange?style=for-the-badge)](https://lenis.darkroom.engineering/)

<br />

> **"Meticulous craftsmanship in digital interfaces. Merging raw visual weight with reactive frontend logic for elite brand presentation."**

</div>

---

## ✦ Table of Contents

- [Overview & Design Philosophy](#-overview--design-philosophy)
- [Key Features & Interactive Architecture](#-key-features--interactive-architecture)
- [Featured Case Studies](#-featured-case-studies)
- [Design Tokens & Aesthetic DNA](#-design-tokens--aesthetic-dna)
- [Tech Stack & Dependencies](#-tech-stack--dependencies)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Performance & SEO](#-performance--seo)
- [Author & Contact](#-author--contact)

---

## 📖 Overview & Design Philosophy

**ARTEFACT** is a high-concept portfolio built as an archival atelier journal. It reimagines digital web portfolios by combining the tangible warmth of physical ephemera — tactile cardstock, binder spiral coils, washi tape, brass paperclips, and distressed rubber stamps — with cutting-edge creative frontend engineering.

- **Atmosphere**: Vintage editorial scrapbook journal meets precision telemetry terminal.
- **Motion Principles**: Weighted spring physics, progressive scroll-driven clip-path masks, and 60FPS continuous viewport pinning.
- **Default Palette**: Warm archival parchment cream (`#FAF6EE`) with iron-gall ink (`#1c1c1b`) and antique amber gold (`#B8925A`), fully switchable to obsidian dark mode (`#141413`).

---

## ⚡ Key Features & Interactive Architecture

### 1. Atelier Boot Sequence (Cinematic Preloader)
- **High-Precision Numeric Counter**: Dynamic easing progression counting smoothly from `00%` to `100%`.
- **Editorial Typography Cycler**: Vertical motion masks flipping through core design disciplines: `DISCOVER` → `EXPERIMENT` → `SYNTHESIZE` → `ZAID SAIFI`.
- **Telemetry Readout**: Real-time stage indicators (`01/04: ARCHITECTING TOKENS`, etc.) with corner crop alignment marks (`⌜`, `⌝`, `⌞`, `⌟`).
- **Curtain Shutter Exit**: Upward cubic-bezier reveal (`ease: [0.76, 0, 0.24, 1]`) unveiling the hero section with zero render flashes.

### 2. The Cabinet Archive (Work Gallery)
- **Overlapping Dossier Stack**: Folders calibrated with golden-ratio desktop dimensions (`285px`–`300px` width) and responsive stacking.
- **Physical Journal Artifacts**:
  - **Metallic Brass Wire Paperclips (3D SVG)** looped over specimen prints.
  - **Torn Washi Masking Tape** strips with custom classification codes (`FIGMA → SHADERS`, `BEHAVIORAL AI`).
  - **Distressed Rubber Stamps** (`APPROVED // PRODUCTION`, `VERIFIED // 97% RETENTION`).
  - **Tipped-In Polaroid Specimen Mounts** with organic `-0.6°` to `+0.8°` tilt that levels smoothly on hover.
  - **Handwritten Calligraphy Notes** (`✍ Canvas 60FPS • 0% server compute`).

### 3. Methodology Journey Log (Process)
- **4-Channel Vintage TV Tuner**: Pins to the viewport over a `400vh` runway while user scrolls through the 4-step work lifecycle.
- **Simulated CRT Aesthetics**: Curved television screen casing, radial glass highlights, scanlines, and channel selector knobs.

### 4. Scroll-Driven Story Reveal (About)
- **Monochrome to Color Unroll Mask**: As the user scrolls through the pinned container, the portrait image dynamically unrolls from black & white into vibrant color.
- **Sequential Story Entrances**: Headline, biography narrative, animated calligraphy signature, and transmission pills glide in across 4 dedicated scroll thresholds.
- **Smart Navbar Occlusion**: Global floating navbar automatically glides off-screen during the About section to maximize visual focus.

### 5. Lenis 60FPS Virtual Scroll Engine
- High-precision virtual scroll loop configured with exponential ease-out curves:
  $$\text{easing}(t) = \min(1, 1.001 - 2^{-10t})$$
- Zero-jitter synchronization with Framer Motion scroll listeners.
- Virtual scroll locking during preloader initialization.

---

## 📂 Featured Case Studies

| Project | Domain | Tech Stack | Highlights |
| :--- | :--- | :--- | :--- |
| **[RetroLab](https://retro-lab-pixel-art.vercel.app/)** | Creative Coding / Graphics | React 19, Canvas API, TypeScript | Client-side retro image processing, Bayer dithering, CRT scanline emulation, zero server compute. |
| **[FinTrac AI](https://fintrac-ai-landing.vercel.app/)** | Fintech / Behavioral AI | Next.js 14, Supabase, Inngest, GPT-4o | POMDP reinforcement learning model, friction simulator, 97% Month 12 retention rate. |
| **[Personal Portfolio](https://zaidsportfolio.in/)** | Design Systems / Motion | React 19, Tailwind v4, Lenis, Motion | Atelier scrapbook aesthetic, physical paper materials, 60FPS interactive shaders. |
| **[Peach Care](https://github.com/zaid1234-11)** | E-Commerce / UX | React, Tailwind, Framer Motion | Tactile micro-interactions, high-conversion cart ergonomics, responsive drawer layout. |
| **[SalesSphere](https://github.com/zaid1234-11)** | Enterprise / Telemetry | TypeScript, Chart.js, Tailwind | Real-time analytics pipeline, modular widgets, sub-16ms telemetry rendering. |
| **[The Bank UX](https://github.com/zaid1234-11)** | Banking / Design Systems | React 19, TypeScript, Tailwind | WCAG AAA accessibility, dense financial ledger layout, tactile security controls. |

---

## 🎨 Design Tokens & Aesthetic DNA

```css
/* Core Scrapbook Parchment Palette */
--color-obsidian:       #FAF6EE;  /* Vintage Cream Vellum (Light Mode Base) */
--color-obsidian-dark:  #ECE3D2;  /* Deep Layered Cardstock Shadow */
--color-ivory:          #1c1c1b;  /* Iron Gall Dark Charcoal Ink */
--color-ivory-dim:      #4E4842;  /* Graphite / Sepia Body Text */
--color-sand:           #B8925A;  /* Antique Gold Leaf Accent */
--color-sage:           #8A9A86;  /* Pressed Sage Green */

/* Obsidian Slate Palette (Dark Mode) */
--color-dark-bg:        #141413;  /* Midnight Slate */
--color-dark-surface:   #1c1c1b;  /* Obsidian Card Container */
--color-dark-text:      #FAF6EE;  /* Warm Ivory Typography */
--color-dark-gold:      #B8925A;  /* Polished Gold Accent */
```

### Typography Hierarchy
- **Display Headings**: *Fraunces*, *Bodoni Moda*, *Cormorant Garamond* (Editorial Serif)
- **Calligraphy & Script**: *Pinyon Script*, *Herr Von Muellerhoff*, *Caveat*
- **Body & Sans**: *Didact Gothic*, *Montserrat*
- **Telemetry & Metadata**: Monospace with micro-tracking (`letter-spacing: 0.25em`)

---

## 🛠 Tech Stack & Dependencies

- **Core Framework**: React 19 (`react` & `react-dom`)
- **Language**: TypeScript (`~5.8.2`)
- **Build Tool**: Vite (`^6.2.3`)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/vite`) + Vanilla CSS Design System
- **Animation & Motion**: Motion (`motion/react` `^12.23.24`)
- **Smooth Scrolling**: Lenis (`lenis` & `lenis/react` `^1.3.25`)
- **Graphics & 3D**: Three.js (`three` `^0.185.1`) & HTML5 Canvas 2D
- **Icons**: Lucide React (`lucide-react`)

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **pnpm** / **yarn**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/zaid1234-11/ui-portfolio.git

# 2. Navigate to project directory
cd ui-portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

The application will be available at `http://localhost:5173` (or `http://localhost:3000`).

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local development server with HMR. |
| `npm run build` | Compiles production TypeScript bundle into `/dist`. |
| `npm run preview` | Previews the production build locally. |
| `npm run lint` | Runs `tsc --noEmit` for strict typechecking. |

---

## 📊 Performance & SEO

- **Lighthouse Performance**: 95+ across Performance, Accessibility, Best Practices, and SEO.
- **Zero CLS (Cumulative Layout Shift)**: Layouts are anchored with sticky containers and hardcoded aspect ratios.
- **Search Engine Optimization**: OpenGraph social cards, Twitter summary cards, and JSON-LD Person & WebSite schema markup for search engine crawlers.
- **Asset Optimization**: Lossless WebP preloads for above-the-fold media and dynamic chunk splitting for below-the-fold modules.

---

## 📬 Author & Contact

**Zaid Saifi**  
*Lead UI/UX Engineer & Product Designer*

- 🌐 **Portfolio**: [zaidsportfolio.in](https://zaidsportfolio.in/)
- 💻 **GitHub**: [@zaid1234-11](https://github.com/zaid1234-11)
- ✉️ **Email**: [zaidsaifi150105@gmail.com](mailto:zaidsaifi150105@gmail.com)

---

<div align="center">
  <sub>© 2026 ARTEFACT. Hand-coded with TSX, Tailwind CSS, Motion, and Lenis.</sub>
</div>
