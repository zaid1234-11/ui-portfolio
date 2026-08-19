<div align="center">

# A R T E F A C T
### The Digital Atelier & Interactive Archive of Zaid Saifi
**UI/UX Designer · Creative Technologist · Frontend Systems Engineer**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Three.js](https://img.shields.io/badge/Three.js-WebGL-000000?style=flat-square&logo=three.js&logoColor=white)](https://threejs.org/)
[![Motion](https://img.shields.io/badge/Framer_Motion-12.0-FF0055?style=flat-square&logo=framer&logoColor=white)](https://motion.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

[🌐 Explore Live Portfolio](https://zaidsportfolio.in/) • [📂 GitHub Repository](https://github.com/zaid1234-11/ui-portfolio) • [📬 Inquire / Contact](mailto:zaidsaifi150105@gmail.com)

</div>

---

## 🏛️ Design Philosophy & Executive Summary

**ARTEFACT** is an editorial web portfolio engineered at the convergence of **analog materiality** and **high-performance digital interaction design**. 

Traditional digital portfolios often suffer from sterile, cookie-cutter layouts. **ARTEFACT** challenges this paradigm by translating the tactile, human warmth of a physical design studio—distressed cardstock paper weights, brass archival fasteners, washi tape labels, 33⅓ RPM vinyl records, calligraphy felt-tip ink, and street-art graffiti scribbles—into an ultra-smooth **120FPS GPU-accelerated web experience**.

```
                         THE ATELIER DESIGN SYSTEM
 ┌───────────────────────────┬───────────────────────────┬───────────────────────────┐
 │   TACTILE MATERIALITY     │   FLUID SHADER PHYSICS    │    SYSTEM ARCHITECTURE    │
 │  • Vintage Cardstock      │  • WebGL Morphogenesis    │  • Zero-Jank RAF Loops    │
 │  • 33⅓ RPM Vinyl Player   │  • Fluid Mask Dissolve    │  • Native 120Hz Scrolling │
 │  • Brass Paperclip Stacks │  • Spring Kinematics      │  • Variable Proximity Typo│
 └───────────────────────────┴───────────────────────────┴───────────────────────────┘
```

---

## ✨ Core Interactive Systems & Engineering Craft

### 1. 💽 Tactile Vinyl Album Cover & Audio Engine (`AlbumCoverPortrait.tsx`)
- **Physics-Driven Slide-Out**: Features an interactive 12" LP vinyl record nested inside a matte cardboard sleeve with concentric micro-grooves, specular light flares, and centered label artwork.
- **Audio API Synchronization**: Clicking or tapping triggers playback of `/me image record.aac` while initiating continuous linear rotational spinning (`repeat: Infinity`) with dynamic sound wave equalizer telemetry.
- **Turntable Needle Arm**: A mechanical metallic tonearm pivots onto the spinning vinyl groove upon playback and retracts when paused.
- **Bi-Directional Gesture State**: Clicking again pauses audio and smoothly retracts the vinyl disc completely behind the sleeve using damped spring kinematics (`stiffness: 240, damping: 30`).

### 2. 🌊 Liquid Morphogenesis GLSL Transition (`ScrollDissolveCanvas.tsx`)
- **Custom 2D Simplex Noise Shader**: Renders viscous liquid-morphic undulating waves that smoothly melt the hero background image away as the user scrolls into the project index.
- **Calibrated Scroll Thresholds**:
  - **Start Boundary**: Begins dissolution when the explore CTA buttons cross `~80%` viewport height.
  - **Completion Boundary**: Fully reaches `100%` dissipation precisely when the buttons meet the navbar baseline at `~2%` viewport height.
- **Zero-React-Re-render Scroll Loop**: Directly interpolates scroll progress inside a high-frequency `requestAnimationFrame` loop with inertial spring damping (`0.06`), eliminating React state re-render bottlenecks.

### 3. 🗂️ Isometric Archival Folder Stack (`WorkGallery.tsx` & `ProjectCard.tsx`)
- **Physical Paper Stacking**: Projects are presented as physical archival case study folders complete with vector barcodes, classification stamps, washi tape tabs, and paper weight textures.
- **Neighboring Element Displacement**: Hovering over any folder dynamically shifts neighboring folders sideways via reactive CSS custom properties (`--tx`), simulating physical card sorting in an architect's file cabinet.

### 4. 🔤 Kinetic Variable Proximity Typography (`VariableProximity.tsx`)
- **Spatial Falloff Algorithms**: Measures real-time Euclidean distance between the user’s cursor/touch coordinates and individual letter vertices, continuously interpolating font variation axes (`'wght' 300` ➔ `'wght' 900`) and chromatic gradients (`#1c1c1b` ➔ `#B8925A`).
- **Spatial Bounding & Sleep Optimization**: Employs an `IntersectionObserver` paired with a bounding box early-exit check, suspending calculations when the pointer is idle or off-screen to preserve mobile battery and frame budget.

### 5. 🎨 Atelier Graffiti & Street-Art Scribbles (`AboutGraffiti.tsx`)
- Hand-drawn vector annotations including a 3-point street crown, looping `"SPIN ME ↺"` chalk arrows, sparkle bursts (`✦`), and musical notation doodles strategically layered to create depth and visual rhythm.

---

## 🎨 Editorial Design System & Color Taxonomy

| Token | Light Mode (Atelier Paper) | Dark Mode (Obsidian Studio) | Design Role |
| :--- | :--- | :--- | :--- |
| `--color-obsidian` | `#FAF6EE` | `#111110` | Primary backdrop canvas (warm cotton paper / dark slate) |
| `--color-ivory` | `#1c1c1b` | `#FAF6EE` | High-contrast editorial headlines & ink typography |
| `--color-ivory-dim` | `#4E4842` | `#ECE3D2` | Body copy, technical descriptions, secondary metadata |
| `--color-sand` | `#B8925A` | `#C5A880` | Accent gold foil stamping, active LEDs, and interactive pins |
| `--color-sage` | `#8A9A86` | `#8A9A86` | Organic accent highlight, botanical notes, stamp accents |

### Typography Architecture
- **Editorial Display**: `DM Serif Display` — Refined literary authority with high-contrast serif strokes.
- **Atelier Signature**: `Geraldine` & `Herr Von Muellerhoff` — Expressive cursive ink calligraphy.
- **System Interface**: `Manrope` / `Inter` — Crisp, legible UI typography optimized for small labels.
- **Technical Telemetry**: `Space Mono` — Monospaced specification tags, barcodes, and index coordinates.

---

## 🚀 Performance Engineering & Mobile Optimization

```
                               PERFORMANCE TARGETS
 ┌─────────────────────────┬─────────────────────────┬─────────────────────────┐
 │       RENDER SPEED      │    FRAME RATE STABILITY │      TAP LATENCY        │
 │       < 0.8s FCP        │    120 FPS Native       │        0ms Delay        │
 └─────────────────────────┴─────────────────────────┴─────────────────────────┘
```

1. **Native Friction-Free Momentum Scrolling**:
   - Enforced `scroll-behavior: auto` on mobile touch viewports with `-webkit-overflow-scrolling: touch` and `touch-action: pan-y pinch-zoom`, unlocking native 120Hz iOS/Android scrolling.
2. **Zero-Latency Touch Interactions**:
   - Applied `touch-action: manipulation` across all buttons, project cards, and audio controls to eliminate the mobile 300ms click delay.
3. **Adaptive Touch Device Detection**:
   - `CustomCursor.tsx` automatically detects `(pointer: coarse)` viewports and unbinds mouse listeners to eliminate unneeded frame overhead on touch screens.
4. **Sub-Pixel Hardware Acceleration**:
   - Heavy composite layers leverage `transform: translateZ(0)` and `backface-visibility: hidden` to isolate GPU layers and prevent layout thrashing.

---

## 📂 Featured Case Studies

| Project | Domain | Architecture | Live Demonstration |
| :--- | :--- | :--- | :--- |
| **[RetroLab](https://retro-lab-pixel-art.vercel.app/)** | Creative Tooling | React 19, Canvas 2D API, WebGL Shaders, TypeScript | [Live Demo ↗](https://retro-lab-pixel-art.vercel.app/) |
| **[FinTrac AI](https://fintrac-ai-landing.vercel.app/)** | FinTech / AI | Next.js 14 App Router, Tailwind CSS, Supabase, Chart.js | [Live Demo ↗](https://fintrac-ai-landing.vercel.app/) |
| **[Personal Portfolio](https://zaidsportfolio.in/)** | Design Engineering | React 19, Vite, Three.js, Motion, Tailwind v4 | [Live Demo ↗](https://zaidsportfolio.in/) |
| **[Peach Care](https://github.com/zaid1234-11)** | E-Commerce | React 19, Motion, Accessible UI System | [Source Code ↗](https://github.com/zaid1234-11) |
| **[SalesSphere](https://github.com/zaid1234-11)** | Enterprise Analytics | TypeScript, Tailwind CSS, Data Visualization Components | [Source Code ↗](https://github.com/zaid1234-11) |
| **[The Bank UX](https://github.com/zaid1234-11)** | Banking Systems | React 19, Design System Architecture, WCAG 2.1 AA | [Source Code ↗](https://github.com/zaid1234-11) |

---

## 🛠️ Technology Stack & Dependencies

- **Core Framework**: [React 19](https://react.dev/) + [TypeScript 5.5](https://www.typescriptlang.org/)
- **Bundler & Dev Server**: [Vite 6](https://vitejs.dev/)
- **Styling Architecture**: [Tailwind CSS v4](https://tailwindcss.com/) with native CSS theme variables
- **Motion & Kinematics**: [Motion (Framer Motion 12)](https://motion.dev/) + [GSAP 3](https://greensock.com/)
- **Shader & WebGL Rendering**: [Three.js](https://threejs.org/) + Custom GLSL Simplex Noise Shaders
- **Iconography**: [Lucide React](https://lucide.dev/)
- **Type Utilities & Canvas**: Canvas 2D Context, HTML5 Audio API, IntersectionObserver API

---

## 💻 Local Development & Installation

### Prerequisites
- **Node.js**: `v18.0.0` or higher
- **Package Manager**: `npm` (v10+), `pnpm`, or `yarn`

### Setup Workflow

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

The application will be available locally at `http://localhost:5173`.

### Production Build & Validation

```bash
# Type check and build production bundle
npm run build

# Preview production build locally
npm run preview
```

---

## 📬 Contact & Creative Inquiries

I collaborate with forward-thinking teams, startups, and design agencies to build world-class digital products, interactive design systems, and frontend architectures.

- **Portfolio**: [zaidsportfolio.in](https://zaidsportfolio.in/)
- **GitHub**: [@zaid1234-11](https://github.com/zaid1234-11)
- **LinkedIn**: [linkedin.com/in/zaidsaifiai](https://linkedin.com/in/zaidsaifiai)
- **Direct Inquiries**: [zaidsaifi150105@gmail.com](mailto:zaidsaifi150105@gmail.com)

---

<div align="center">
  <sub>Designed, engineered, and crafted with passion by <strong>Zaid Saifi</strong> © 2026</sub>
</div>
