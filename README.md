# GrowthMatrix

A premium consulting landing page — demo website to showcase web development services to potential clients. Built with React + Vite, featuring a modern, clean aesthetic with bold typography and sharp accent colors.

---

## 📋 Development Checklist

### Phase 1: Planning & Branding ✅
- [x] Finalize Demo Name: **GrowthMatrix**
- [x] Lock in Color Palette: **Obsidian & Lime**
- [x] Select Fonts: **Syne** (bold display) + **Inter** (clean body)
- [x] Define design direction: Modern Fintech / Executive SaaS
- [x] Gather brand assets (logos, headshots, images)

### Phase 2: Copywriting & Content
- [ ] **Hero Section:** Punchy headline, subheadline, dual CTA
- [ ] **Pain Points:** 3 business problems with agitation copy
- [ ] **Services:** 3 core consulting services with descriptions
- [ ] **Process:** 3-step framework with visuals
- [ ] **Testimonials:** 3 dummy reviews with success metrics
- [ ] **About:** Founder bio + firm credibility copy
- [ ] **Contact:** Form copy + booking CTA

### Phase 3: Project Setup & Architecture
- [ ] Initialize React + Vite frontend
- [ ] Configure CSS variables and global styles
- [ ] Set up folder structure (components, hooks, styles)
- [ ] Install dependencies (framer-motion, lucide-react)

### Phase 4: Component Development
- [ ] `Navbar.jsx` — Logo, links, sticky scroll effect, mobile menu
- [ ] `Hero.jsx` — Headline, subtext, dual CTA, floating UI card
- [ ] `TrustedBy.jsx` — Partner logos / social proof bar
- [ ] `PainPoints.jsx` — 3 problem cards with hover effects
- [ ] `Services.jsx` — 3 service cards with animated accent
- [ ] `Process.jsx` — 3-step dark section with connectors
- [ ] `Testimonials.jsx` — Review cards with metrics badges
- [ ] `About.jsx` — Split layout with founder image + perks
- [ ] `Contact.jsx` — Form + booking details
- [ ] `Footer.jsx` — 4-column grid + copyright

### Phase 5: Polish & Deploy
- [ ] Scroll reveal animations on all sections
- [ ] Full mobile responsiveness (320px → 1440px)
- [ ] Image optimization
- [ ] Deploy to Vercel / Netlify

---

## 🎨 Brand Identity

### Design Direction
**"Modern Executive"** — The intersection of a high-end consulting firm and a cutting-edge SaaS product. Think sharp edges, generous whitespace, bold oversized type, and a single electric accent color that commands attention. Clean, confident, and conversion-focused.

### Core Inspiration
Inspired by modern fintech UI — card-based layouts, large bold headlines with colored keyword highlights, dark UI panels on light backgrounds, floating element decorations, and pill-shaped tag labels.

---

## 🎨 Color Palette

### Primary Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Pure White** | `#FFFFFF` | Base background, cards, nav |
| **Off White** | `#F5F5F0` | Alternate section backgrounds |
| **Obsidian** | `#0D0D0D` | Primary headings, dark sections |
| **Dark Slate** | `#1A1A2E` | Footer, dark UI panels |
| **Mid Gray** | `#6B7280` | Body text, descriptions |
| **Light Gray** | `#E5E7EB` | Borders, dividers, card strokes |

### Accent Colors

| Name | Hex | Usage |
|------|-----|-------|
| **Lime Green** | `#84CC16` | Primary CTA buttons, keyword highlights |
| **Electric Lime** | `#A3E635` | Hover states, glows, icon backgrounds |
| **Deep Lime** | `#4D7C0F` | Active states, pressed buttons |
| **Lime Tint** | `#F7FEE7` | Soft accent backgrounds, tag pills |

### CSS Variables
```css
:root {
  /* Backgrounds */
  --bg-white:      #FFFFFF;
  --bg-offwhite:   #F5F5F0;
  --bg-dark:       #0D0D0D;
  --bg-panel:      #1A1A2E;

  /* Text */
  --text-primary:  #0D0D0D;
  --text-body:     #6B7280;
  --text-light:    #9CA3AF;
  --text-white:    #FFFFFF;

  /* Accents */
  --accent-lime:        #84CC16;
  --accent-lime-bright: #A3E635;
  --accent-lime-deep:   #4D7C0F;
  --accent-lime-tint:   #F7FEE7;

  /* UI */
  --border:        #E5E7EB;
  --border-dark:   rgba(255,255,255,0.08);
  --shadow-sm:     0 1px 3px rgba(0,0,0,0.08);
  --shadow-md:     0 8px 24px rgba(0,0,0,0.10);
  --shadow-lg:     0 20px 48px rgba(0,0,0,0.14);
  --shadow-lime:   0 8px 28px rgba(132,204,22,0.30);

  /* Layout */
  --radius-sm:     6px;
  --radius-md:     12px;
  --radius-lg:     20px;
  --radius-pill:   999px;
  --max-width:     1200px;
  --section-pad:   110px 6%;

  /* Typography */
  --font-display: 'Syne', sans-serif;
  --font-body:    'Inter', sans-serif;
}
```

