// Zaid Saifi UI Portfolio to Figma Builder - Plugin Engine
// Generates native Figma Auto-Layout frames, styles, typography and editable components

figma.showUI(__html__, { width: 340, height: 530, title: "Zaid Saifi Portfolio UI Builder" });

function hexToRgb(hex) {
  let c = hex.replace('#', '');
  if (c.length === 3) {
    c = c.split('').map(x => x + x).join('');
  }
  const num = parseInt(c, 16);
  return {
    r: ((num >> 16) & 255) / 255,
    g: ((num >> 8) & 255) / 255,
    b: (num & 255) / 255
  };
}

function solidFill(hex, opacity = 1) {
  const rgb = hexToRgb(hex);
  return [{ type: 'SOLID', color: rgb, opacity: opacity }];
}

async function loadFonts() {
  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });
}

function createText(parent, text, fontSize, style, colorHex, opacity = 1) {
  const t = figma.createText();
  t.fontName = { family: "Inter", style: style || "Regular" };
  t.characters = text;
  t.fontSize = fontSize || 14;
  t.fills = solidFill(colorHex, opacity);
  parent.appendChild(t);
  return t;
}

function createAutoLayout(name, direction, spacing, padding, bgHex, parent) {
  const frame = figma.createFrame();
  frame.name = name;
  frame.layoutMode = direction; // 'HORIZONTAL' | 'VERTICAL'
  frame.itemSpacing = spacing;
  frame.paddingTop = padding.top !== undefined ? padding.top : padding;
  frame.paddingBottom = padding.bottom !== undefined ? padding.bottom : padding;
  frame.paddingLeft = padding.left !== undefined ? padding.left : padding;
  frame.paddingRight = padding.right !== undefined ? padding.right : padding;
  
  if (bgHex) {
    frame.fills = solidFill(bgHex);
  } else {
    frame.fills = [];
  }
  
  if (parent) {
    parent.appendChild(frame);
  }
  return frame;
}

