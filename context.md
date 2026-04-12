# Portfolio Website

## What This Is
A single-page professional portfolio website for an entry-level cybersecurity candidate, designed to present skills, projects, education, and contact information in a recruiter-friendly format.

## Who It Is For
Primary users are recruiters, hiring managers, and technical interviewers. Secondary users include peers and collaborators reviewing project work.

## Tech Stack
- Language + version: TypeScript 5.x
- Framework: React 18 + Vite
- Database: None
- Infrastructure: Static frontend build (`dist/`)
- Key third-party services: EmailJS (contact form), Lucide React icons, Framer Motion

## Architecture Overview
The app is a single-page React site composed of section panels orchestrated by `src/App.tsx`. Navigation scrolls to panel sections, and shared visual primitives/styles are defined in `src/index.css` and reusable components under `src/components`.

## How to Run Locally
1. Install Node.js (recommended modern LTS).
2. From project root, install dependencies: `npm install`
3. Start dev server: `npm run dev`
4. Open the local URL shown by Vite.

## How to Run Tests
No automated test suite is currently configured. Use build verification:
- `npm run build`

## Key Files and Folders
| Path | Purpose |
|------|---------|
| src/App.tsx | Section orchestration and active section behavior |
| src/panels/ | Main content panels (home, profile, skills, services, projects, contact) |
| src/components/ | Shared UI components (navbar, footer, buttons, inputs, certifications) |
| src/index.css | Global design tokens and shared style utilities |
| public/ | Static assets (profile image, certification/project logos, resume PDF) |

## Current Status
Active development. Portfolio has been refined for a professional entry-level cybersecurity presentation, with dependency security remediation completed.

## Known Issues or Constraints
- No automated test suite is currently configured; validation relies on build checks and manual QA.
- Final visual QA across mobile breakpoints should continue as content and styling evolve.

## Decisions Made and Why
- Single-page section architecture retained for fast recruiter scanning and simple navigation.
- Dark theme retained, with reduced decorative intensity to improve readability and professionalism.
- Reused the existing component/styling system to keep changes minimal and maintainable.
- Removed unused `react-router-dom` dependency to reduce runtime attack surface and simplify the dependency graph.
