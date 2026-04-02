# GrowthMatrix

A demo consulting website built to showcase web development services to potential clients. GrowthMatrix is a fully-designed landing page for business consultants — built with React, featuring the "Executive Look" brand theme.

---

## 📋 Development Checklist

### Phase 1: Planning & Branding
- [X] Finalize Demo Name : GrowthMatrix
- [X] Lock in Color Palette : Charcoal & Gold
- [X] Select Fonts (Bold Serif for headings, clean Sans-Serif for body text)
- [X] Gather high-quality stock images and placeholder company logos

### Phase 2: Copywriting & Content
- [X] **Hero Section:** "Turn Your Business Into a Growth Machine" — subheadline + dual CTA ("Book a Free Strategy Call →" and "View Case Studies")
- [X] **Pain Points:** 3 business problems defined — Revenue Plateaus, Operational Chaos, No Clear Strategy
- [X] **Services:** 3 core services outlined — Revenue Architecture, Operational Excellence, Executive Advisory
- [X] **The Process:** 3-step framework — Deep Diagnosis (Wk 1–2), Strategic Blueprint (Wk 3–4), Execute & Scale (Wk 5–12)
- [X] **Testimonials:** 3 dummy reviews with metrics — Sarah Chen (+140% ARR), Marcus Reid (3.2× ROI), Priya Anand ($2.4M pipeline)

### Phase 3: Project Setup & Architecture
- [ ] Initialize React + Vite frontend environment
- [ ] Configure CSS variables (design tokens already defined — see below)
- [ ] Install & configure Framer Motion for animations
- [ ] ~~Initialize Node/Express server and MongoDB connection~~ → Replaced with lightweight contact form via Resend/Nodemailer (no DB needed for a demo)

### Phase 4: Development & Layout
- [ ] Build Navbar (Logo, Links, highlighted "Book a Call" CTA)
- [ ] Build Hero Section
- [ ] Build Social Proof Bar ("Trusted By" client logo banner)
- [ ] Build Pain Points Section (3-column grid)
- [ ] Build Services Grid (3 cards with hover effects)
- [ ] Build Process Timeline (3-step, dark background)
- [ ] Build Testimonials Section (3 cards with metrics)
- [ ] Build About the Consultant Section (headshot + stats)
- [ ] Build Contact / Booking Section (custom form + Calendly embed option)
- [ ] Build Footer

### Phase 5: Final Polish 
- [ ] Ensure 100% mobile responsiveness across all sections
- [ ] Optimize images and assets for fast load speeds
- [ ] Deploy to production (Vercel recommended)

---

## 📝 Phase 2 — Full Copywriting Reference

### Hero Section
| Element | Copy |
|---|---|
| Headline | Turn Your Business Into a **Growth Machine** |
| Subheadline | We partner with founders and executives to build scalable systems, unlock hidden revenue, and turn strategic clarity into compounding results. |
| Primary CTA | Book a Free Strategy Call → |
| Secondary CTA | View Case Studies |

---

### Pain Points

**1. Revenue Plateaus**
You've hit a ceiling. Growth has stalled and every tactic you try produces diminishing returns. You know something structural needs to change.

**2. Operational Chaos**
Your team is reactive, not strategic. Processes are tribal knowledge, bottlenecks multiply, and you're spending time fighting fires instead of building.

**3. No Clear Strategy**
You have competing priorities, scattered initiatives, and no unified roadmap. Activity is high, but true progress feels elusive.

---

### Services

**01 — Revenue Architecture** *(Tag: Strategy)*
We audit your full revenue engine — pricing, sales motion, customer LTV — and rebuild it for scale. Expect a clear growth roadmap within 30 days.

**02 — Operational Excellence** *(Tag: Systems)*
From team structure to process design, we eliminate the friction killing your margins and install systems that give you leverage.

**03 — Executive Advisory** *(Tag: Leadership)*
Ongoing access to a senior consultant who acts as a strategic partner — in your corner for board prep, investor conversations, and key decisions.

---

### The Process

| Step | Title | Duration | Description |
|---|---|---|---|
| 1 | Deep Diagnosis | Week 1–2 | Structured audit of your revenue, operations, and team. We identify the highest-leverage constraints blocking your growth. |
| 2 | Strategic Blueprint | Week 3–4 | A custom roadmap with prioritized initiatives, success metrics, and execution milestones. No generic playbooks. |
| 3 | Execute & Scale | Week 5–12 | We work alongside your team to implement changes, measure outcomes, and adapt in real time until results compound. |