// =============================================================
// 1. BUILD FULL DESKTOP PORTFOLIO (1440px)
// =============================================================
async function buildPortfolio(theme = 'light') {
  await loadFonts();

  const isDark = theme === 'dark';
  const bgMain = isDark ? '#111110' : '#FAF6EE';
  const textMain = isDark ? '#FAF6EE' : '#1c1c1b';
  const textMuted = isDark ? '#A69F94' : '#6A635B';
  const accentGold = '#B8925A';
  const cardBg = isDark ? '#1C1C1A' : '#FFFFFF';
  const borderColor = isDark ? '#2E2D2A' : '#E8DFD1';

  // Root Canvas Frame
  const artboard = figma.createFrame();
  artboard.name = `Portfolio - ${isDark ? 'Obsidian Dark' : 'Ivory Light'} (Desktop 1440px)`;
  artboard.resize(1440, 4200);
  artboard.fills = solidFill(bgMain);
  artboard.layoutMode = 'VERTICAL';
  artboard.itemSpacing = 0;
  artboard.paddingLeft = 0;
  artboard.paddingRight = 0;
  artboard.paddingTop = 0;
  artboard.paddingBottom = 80;

  // Main Centered Container with Margins
  const container = createAutoLayout("Main Container", "VERTICAL", 64, { top: 32, bottom: 48, left: 96, right: 96 }, null, artboard);
  container.layoutAlign = "STRETCH";

  // --- A. FLOATING HEADER ---
  const navWrap = createAutoLayout("Navbar Wrapper", "HORIZONTAL", 0, 0, null, container);
  navWrap.layoutAlign = "STRETCH";
  navWrap.primaryAxisAlignItems = "CENTER";

  const pillNav = createAutoLayout("Floating Nav Pill", "HORIZONTAL", 28, { top: 12, bottom: 12, left: 24, right: 24 }, isDark ? '#1E1E1C' : '#FFFFFF', navWrap);
  pillNav.cornerRadius = 999;
  pillNav.strokes = solidFill(borderColor);
  pillNav.strokeWeight = 1;

  const logoBox = createAutoLayout("Brand Logo", "HORIZONTAL", 8, 0, null, pillNav);
  logoBox.counterAxisAlignItems = "CENTER";
  const logoText = createText(logoBox, "ARTEFACT", 13, "Bold", textMain);
  logoText.letterSpacing = { value: 1.5, unit: "PIXELS" };

  const linksBox = createAutoLayout("Nav Links", "HORIZONTAL", 20, 0, null, pillNav);
  ['Home', 'Work', 'Process', 'About'].forEach((name, i) => {
    createText(linksBox, name, 12, i === 0 ? "Semi Bold" : "Regular", i === 0 ? textMain : textMuted);
  });

  const connectBtn = createAutoLayout("Connect Button", "HORIZONTAL", 8, { top: 6, bottom: 6, left: 14, right: 14 }, accentGold, pillNav);
  connectBtn.cornerRadius = 999;
  createText(connectBtn, "Connect ➔", 11, "Semi Bold", "#FFFFFF");

  // --- B. HERO SECTION ---
  const heroSection = createAutoLayout("Hero Section", "VERTICAL", 28, { top: 48, bottom: 32, left: 0, right: 0 }, null, container);
  heroSection.layoutAlign = "STRETCH";

  const statusBadge = createAutoLayout("Status Badge", "HORIZONTAL", 8, { top: 6, bottom: 6, left: 12, right: 12 }, isDark ? '#24221E' : '#EFE7D8', heroSection);
  statusBadge.cornerRadius = 999;
  statusBadge.strokes = solidFill(accentGold, 0.4);
  statusBadge.strokeWeight = 1;
  createText(statusBadge, "● AVAILABLE FOR Q2/Q3 ROLES · NEW DELHI / REMOTE", 10, "Medium", accentGold);

  const heroTitle = createText(heroSection, "CRAFTING TACTILE\nDIGITAL ARTIFACTS", 56, "Bold", textMain);
  heroTitle.lineHeight = { value: 64, unit: "PIXELS" };

  const subText = createText(heroSection, "Product Designer & UI Engineer merging high-craft editorial design systems with production frontend architecture. Specializing in high-density web apps, design systems, and creative engineering.", 16, "Regular", textMuted);
  subText.layoutAlign = "STRETCH";
  subText.lineHeight = { value: 26, unit: "PIXELS" };

  // CTA Row
  const btnRow = createAutoLayout("Hero CTA Row", "HORIZONTAL", 16, 0, null, heroSection);
  const primaryBtn = createAutoLayout("Explore Work Button", "HORIZONTAL", 10, { top: 14, bottom: 14, left: 24, right: 24 }, textMain, btnRow);
  primaryBtn.cornerRadius = 8;
  createText(primaryBtn, "Explore Archive ➔", 13, "Semi Bold", bgMain);

  const secondaryBtn = createAutoLayout("Resume Button", "HORIZONTAL", 10, { top: 14, bottom: 14, left: 24, right: 24 }, null, btnRow);
  secondaryBtn.cornerRadius = 8;
  secondaryBtn.strokes = solidFill(borderColor);
  secondaryBtn.strokeWeight = 1;
  createText(secondaryBtn, "Download Dossier CV", 13, "Medium", textMain);

  // Metrics
  const metricsRow = createAutoLayout("Hero Metrics", "HORIZONTAL", 48, { top: 24, bottom: 16, left: 0, right: 0 }, null, heroSection);
  [
    { value: "5+ YRS", label: "Product & UI Craft" },
    { value: "14+", label: "Production Case Studies" },
    { value: "100%", label: "React & TSX Architecture" },
    { value: "99/100", label: "Lighthouse Performance" }
  ].forEach(stat => {
    const statBox = createAutoLayout(`Stat - ${stat.label}`, "VERTICAL", 4, 0, null, metricsRow);
    createText(statBox, stat.value, 24, "Bold", textMain);
    createText(statBox, stat.label, 11, "Regular", textMuted);
  });

  // --- C. WORK ARCHIVE (4 PROJECTS) ---
  const workSection = createAutoLayout("Work Gallery Section", "VERTICAL", 32, { top: 48, bottom: 32, left: 0, right: 0 }, null, container);
  workSection.layoutAlign = "STRETCH";

  const workHeader = createAutoLayout("Section Header", "HORIZONTAL", 0, 0, null, workSection);
  workHeader.layoutAlign = "STRETCH";
  workHeader.primaryAxisAlignItems = "SPACE_BETWEEN";
  workHeader.counterAxisAlignItems = "CENTER";
  createText(workHeader, "01 / CURATED WORK ARCHIVE", 18, "Bold", textMain);

  const filterRow = createAutoLayout("Filter Chips", "HORIZONTAL", 8, 0, null, workHeader);
  ['All', 'UI/UX', 'Web App', 'Branding', 'Data Vis'].forEach((f, i) => {
    const chip = createAutoLayout(`Filter - ${f}`, "HORIZONTAL", 0, { top: 6, bottom: 6, left: 14, right: 14 }, i === 0 ? textMain : (isDark ? '#1C1C1A' : '#EFE7D8'), filterRow);
    chip.cornerRadius = 999;
    createText(chip, f, 11, "Medium", i === 0 ? bgMain : textMuted);
  });

  const projects = [
    {
      title: "RetroLab",
      category: "Frontend Engineering",
      tags: ["Creative Coding", "Canvas API", "WebGL"],
      desc: "Real-time browser retro graphics laboratory for pixel art, dithering, and CRT shaders.",
      metric: "60 FPS Canvas Preview"
    },
    {
      title: "FinTrac AI",
      category: "UI/UX & Fintech",
      tags: ["Behavioral Coaching", "POMDP RL", "Next.js"],
      desc: "Behavioral savings platform resolving user churn through interactive friction controls and live previews.",
      metric: "97% Retention Rate"
    },
    {
      title: "SalesSphere",
      category: "Enterprise Data Vis",
      tags: ["Virtual Scrolling", "D3 Charts", "ETL Engine"],
      desc: "High-performance enterprise analytics dashboard virtualizing 100,000+ financial rows smoothly.",
      metric: "100K+ Data Points at 60fps"
    },
    {
      title: "Peach & Paper",
      category: "Creative Web App",
      tags: ["Tactile UI", "Generative AI", "Motion"],
      desc: "Nostalgic digital storytelling system transforming user memories into watercolor receipt logs.",
      metric: "60fps Scroll Pipeline"
    }
  ];

  const grid = createAutoLayout("Projects Grid", "VERTICAL", 24, 0, null, workSection);
  grid.layoutAlign = "STRETCH";

  for (let r = 0; r < projects.length; r += 2) {
    const row = createAutoLayout(`Card Row ${r/2 + 1}`, "HORIZONTAL", 24, 0, null, grid);
    row.layoutAlign = "STRETCH";

    [projects[r], projects[r + 1]].forEach(proj => {
      if (!proj) return;
      const card = createAutoLayout(`Card - ${proj.title}`, "VERTICAL", 16, 24, cardBg, row);
      card.layoutGrow = 1;
      card.cornerRadius = 14;
      card.strokes = solidFill(borderColor);
      card.strokeWeight = 1;

      const imgFrame = createAutoLayout("Project Preview Visual", "HORIZONTAL", 0, 0, isDark ? '#262624' : '#E8DFD1', card);
      imgFrame.layoutAlign = "STRETCH";
      imgFrame.resize(400, 200);
      imgFrame.cornerRadius = 8;
      imgFrame.primaryAxisAlignItems = "CENTER";
      imgFrame.counterAxisAlignItems = "CENTER";
      createText(imgFrame, `🖼️ ${proj.title} Screen Preview`, 12, "Medium", textMuted);

      createText(card, proj.category.toUpperCase(), 9, "Bold", accentGold);
      createText(card, proj.title, 20, "Bold", textMain);
      const desc = createText(card, proj.desc, 12, "Regular", textMuted);
      desc.lineHeight = { value: 18, unit: "PIXELS" };

      const tagRow = createAutoLayout("Tags", "HORIZONTAL", 6, 0, null, card);
      proj.tags.forEach(tg => {
        const tb = createAutoLayout(`Tag - ${tg}`, "HORIZONTAL", 0, { top: 3, bottom: 3, left: 7, right: 7 }, isDark ? '#222220' : '#F6F1E9', tagRow);
        tb.cornerRadius = 4;
        createText(tb, tg, 10, "Regular", textMuted);
      });

      const foot = createAutoLayout("Card Footer", "HORIZONTAL", 0, { top: 12, bottom: 0, left: 0, right: 0 }, null, card);
      foot.layoutAlign = "STRETCH";
      foot.primaryAxisAlignItems = "SPACE_BETWEEN";
      createText(foot, `⚡ ${proj.metric}`, 11, "Semi Bold", accentGold);
      createText(foot, "View Study ➔", 11, "Semi Bold", textMain);
    });
  }

  // --- D. METHODOLOGY (4 CHANNELS) ---
  const processSection = createAutoLayout("Process Section", "VERTICAL", 24, { top: 48, bottom: 32, left: 0, right: 0 }, null, container);
  processSection.layoutAlign = "STRETCH";
  createText(processSection, "02 / METHODOLOGY & PROCESS", 18, "Bold", textMain);

  const processRow = createAutoLayout("Process Cards Row", "HORIZONTAL", 16, 0, null, processSection);
  processRow.layoutAlign = "STRETCH";

  [
    { step: "01", title: "Structural Discovery", desc: "Understanding the brand topography, content hierarchies, and constraints before sketching." },
    { step: "02", title: "Aesthetic Framing (Figma)", desc: "Sculpting tactile interfaces, typography pairings, strict design tokens, and glassmorphism." },
    { step: "03", title: "Technical Synthesis (React)", desc: "Translating Figma vectors into clean TSX, responsive Tailwind, and Framer Motion." },
    { step: "04", title: "Rigor & Optimization", desc: "Tree shaking, bundle compression, accessibility, and 100% Lighthouse audit alignment." }
  ].forEach(st => {
    const pCard = createAutoLayout(`Step ${st.step}`, "VERTICAL", 12, 20, cardBg, processRow);
    pCard.layoutGrow = 1;
    pCard.cornerRadius = 10;
    pCard.strokes = solidFill(borderColor);
    pCard.strokeWeight = 1;

    createText(pCard, st.step, 24, "Bold", accentGold);
    createText(pCard, st.title, 14, "Bold", textMain);
    const pd = createText(pCard, st.desc, 11, "Regular", textMuted);
    pd.lineHeight = { value: 16, unit: "PIXELS" };
  });

  // --- E. BIOGRAPHY & TIMELINE ---
  const aboutSection = createAutoLayout("About & Experience", "VERTICAL", 24, { top: 48, bottom: 32, left: 0, right: 0 }, null, container);
  aboutSection.layoutAlign = "STRETCH";
  createText(aboutSection, "03 / BIOGRAPHY & CAPABILITIES", 18, "Bold", textMain);

  const splitAbout = createAutoLayout("About Split Row", "HORIZONTAL", 24, 0, null, aboutSection);
  splitAbout.layoutAlign = "STRETCH";

  // Career Timeline Column
  const timelineCard = createAutoLayout("Career Timeline", "VERTICAL", 16, 24, cardBg, splitAbout);
  timelineCard.layoutGrow = 1;
  timelineCard.cornerRadius = 14;
  timelineCard.strokes = solidFill(borderColor);
  timelineCard.strokeWeight = 1;

  createText(timelineCard, "CAREER TIMELINE", 11, "Bold", accentGold);

  [
    { year: "2026 – PRESENT", role: "AI Web Developer Intern", company: "FlyRank", desc: "AI web interfaces with Next.js, React, and TypeScript." },
    { year: "2026 – PRESENT", role: "Web Developer Intern", company: "Thiranex", desc: "Responsive design, scalable frontend architecture." },
    { year: "2024 – PRESENT", role: "Independent Creative Developer", company: "Self-Employed", desc: "Creator of FinTrac AI, SalesSphere, RetroLab." },
    { year: "2023 – PRESENT", role: "B.Tech Computer Science (AI & ML)", company: "ABES Engineering College", desc: "Human-centered digital systems and interaction." }
  ].forEach(item => {
    const node = createAutoLayout(`Role - ${item.company}`, "VERTICAL", 4, 0, null, timelineCard);
    createText(node, item.year, 10, "Semi Bold", accentGold);
    createText(node, `${item.role} · ${item.company}`, 13, "Bold", textMain);
    createText(node, item.desc, 11, "Regular", textMuted);
  });

  // Skills Column
  const skillsCard = createAutoLayout("Skills Grid", "VERTICAL", 16, 24, cardBg, splitAbout);
  skillsCard.layoutGrow = 1;
  skillsCard.cornerRadius = 14;
  skillsCard.strokes = solidFill(borderColor);
  skillsCard.strokeWeight = 1;

  createText(skillsCard, "TECHNICAL MASTERY", 11, "Bold", accentGold);

  [
    { title: "Design & Motion", items: ["UI/UX Design", "Figma Systems", "Framer Motion", "3D Prototyping"] },
    { title: "Frontend Engineering", items: ["React 19 / TS", "Next.js 14", "Tailwind CSS v4", "Canvas API"] },
    { title: "Creative Technology", items: ["Liquid Glass Physics", "Shader WebGL", "D3 Charts", "Virtual Lists"] }
  ].forEach(grp => {
    const gBox = createAutoLayout(`Group - ${grp.title}`, "VERTICAL", 8, 0, null, skillsCard);
    createText(gBox, grp.title, 13, "Bold", textMain);
    const pillRow = createAutoLayout("Pills", "HORIZONTAL", 6, 0, null, gBox);
    grp.items.forEach(it => {
      const pl = createAutoLayout(`Pill - ${it}`, "HORIZONTAL", 0, { top: 4, bottom: 4, left: 8, right: 8 }, isDark ? '#24221E' : '#EFE7D8', pillRow);
      pl.cornerRadius = 4;
      createText(pl, it, 10, "Medium", textMain);
    });
  });

  // --- F. DIRECT DISPATCH / CONNECT FORM ---
  const connectSection = createAutoLayout("Connect Form Section", "VERTICAL", 20, 32, cardBg, container);
  connectSection.layoutAlign = "STRETCH";
  connectSection.cornerRadius = 16;
  connectSection.strokes = solidFill(borderColor);
  connectSection.strokeWeight = 1;

  createText(connectSection, "04 / DIRECT DISPATCH", 11, "Bold", accentGold);
  createText(connectSection, "Initiate Collaboration", 28, "Bold", textMain);
  createText(connectSection, "Let's craft the next digital artifact together. Accepting worldwide UI/UX and engineering roles.", 13, "Regular", textMuted);

  const formRow = createAutoLayout("Form Grid", "HORIZONTAL", 20, 0, null, connectSection);
  formRow.layoutAlign = "STRETCH";

  // Form Inputs
  const inputCol = createAutoLayout("Inputs", "VERTICAL", 12, 0, null, formRow);
  inputCol.layoutGrow = 1;

  const nameInput = createAutoLayout("Name Input Field", "HORIZONTAL", 0, { top: 12, bottom: 12, left: 16, right: 16 }, isDark ? '#141312' : '#FAF6EE', inputCol);
  nameInput.layoutAlign = "STRETCH";
  nameInput.cornerRadius = 8;
  nameInput.strokes = solidFill(borderColor);
  nameInput.strokeWeight = 1;
  createText(nameInput, "Your Name (e.g. Elena Vance)", 12, "Regular", textMuted);

  const emailInput = createAutoLayout("Email Input Field", "HORIZONTAL", 0, { top: 12, bottom: 12, left: 16, right: 16 }, isDark ? '#141312' : '#FAF6EE', inputCol);
  emailInput.layoutAlign = "STRETCH";
  emailInput.cornerRadius = 8;
  emailInput.strokes = solidFill(borderColor);
  emailInput.strokeWeight = 1;
  createText(emailInput, "Your Email (e.g. elena@company.com)", 12, "Regular", textMuted);

  const msgInput = createAutoLayout("Message Input Field", "HORIZONTAL", 0, { top: 16, bottom: 16, left: 16, right: 16 }, isDark ? '#141312' : '#FAF6EE', inputCol);
  msgInput.layoutAlign = "STRETCH";
  msgInput.resize(400, 100);
  msgInput.cornerRadius = 8;
  msgInput.strokes = solidFill(borderColor);
  msgInput.strokeWeight = 1;
  createText(msgInput, "Tell me about your product requirements and goals...", 12, "Regular", textMuted);

  const submitBtn = createAutoLayout("Send Dispatch Button", "HORIZONTAL", 0, { top: 14, bottom: 14, left: 24, right: 24 }, textMain, inputCol);
  submitBtn.layoutAlign = "STRETCH";
  submitBtn.cornerRadius = 8;
  submitBtn.primaryAxisAlignItems = "CENTER";
  createText(submitBtn, "Transmit Dispatch ➔", 13, "Bold", bgMain);

  // --- G. FOOTER ---
  const footer = createAutoLayout("Footer", "HORIZONTAL", 0, { top: 48, bottom: 24, left: 0, right: 0 }, null, container);
  footer.layoutAlign = "STRETCH";
  footer.primaryAxisAlignItems = "SPACE_BETWEEN";
  footer.counterAxisAlignItems = "CENTER";
  footer.strokes = solidFill(borderColor);
  footer.strokeWeight = 1;

  createText(footer, "© 2026 ARTEFACT · Zaid Saifi Portfolio · Hand-crafted UI/UX", 11, "Regular", textMuted);
  createText(footer, "Available for Worldwide Roles ➔ zaidsaifi150105@gmail.com", 11, "Semi Bold", textMain);

  figma.viewport.scrollAndZoomIntoView([artboard]);
  return artboard;
}

