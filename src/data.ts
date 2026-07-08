import { Project, TimelineItem, SkillGroup } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'retrolab',
    title: 'RetroLab',
    description: 'A real-time browser-based retro image processing lab for pixel art, dithering, glitch effects, and CRT aesthetics.',
    image: '/projects/pixel lab/hero page.png',
    category: 'Frontend Engineering',
    tags: ['Creative Coding', 'Canvas API', 'Graphics Programming'],
    role: 'Product Designer & Frontend Developer',
    timeline: 'Personal Project',
    techStack: ['React 19', 'TypeScript', 'Tailwind v4', 'Framer Motion', 'Canvas API', 'Uint8ClampedArray'],
    problem: 'Modern pixel-art tools rely on desktop software or server processing, making experimentation slow.',
    approach: 'RetroLab performs all processing locally using HTML5 Canvas for instant feedback.',
    quote: "Modern images were never meant to look this nostalgic.",
    solution: 'Real-time rendering, zero uploads, crisp exports, and authentic retro aesthetics.',
    outcomes: [
      { label: 'Canvas FPS', value: '60' },
      { label: 'Preview Update', value: '<16ms' },
      { label: 'Server Compute', value: '0%' }
    ],
    galleryImages: [
      '/projects/pixel lab/hero page.png'
    ],
    nextProjectId: 'fintrac-ai',
    liveUrl: 'https://retro-lab-pixel-art.vercel.app',
    repoUrl: 'https://github.com/zaid1234-11/retro-lab-pixel-art'
  },
  {
    id: 'fintrac-ai',
    title: 'FinTrac AI',
    description: 'AI-Powered Financial Behavioral Coaching Platform addressing the high churn of rigid budgeting systems.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBB6kz7fbnn0D5rfaZO7cLZAgCUcgM7geBx3wLgkwPfuqHgEft1H9_08DSSZWpGEEvDwRno1U4xhKkE_J7NzWrVYcIdd3M5PHxXHwn-tFOyEBBzLDmaN-AAgy9EbgGs2AoOsWTrmqXXDva-8_RGQRVzqD0Krr0P1_DO2PcIJ1zdK7y6hLsAwshWf3DRLexvTMUWlzN_ZVmD0hHURgxURrW-ScPBkF-hcjdVZvxjHqm8enxEJj-BfUnn',
    category: 'UI/UX',
    tags: ['Fintech', 'POMDP RL', 'Behavioral Coaching'],
    role: 'Lead Product Designer & UI Engineer',
    timeline: '12 Weeks',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Inngest', 'Clerk', 'GPT-4o-mini'],
    problem: 'Traditional budgeting apps force rigid, equal spending cuts across all categories, ignoring psychological reality: some spending categories are harder to cut than others. This one-size-fits-all approach leads to 36-46% churn by month 12.',
    approach: 'We introduced the Savings Optimizer Dashboard that uses hierarchical information layers to manage complexity, an interactive Friction Simulator, and AI-Assisted Transaction Categorization with an 8-stage cascading classifier.',
    quote: "Low-friction categories absorb more cuts. Tactility and clear algorithm explanation breed confidence when you're managing your wealth.",
    solution: 'FinTrac AI features discrete slider friction controls, real-time budget previews, haptic taps, confidence indicators, and custom overlays that demonstrate how the behavioral engine adapts to user feedback.',
    outcomes: [
      { label: 'Month 12 Retention', value: '97%' },
      { label: 'Avg Session Duration', value: '8.7 min' },
      { label: 'Lighthouse Accessibility', value: '98/100' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBB6kz7fbnn0D5rfaZO7cLZAgCUcgM7geBx3wLgkwPfuqHgEft1H9_08DSSZWpGEEvDwRno1U4xhKkE_J7NzWrVYcIdd3M5PHxXHwn-tFOyEBBzLDmaN-AAgy9EbgGs2AoOsWTrmqXXDva-8_RGQRVzqD0Krr0P1_DO2PcIJ1zdK7y6hLsAwshWf3DRLexvTMUWlzN_ZVmD0hHURgxURrW-ScPBkF-hcjdVZvxjHqm8enxEJj-BfUnn'
    ],
    nextProjectId: 'personal-portfolio',
    liveUrl: 'https://fintrac-ai-landing.vercel.app/',
    repoUrl: 'https://github.com/zaid1234-11/fintrac-ai-landing'
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'Cinematic developer portfolio with custom staggered motion reveals and premium dark micro-animations.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAATjfco-QabRylfVMQYc-wjC0BuRJT7DE0I3FsL9BQGl0Cihv3rBzx21tSeajGlsOgcwr7mRvCESLa-6cDl5sknsGiK-tXsCinmpowbT3ZulrVuMEKIxmSoc2gFqbTGKOG_CRtcklm4l8ADJUiHbZPub--wVE3Azt0u9zd5AWu5aOXuTXeejsCJDrGYil_tngN_JoX8VgxbrwOOteU8WYoJJ3GM-hGsUpb0JY95OE-MfA-9OOS5Um3',
    category: 'Branding',
    tags: ['Motion Design', 'SEO Optimization', 'Interactive Portfolio'],
    role: 'Creative Director & Designer',
    timeline: '8 Weeks',
    techStack: ['Vite', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'Vercel'],
    problem: "Most developer portfolios are utilitarian: a grid of projects, about section, and contact form. They work, but they're forgettable. The goal was to differentiate through cinematic storytelling and memoral experiences.",
    approach: 'We designed the layout around responsive staggered entrance transitions, scroll-triggered intersection observer reveals, high-contrast glow buttons, and fallback reduced-motion parameters.',
    quote: "A portfolio shouldn't be a passive log. It must breathe, interact, and tell a cohesive story of craft, speed, and motion.",
    solution: 'An elegant cinematic dark-theme workspace with interactive cards that zoom on hover, loading skeleton states, responsive typography, and semantic HTML targeting perfect Lighthouse performance metrics.',
    outcomes: [
      { label: 'Bounce Rate', value: '15%' },
      { label: 'Pages per Session', value: '4.2' },
      { label: 'Lighthouse SEO', value: '100/100' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAATjfco-QabRylfVMQYc-wjC0BuRJT7DE0I3FsL9BQGl0Cihv3rBzx21tSeajGlsOgcwr7mRvCESLa-6cDl5sknsGiK-tXsCinmpowbT3ZulrVuMEKIxmSoc2gFqbTGKOG_CRtcklm4l8ADJUiHbZPub--wVE3Azt0u9zd5AWu5aOXuTXeejsCJDrGYil_tngN_JoX8VgxbrwOOteU8WYoJJ3GM-hGsUpb0JY95OE-MfA-9OOS5Um3'
    ],
    nextProjectId: 'peach-and-paper',
    liveUrl: 'https://zaidsportfolio.in',
    repoUrl: 'https://github.com/zaid1234-11/portfolio'
  },
  {
    id: 'peach-and-paper',
    title: 'Peach & Paper',
    description: 'Nostalgic storytelling system transforming emotions into tactile receipts and watercolor graphics.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Vg3N6myTktAIUS8WAIPD1lGLZdW7OYagWuc_OxIZyjjgdAkpdf8WQNl2z50UyWyK4wFVQB8uwPVSQGOR4APzQ9hr4Ih4KbVF75rrjfIIZP5c7H9Ur5oMOg0ofY9KbFIZWbg00c9bYd1Kj04ho4w4M4J-drYppfgcqglfyX4ifqQlFSYxOd8bmJRBMqhasRA0q-vqnq6BucsKmMWsFLrBY2WI9cFhWOgnOxmiQARLegovD_Dw6-6F',
    category: 'Web App',
    tags: ['Nostalgic UI', 'Generative AI', 'Creative Writing'],
    role: 'Full-Stack Designer',
    timeline: '10 Weeks',
    techStack: ['Vite', 'React', 'TypeScript', 'Framer Motion', 'Tailwind CSS', 'OpenAI API'],
    problem: 'How do we create an emotional, nostalgic digital experience that feels handmade and personal, not algorithmic? Standard layouts look mechanical and fail to evoke warm, tactile sentiment.',
    approach: 'We developed a receipt-inspired interface centered around warm peach tones, handdrawn typography patterns, Polaroid frame overlays, and fluid vertical timelines mapping sentiment streams.',
    quote: "Transform memories into visual poetry, letting digital interfaces feel as warm and approachable as real paper.",
    solution: 'A beautiful, minimalist input experience connected to generative model pipelines that produce watercolor receipt logs on scroll, complete with optimistic state renders and scroll-driven parallax triggers.',
    outcomes: [
      { label: 'Paper Contrast Ratio', value: '9.2:1' },
      { label: 'Scroll Render Rate', value: '60fps' },
      { label: 'Nostalgia Rating', value: 'Excellent' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD7Vg3N6myTktAIUS8WAIPD1lGLZdW7OYagWuc_OxIZyjjgdAkpdf8WQNl2z50UyWyK4wFVQB8uwPVSQGOR4APzQ9hr4Ih4KbVF75rrjfIIZP5c7H9Ur5oMOg0ofY9KbFIZWbg00c9bYd1Kj04ho4w4M4J-drYppfgcqglfyX4ifqQlFSYxOd8bmJRBMqhasRA0q-vqnq6BucsKmMWsFLrBY2WI9cFhWOgnOxmiQARLegovD_Dw6-6F'
    ],
    nextProjectId: 'salessphere',
    liveUrl: 'https://peach-and-paper.vercel.app',
    repoUrl: 'https://github.com/zaid1234-11/peach-ink-memories'
  },
  {
    id: 'salessphere',
    title: 'SalesSphere',
    description: 'High-performance enterprise analytics dashboard rendering 100,000+ data points with virtual scrolling.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBIZfWC7c3WjWNnpxJoZqDCof491RJ1aH-EAoUdHb6C2r3ajvx9MWiKgDAwXsGIHEEIXZl1ZHFRlAO_iulwpQJMCTi0CRDn5Z8tczmQJDpYqkH5xDJkxlUwFPQyBGBUExhSAZdthYb7Tguztuddd2MmQhouDJysmxG0CUrStzJkTdvu1CwLdfi4B8gqh7eIbrya8QBexIhVZfOyhoKomhRkxlLp4A9vMuJpomBQT_pW2ijRIeWDcLiF',
    category: 'Data Vis',
    tags: ['Virtualization', 'D3 Charts', 'ETL Pipeline'],
    role: 'Lead UI/UX Designer & Data Engineer',
    timeline: '14 Weeks',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'shadcn/ui', 'Recharts', 'Zustand', 'TanStack Virtual', 'Framer Motion'],
    problem: 'Visualizing over 100,000 transaction records without overwhelming the viewport or tanking browser thread performance, which usually leads to frozen browser tabs.',
    approach: 'Constructed an end-to-end deterministic ETL pipeline to pre-aggregate massive CSV files, backed by custom virtual scrolling lists to render only elements currently in viewport.',
    quote: "Complexity is beautiful when given clear hierarchy. Data should move, shift, and respond like water.",
    solution: 'SalesSphere delivers professional, smooth scrolling dashboard tables, responsive line and area graphs from Recharts, interactive legends, zoom/pan bounds, and immediate CSV downloads.',
    outcomes: [
      { label: 'Record Volume', value: '100K+' },
      { label: 'Table Scroll Rate', value: '59.8 fps' },
      { label: 'JS Bundle Size', value: '285KB' }
    ],
    galleryImages: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIZfWC7c3WjWNnpxJoZqDCof491RJ1aH-EAoUdHb6C2r3ajvx9MWiKgDAwXsGIHEEIXZl1ZHFRlAO_iulwpQJMCTi0CRDn5Z8tczmQJDpYqkH5xDJkxlUwFPQyBGBUExhSAZdthYb7Tguztuddd2MmQhouDJysmxG0CUrStzJkTdvu1CwLdfi4B8gqh7eIbrya8QBexIhVZfOyhoKomhRkxlLp4A9vMuJpomBQT_pW2ijRIeWDcLiF'
    ],
    nextProjectId: 'the-adrocket',
    liveUrl: 'https://github.com/zaid1234-11/Thiranex-1---salessphere',
    repoUrl: 'https://github.com/zaid1234-11/Thiranex-1---salessphere'
  },
  {
    id: 'the-adrocket',
    title: 'The Adrocket',
    description: 'AI Application Launcher and creative playground dashboard integrated with Google Gemini API.',
    image: '/adrocket.png',
    category: 'E-Commerce',
    tags: ['AI Integration', 'Model Playground', 'Rapid Prototyping'],
    role: 'Creative Developer',
    timeline: '6 Weeks',
    techStack: ['React', 'TypeScript', 'Gemini API', 'Tailwind CSS', 'Framer Motion'],
    problem: 'Prototyping responsive dashboards for specialized AI generative text/image models with custom parameters and streaming logs, without overloading user layout context.',
    approach: 'Designed a minimalist dual-panel workspace splitting controls on the left and dynamic outputs on the right, utilizing responsive grids and real-time streaming buffers.',
    quote: "Rapid AI experimentation thrives on layout clarity. Remove the chrome to let the machine's voice shine.",
    solution: 'An intuitive AI playground dashboard with instant API hooks, model selecting dropdown cards, live streaming status, and mobile-responsive collapsible layouts.',
    outcomes: [
      { label: 'API Roundtrip', value: '<200ms' },
      { label: 'Mobile Score', value: '100%' },
      { label: 'Lighthouse Access', value: '95/100' }
    ],
    galleryImages: [
      '/adrocket.png'
    ],
    nextProjectId: 'retrolab',
    liveUrl: 'https://github.com/zaid1234-11/The-adrocket',
    repoUrl: 'https://github.com/zaid1234-11/The-adrocket'
  }
];

