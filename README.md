# VyomGarud — UAV Systems Landing Page

A modern, responsive landing page for VyomGarud — a UAV/drone systems company with a military-grade, professional identity. Dark, confident, and persuasive: high reliability, precision engineering, and advanced autonomy.

## Stack
- Next.js (App Router)
- Tailwind CSS (v4 inline theme)
- Framer Motion (subtle animations)
- Fonts: Montserrat (headings), Inter (body) via `next/font`

## Getting Started

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Design Notes
- Aesthetic: dark, modern, slightly military/futuristic.
- Colors: charcoal `#0f1115`, white, brand orange `#ff7b00`.
- Sections:
  - Hero with bold visual (grid/crosshair overlay), tagline, CTAs.
  - About: short mission statement.
  - Capabilities: 4 product cards (Autonomy, ISR, GCS, Secure Comms).
  - Highlights: 3 concise features.
  - Contact/Footer: simple form + mailto link.
- Animations: subtle fades/scale using Framer Motion; hover polish on cards.

## Screenshots / GIF
- Take a screenshot of the landing page in the browser.
- Save it under `public/screenshot.png` and reference it below.

## Submission Checklist
- GitHub repository link
- README with setup and design notes (this file)
- Screenshot or GIF (`public/screenshot.png`)
- (Optional) Live demo link (Vercel recommended)
- Progressive commit history

## Deploy (Vercel)
1. Create a new Vercel project and import this repo.
2. Framework preset: Next.js.
3. Deploy — a preview URL will be generated.

## Repo & Commits
Initialize git and push to GitHub:

```bash
git init
git add -A
git commit -m "feat: scaffold landing page and brand theme"
git branch -M main
git remote add origin <YOUR_GITHUB_REPO_URL>
git push -u origin main
```