// =============================================================
// 2. BUILD MOBILE RESPONSIVE PORTFOLIO (390px)
// =============================================================
async function buildMobilePortfolio() {
  await loadFonts();

  const artboard = figma.createFrame();
  artboard.name = "Zaid Saifi Portfolio - Mobile (390x3800)";
  artboard.resize(390, 3800);
  artboard.fills = solidFill('#FAF6EE');
  artboard.layoutMode = 'VERTICAL';
  artboard.itemSpacing = 24;
  artboard.paddingTop = 20;
  artboard.paddingBottom = 40;
  artboard.paddingLeft = 20;
  artboard.paddingRight = 20;

  // Status Bar
  const nav = createAutoLayout("Mobile Header", "HORIZONTAL", 0, 0, null, artboard);
  nav.layoutAlign = "STRETCH";
  nav.primaryAxisAlignItems = "SPACE_BETWEEN";
  nav.counterAxisAlignItems = "CENTER";
  createText(nav, "ARTEFACT", 16, "Bold", "#1C1C1B");
  const cBtn = createAutoLayout("Connect Pill", "HORIZONTAL", 0, { top: 6, bottom: 6, left: 14, right: 14 }, '#1C1C1B', nav);
  cBtn.cornerRadius = 999;
  createText(cBtn, "Connect ➔", 11, "Semi Bold", "#FAF6EE");

  // Hero
  const hero = createAutoLayout("Hero Mobile", "VERTICAL", 14, 0, null, artboard);
  hero.layoutAlign = "STRETCH";
  createText(hero, "CRAFTING TACTILE\nDIGITAL ARTIFACTS", 34, "Bold", "#1C1C1B");
  createText(hero, "Product Designer & UI Engineer bridging editorial aesthetics with reactive frontend architecture.", 13, "Regular", "#605951");

  const actBtn = createAutoLayout("Explore Button", "HORIZONTAL", 0, { top: 14, bottom: 14, left: 20, right: 20 }, '#1C1C1B', hero);
  actBtn.layoutAlign = "STRETCH";
  actBtn.cornerRadius = 8;
  actBtn.primaryAxisAlignItems = "CENTER";
  createText(actBtn, "Explore Archive ➔", 13, "Bold", "#FAF6EE");

  // Cards
  createText(artboard, "01 / CURATED WORK ARCHIVE", 13, "Bold", "#B8925A");

  [
    { title: "RetroLab", cat: "FRONTEND ENGINEERING", metric: "60 FPS ZERO-LATENCY" },
    { title: "FinTrac AI", cat: "PRODUCT DESIGN (UI/UX)", metric: "97% RETENTION AT M12" },
    { title: "SalesSphere", cat: "DATA VISUALIZATION", metric: "100K+ ROWS SMOOTH" }
  ].forEach(p => {
    const cd = createAutoLayout(`Card - ${p.title}`, "VERTICAL", 12, 16, '#FFFFFF', artboard);
    cd.layoutAlign = "STRETCH";
    cd.cornerRadius = 12;
    cd.strokes = solidFill('#E8DFD1');
    cd.strokeWeight = 1;

    const img = createAutoLayout("Thumbnail", "HORIZONTAL", 0, 0, '#EAE2D5', cd);
    img.layoutAlign = "STRETCH";
    img.resize(350, 140);
    img.cornerRadius = 6;
    img.primaryAxisAlignItems = "CENTER";
    img.counterAxisAlignItems = "CENTER";
    createText(img, `🖼️ ${p.title} Preview`, 11, "Medium", "#8C827A");

    createText(cd, p.cat, 9, "Bold", "#B8925A");
    createText(cd, p.title, 18, "Bold", "#1C1C1B");
    createText(cd, `⚡ ${p.metric}`, 11, "Semi Bold", "#B8925A");
  });

  figma.viewport.scrollAndZoomIntoView([artboard]);
  return artboard;
}