---

## ✍️ Typography

### Font Pairing

| Role | Font | Weights | Usage |
|------|------|---------|-------|
| **Display / Headings** | `Syne` | 700, 800 | Hero text, section titles, card headings |
| **Body / UI** | `Inter` | 400, 500, 600 | Paragraphs, labels, buttons, nav links |

### Scale

| Element | Size | Weight | Font |
|---------|------|--------|------|
| Hero H1 | `clamp(3rem, 6vw, 5.5rem)` | 800 | Syne |
| Section H2 | `clamp(2rem, 4vw, 3.2rem)` | 700 | Syne |
| Card H3 | `1.25rem` | 700 | Syne |
| Body | `1rem` | 400 | Inter |
| Small / Label | `0.78rem` | 600 | Inter |
| Tag / Pill | `0.72rem` | 600 | Inter |

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Inter:wght@400;500;600&display=swap" rel="stylesheet" />
```

---

## 🧩 Component Architecture

```
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Fixed nav, scroll shrink, mobile hamburger
│   │   ├── Navbar.css
│   │   ├── Hero.jsx          # Headline, CTAs, floating stats card
│   │   ├── Hero.css
│   │   ├── TrustedBy.jsx     # Logo bar / social proof
│   │   ├── TrustedBy.css
│   │   ├── PainPoints.jsx    # 3 problem cards
│   │   ├── PainPoints.css
│   │   ├── Services.jsx      # 3 service cards with hover
│   │   ├── Services.css
│   │   ├── Process.jsx       # 3-step dark section
│   │   ├── Process.css
│   │   ├── Testimonials.jsx  # Review cards with metric badges
│   │   ├── Testimonials.css
│   │   ├── About.jsx         # Split layout, founder image
│   │   ├── About.css
│   │   ├── Contact.jsx       # Form + contact info
│   │   ├── Contact.css
│   │   ├── Footer.jsx        # 4-col links + copyright
│   │   └── Footer.css
│   ├── hooks/
│   │   └── useInView.js      # IntersectionObserver scroll reveal
│   ├── styles/
│   │   └── index.css         # CSS variables + global reset
│   ├── App.jsx               # Root component, assembles all sections
│   └── main.jsx              # React DOM entry point
├── index.html                # Google Fonts, meta tags
├── vite.config.js
└── package.json
```

---

## 🖼️ Brand Assets Required

```
Brand Assets/
├── ClientLogos/
│   ├── logo-1.svg    (fake company logo)
│   ├── logo-2.svg
│   ├── logo-3.svg
│   ├── logo-4.svg
│   └── logo-5.svg
├── Founder.jpeg      (professional headshot)
├── Person1.jpeg      (testimonial avatar)
├── Person2.jpeg      (testimonial avatar)
├── Person3.jpeg      (testimonial avatar)
└── GM-logo.png       (GrowthMatrix brand logo)
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js v18+
- npm v9+

### Install & Run
```bash
# Clone the repo
git clone https://github.com/MSubham06/GrowthMatrix.git
cd GrowthMatrix

# Go into frontend
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
# → http://localhost:5173
```

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| `react` | ^19 | UI framework |
| `react-dom` | ^19 | DOM rendering |
| `vite` | ^6 | Build tool & dev server |
| `framer-motion` | ^11 | Scroll animations |
| `lucide-react` | ^0.383 | Icon library |

---

## 🌐 Deployment

Recommended: **Vercel** (zero config with Vite)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy from /frontend
vercel --prod
```

Or connect the GitHub repo directly on **vercel.com** → auto-deploys on every push to `main`.

---

## 🔧 Git & GitHub

### SSH Setup (Permanent Auth)
```bash
# Generate SSH key
ssh-keygen -t ed25519 -C "your@email.com"

# Copy public key → add to github.com/settings/keys
cat ~/.ssh/id_ed25519.pub

# Set remote to SSH
git remote set-url origin git@github.com:MSubham06/GrowthMatrix.git

# Verify
ssh -T git@github.com
```

### Daily Workflow
```bash
git add .
git commit -m "feat: add Hero component"
git push
```

---

*GrowthMatrix — Built to convert. Designed to impress.*