---

### Testimonials

**Sarah Chen — CEO, Nexova** | Metric: **+140% ARR**
> "GrowthMatrix completely reframed how we thought about our revenue model. Within 8 months we grew ARR by 140% and finally built a team that doesn't need me in every decision."

**Marcus Reid — Founder, Elevara Group** | Metric: **3.2× ROI in 60 days**
> "I came in skeptical of consultants. I left with a clear operational playbook and a team that actually executes. The ROI paid for the engagement in 60 days."

**Priya Anand — VP Strategy, Strata** | Metric: **$2.4M in new pipeline**
> "What separates GrowthMatrix is they stay in the room. They don't hand you a deck and disappear — they help you implement, adapt, and actually win."

---

### About the Consultant

**James Mitchell — Senior Business Strategist**
Former McKinsey principal and operator with $400M+ in deal and advisory experience. James has worked with 80+ founders across SaaS, services, and consumer businesses to unlock growth that actually sticks. He's not interested in frameworks for their own sake — only in building businesses that outlast trends.

| Stat | Value |
|---|---|
| Companies Advised | 80+ |
| Value Created | $400M+ |
| Client Retention | 94% |
| Years Experience | 12+ |

---

## 🎨 Brand Identity & Color Palette

The **GrowthMatrix** demo utilizes the **"Executive Look"** theme — designed to convey trust, authority, and premium consulting services.

### Color Tokens

| Role | Name | Hex | Usage |
|---|---|---|---|
| Base bg | Crisp White | `#FFFFFF` | Primary section backgrounds |
| Alt bg | Cream / Off-White | `#EFE8CE` | Alternate section backgrounds, card fills |
| Dark bg | Charcoal Black | `#42474A` | Hero, Process section, Footer |
| Primary text | Charcoal Black | `#42474A` | Headings |
| Secondary text | Dark Slate | `#3A4A5A` | Body copy, subtitles |
| Primary CTA | Bronze / Orange | `#E59145` | CTA buttons, links, highlights |
| Accent | Soft Gold | `#F2C95B` | Icons, hover states, secondary accents |

### CSS Variables (index.css)
```css
:root {
  --bg-white: #FFFFFF;
  --bg-cream: #EFE8CE;
  --text-charcoal: #42474A;
  --text-slate: #3A4A5A;
  --accent-bronze: #E59145;
  --accent-gold: #F2C95B;
}
```

### Typography

| Role | Font | Weights | Usage |
|---|---|---|---|
| Headings | Playfair Display (Serif) | 600, 700, 800 | Hero, section titles, strong CTAs |
| Body | Inter (Sans-Serif) | 300, 400, 500, 600 | Paragraphs, labels, UI elements |

### Google Fonts Import
```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
```

---

## 🖼️ Required Media Assets

- [X] **1× Hero Background** — Dark/charcoal section with gold grid texture (generated in-code — no image file needed)
- [X] **4–5× Client Logos** — Placeholder text logos: Nexova, Elevara, Kronfield, Strata, Velmont
- [ ] **1× Professional Headshot** — Replace the "JM" avatar placeholder in the About section
- [ ] **2–3× Testimonial Avatars** — Replace initials (SC, MR, PA) with real portrait photos

---

## 🛠️ Tech Stack (Phase 3 Plan)

| Layer | Tool | Notes |
|---|---|---|
| Frontend | React + Vite | Fast dev server, optimized build |
| Styling | CSS Variables + custom CSS | No framework needed — design system is hand-crafted |
| Animations | Framer Motion | Replaces the custom `useInView` hooks in the artifact |
| Forms | React Hook Form + Zod | Validation on the contact form |
| Email | Resend or Nodemailer | Serverless function — no DB required |
| Deployment | Vercel | Free tier, instant deploys from GitHub |

---

## 📁 Recommended Project Structure (Phase 3)

```
growthmatrix/
├── public/
│   └── assets/          # Headshot, logos
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── TrustedBy.jsx
│   │   ├── PainPoints.jsx
│   │   ├── Services.jsx
│   │   ├── Process.jsx
│   │   ├── Testimonials.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   └── useInView.js
│   ├── styles/
│   │   └── index.css    # CSS variables + global resets
│   ├── App.jsx
│   └── main.jsx
├── api/
│   └── contact.js       # Serverless email handler (Vercel function)
├── index.html
├── vite.config.js
└── package.json
```