// =============================================================
// 3. BUILD DEDICATED CASE STUDY SCREEN (1440px)
// =============================================================
async function buildCaseStudyScreen() {
  await loadFonts();

  const artboard = figma.createFrame();
  artboard.name = "Case Study Detail - FinTrac AI (Desktop 1440px)";
  artboard.resize(1440, 2600);
  artboard.fills = solidFill('#FAF6EE');
  artboard.layoutMode = 'VERTICAL';
  artboard.itemSpacing = 48;
  artboard.paddingLeft = 96;
  artboard.paddingRight = 96;
  artboard.paddingTop = 40;
  artboard.paddingBottom = 80;

  // Back Navigation
  const backNav = createAutoLayout("Back Nav", "HORIZONTAL", 12, 0, null, artboard);
  backNav.counterAxisAlignItems = "CENTER";
  createText(backNav, "← Return to Archive", 13, "Bold", "#1C1C1B");

  // Hero Banner
  const heroBox = createAutoLayout("Case Study Header", "VERTICAL", 16, 0, null, artboard);
  heroBox.layoutAlign = "STRETCH";
  createText(heroBox, "FINTECH & BEHAVIORAL SCIENCE · 2026", 11, "Bold", "#B8925A");
  createText(heroBox, "FinTrac AI — Behavioral Financial Operating System", 44, "Bold", "#1C1C1B");
  createText(heroBox, "Addressing the high churn rate of rigid budgeting systems through POMDP reinforcement learning and friction controls.", 18, "Regular", "#605951");

  // Metrics Bar
  const statsRow = createAutoLayout("Case Study Outcomes", "HORIZONTAL", 24, 20, '#FFFFFF', artboard);
  statsRow.layoutAlign = "STRETCH";
  statsRow.cornerRadius = 12;
  statsRow.strokes = solidFill('#E8DFD1');
  statsRow.strokeWeight = 1;

  [
    { val: "97%", lbl: "Month 12 Retention" },
    { val: "8.7 min", lbl: "Avg Session Duration" },
    { val: "98/100", lbl: "Lighthouse Accessibility" }
  ].forEach(st => {
    const sb = createAutoLayout("Stat", "VERTICAL", 4, 0, null, statsRow);
    sb.layoutGrow = 1;
    createText(sb, st.val, 28, "Bold", "#B8925A");
    createText(sb, st.lbl, 11, "Medium", "#605951");
  });

  // Problem & Approach Split
  const splitContent = createAutoLayout("Problem & Approach", "HORIZONTAL", 32, 0, null, artboard);
  splitContent.layoutAlign = "STRETCH";

  const probBox = createAutoLayout("Problem Box", "VERTICAL", 12, 24, '#FFFFFF', splitContent);
  probBox.layoutGrow = 1;
  probBox.cornerRadius = 12;
  probBox.strokes = solidFill('#E8DFD1');
  probBox.strokeWeight = 1;
  createText(probBox, "THE CORE PROBLEM", 11, "Bold", "#B8925A");
  createText(probBox, "Traditional budgeting apps force equal cuts across all categories, ignoring psychological reality: some expenses are harder to reduce than others. This leads to 36-46% user churn by month 12.", 13, "Regular", "#605951");

  const appBox = createAutoLayout("Approach Box", "VERTICAL", 12, 24, '#FFFFFF', splitContent);
  appBox.layoutGrow = 1;
  appBox.cornerRadius = 12;
  appBox.strokes = solidFill('#E8DFD1');
  appBox.strokeWeight = 1;
  createText(appBox, "OUR APPROACH", 11, "Bold", "#B8925A");
  createText(appBox, "We introduced the Savings Optimizer Dashboard with interactive Friction Controls and AI-Assisted Transaction Categorization with an 8-stage cascading classifier.", 13, "Regular", "#605951");

  figma.viewport.scrollAndZoomIntoView([artboard]);
  return artboard;
}

