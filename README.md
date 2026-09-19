"# Multi-Project Website Redesigns Repository

This repository contains modern, responsive, high-performance UI/UX redesigns for two distinct web platforms, hosted independently on Cloudflare Workers:

It also contains a standalone vanilla HTML/CSS/JS redesign of TekMindz in `tekmindz-redesign`.

---

## 1. Yuva Trip Redesign (`ytrip-redesign`)
- **Directory**: [`/ytrip-redesign`](./ytrip-redesign)
- **Original Site**: [https://www.ytrip.in/](https://www.ytrip.in/)
- **Original Source Mirror**: [`/ytrip-site`](./ytrip-site)
- **Live Cloudflare Deployment**: [https://ytrip-redesign.gaurav-motivation.workers.dev](https://ytrip-redesign.gaurav-motivation.workers.dev)
- **Tech Stack**: React 19 + Vite + Cloudflare Workers
- **Features**: Responsive flight/hotel booking widgets, special offers, benefits, client testimonials, footer support, and search-engine optimization (Sitemap, Robots.txt, JSON-LD, Open Graph).

---

## 2. Apptology Redesign (`apptology-redesign`)
- **Directory**: [`/apptology-redesign`](./apptology-redesign)
- **Original Site**: [https://apptology.com/](https://apptology.com/)
- **Live Cloudflare Deployment**: [https://apptology-redesign.gaurav-motivation.workers.dev](https://apptology-redesign.gaurav-motivation.workers.dev)
- **Tech Stack**: React 19 + Vite + Cloudflare Workers
- **Features**: Premium app agency design, custom hero section, core service capabilities, featured case studies, agile product lifecycle timeline, client reviews, thought leadership blog teasers, and structured SEO metadata.

---

## Workspace Structure
```
Mirror/
├── ytrip-redesign/       # Yuva Trip redesign project
├── apptology-redesign/   # Apptology redesign project
├── tekmindz-redesign/    # TekMindz multi-page redesign
├── ytrip-site/           # Original YTrip local mirror archive
└── README.md             # Repository documentation
```

## Running Locally

To run either redesign project locally:

```bash
# Yuva Trip Redesign
cd ytrip-redesign
npm install
npm run dev

# Apptology Redesign
cd apptology-redesign
npm install
npm run dev

# TekMindz Redesign
cd tekmindz-redesign
npm install
npm run dev
```

" 