export const TIMELINE: TimelineItem[] = [
  {
    id: '1',
    year: '2026 – Present',
    role: 'AI Web Developer Intern',
    company: 'FlyRank',
    description: 'Developing AI-powered web experiences using Next.js, React, TypeScript, Tailwind CSS, and modern AI workflows. Contributing production-ready interfaces, reusable component systems, and AI-integrated user experiences.',
    focus: ['Next.js', 'React', 'AI Interfaces', 'TypeScript', 'Component Architecture'],
    offerLetter: '/flyrank intern web_page-0001.jpg'
  },
  {
    id: '2',
    year: '2026 – Present',
    role: 'Web Developer Intern',
    company: 'Thiranex',
    description: 'Designing and developing modern web applications with an emphasis on responsive interfaces, scalable frontend architecture, and polished user experiences while collaborating on production features.',
    focus: ['Frontend Development', 'Responsive Design', 'UI Engineering', 'Performance Optimization'],
    offerLetter: '/thiranex intern web_page-0001.jpg'
  },
  {
    id: '4',
    year: 'Feb 2026 – Jun 2026',
    role: 'Data Analyst',
    company: 'Internship Studio',
    description: 'Developed a comprehensive Retail Sales Data Analysis project using Python, SQL, and Excel. Performed data cleaning, preprocessing, and exploratory data analysis on customer transaction and response datasets. Built a SQL database with analytical queries to evaluate revenue trends, customer spending behavior, and campaign effectiveness.',
    focus: ['Python', 'SQL', 'Excel', 'Data Visualization', 'Exploratory Data Analysis (EDA)', 'Customer Segmentation']
  },

  {
    id: '3',
    year: '2024 – Present',
    role: 'Independent Creative Developer',
    company: 'Self-Employed',
    description: 'Designing and engineering personal products that combine UI/UX, frontend engineering, motion design, and AI. Building experimental interfaces, interactive portfolios, and immersive digital experiences using React, Next.js, Framer Motion, TypeScript, and creative web technologies.',
    projects: [
      'FinTrac AI — Personal Financial Operating System',
      'SalesSphere — AI-powered sales platform',
      'Peach Ink Memories — Digital memory experience',
      'Personal Portfolio — Editorial journal-inspired portfolio'
    ]
  },
  {
    id: '5',
    year: '2023 – Present',
    role: 'B.Tech — CS (AI & ML)',
    company: 'ABES Engineering College',
    description: 'Exploring frontend engineering, artificial intelligence, creative development, interaction design, and human-centered digital experiences through academic work, internships, and independent projects.'
  }
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'sg1',
    category: 'Design & Motion',
    icon: 'Figma',
    skills: ['User Interface (UI) Design', 'Interaction Design', 'Advanced Typography', 'Brand Guidelines', 'Framer Motion', '3D Asset Prototyping']
  },
  {
    id: 'sg2',
    category: 'Frontend Engineering',
    icon: 'Code',
    skills: ['React / Next.js', 'TypeScript', 'Tailwind CSS', 'D3.js / SVG Canvas', 'Responsive Architecture', 'Vite Bundle Optimization']
  },
  {
    id: 'sg3',
    category: 'Creative Technology',
    icon: 'Zap',
    skills: ['Liquid Glass Physics', 'Micro-Interactions', 'Shader WebGL Concepts', 'Local Persistence API', 'Gestural User Inputs', 'Fluid Bento Frameworks']
  }
];