// =============================================================
// 4. SYNC LOCAL FIGMA STYLES
// =============================================================
function syncPortfolioStyles() {
  const styles = [
    { name: "Artefact/Ivory Light", hex: "#FAF6EE" },
    { name: "Artefact/Obsidian Dark", hex: "#111110" },
    { name: "Artefact/Text Primary", hex: "#1C1C1B" },
    { name: "Artefact/Text Muted", hex: "#6A635B" },
    { name: "Artefact/Gold Accent", hex: "#B8925A" },
    { name: "Artefact/Silk Ribbon", hex: "#D5C0A4" },
    { name: "Artefact/Border Light", hex: "#E8DFD1" },
    { name: "Artefact/Border Dark", hex: "#2E2D2A" }
  ];

  styles.forEach(s => {
    const style = figma.createPaintStyle();
    style.name = s.name;
    style.paints = solidFill(s.hex);
  });
}

// =============================================================
// MESSAGE LISTENER
// =============================================================
figma.ui.onmessage = async (msg) => {
  if (msg.type === 'create-portfolio') {
    await buildPortfolio(msg.theme || 'light');
    figma.ui.postMessage({ type: 'complete', message: `Created Zaid Saifi Portfolio (${msg.theme}) frame!` });
  } else if (msg.type === 'create-mobile') {
    await buildMobilePortfolio();
    figma.ui.postMessage({ type: 'complete', message: 'Created Zaid Saifi Mobile Responsive frame!' });
  } else if (msg.type === 'create-case-study') {
    await buildCaseStudyScreen();
    figma.ui.postMessage({ type: 'complete', message: 'Created FinTrac AI Case Study Detail frame!' });
  } else if (msg.type === 'create-styles') {
    syncPortfolioStyles();
    figma.ui.postMessage({ type: 'complete', message: 'Synced 8 Portfolio Color Styles into Figma!' });
  }
};
