# Portfolio Professionalization Plan

## Scope
Make the existing portfolio more professional and recruiter-friendly for entry-level cybersecurity roles, without changing the core stack or section architecture.

## Checklist
- [x] Create and maintain `context.md` for current project state
- [x] Refine hero and profile sections for concise, professional messaging
- [x] Simplify skills and services sections for readability and realistic positioning
- [x] Standardize projects and contact sections (clear CTA semantics + fallback behavior)
- [x] Polish shared styles, navigation tone, and footer consistency
- [x] Verify with build, run, and usability checks

## Step Notes
- Use targeted edits; avoid full rewrites.
- Keep dark theme but reduce visual noise.
- Preserve accessibility and mobile usability.

## Review (to fill after implementation)
- Summary of changes:
  - Refined hero/profile messaging and CTA hierarchy for recruiter-first scanning.
  - Simplified skills/services into clearer entry-level contribution language.
  - Standardized projects section data model and CTA behavior (`Live Demo` vs `Source Code`).
  - Improved contact fallback messaging and reduced global visual noise.
  - Added `context.md` with current architecture, run instructions, and constraints.
- Verification commands run:
  - `npm --prefix "/d/website" run build` (pass)
  - `npm --prefix "/d/website" audit --audit-level=high` (pass, 0 vulnerabilities)
  - `npm --prefix "/d/website" run dev -- --host 127.0.0.1 --port 4181` (server started)
  - `curl -I "http://127.0.0.1:4181"` (HTTP 200)
  - `grep` check for `react-router-dom|react-router` in `src/` (no usage found)
- Results:
  - Build succeeds with no TypeScript/Vite compile failures after dependency remediation.
  - Runtime endpoint reachable during smoke verification.
  - High-severity audit issues resolved.
  - Unused `react-router-dom` removed from dependencies.
- Follow-ups (if any):
  - Perform in-browser visual QA pass for final spacing/motion polish across mobile breakpoints.
