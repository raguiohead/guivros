# Security Review - guivros

Date: 2026-04-26
Scope: Next.js application code, configuration, and runtime dependencies.

## Fixed

### 1) Unsafe external link rendering in item description (Potential XSS/Open Redirect vector)
- Severity: High
- File: app/livro/[id]/page.tsx
- Risk:
  - Description text accepted HTML-like anchors and directly reused href values.
  - If content becomes user-controlled (or externally sourced) in the future, malicious protocols like javascript: could be injected.
- Fix applied:
  - Added URL validation with strict protocol allowlist (http/https only).
  - Invalid links are rendered as plain text label.

### 2) Reverse tabnabbing risk in WhatsApp flow
- Severity: Medium
- File: components/whatsapp-button.tsx
- Risk:
  - window.open with _blank without noopener/noreferrer can expose window.opener.
- Fix applied:
  - Added third argument noopener,noreferrer in window.open.

### 3) Missing hardening response headers
- Severity: Medium
- File: next.config.mjs
- Risk:
  - Browser-level protections were not explicitly configured.
- Fix applied:
  - Added global security headers:
    - X-Content-Type-Options: nosniff
    - X-Frame-Options: DENY
    - Referrer-Policy: strict-origin-when-cross-origin
    - Permissions-Policy: camera/microphone/geolocation/payment/usb/accelerometer/gyroscope disabled

## Findings Not Fully Remediated (Need dependency/vendor action)

### 4) Dependency advisory involving postcss bundled by next
- Severity: Moderate
- Evidence:
  - npm audit --omit=dev reports GHSA-qx2v-qp2m-jg93 via next internal postcss@8.4.31.
  - Installed versions:
    - next@16.2.4
    - project postcss@8.5.10
    - next internal postcss@8.4.31
- Notes:
  - This appears to be inherited from framework internal dependency chain.
  - Keep Next.js and analytics package updated; re-run audit after framework updates.

## Validation Performed

- Type/error check on changed files: OK
  - app/livro/[id]/page.tsx
  - components/whatsapp-button.tsx
  - next.config.mjs
  - components/thing-description.tsx
  - app/layout.tsx
  - eslint.config.mjs
- Build:
  - next build completed successfully.
- Lint:
  - ESLint is now installed and wired.
  - Current repository has pre-existing lint errors (mostly react-hooks purity/effect rules) that should be fixed incrementally.

## Recommended Next Hardening Steps

1. Add Content Security Policy (CSP) carefully (compatible with current inline script and analytics).  [DONE]
  - Added CSP header in next.config.mjs with directives for script/style/img/connect/font and anti-clickjacking.
  - Moved inline theme script to public/theme-init.js so script-src can avoid unsafe-inline.
2. Install and wire ESLint in devDependencies to keep security regressions visible in CI.  [DONE]
  - Installed eslint, eslint-config-next, and @eslint/eslintrc.
  - Added eslint.config.mjs (flat config) with Next core-web-vitals and TypeScript rules.
3. Add automated checks in CI:  [DONE]
  - npm audit --omit=dev
  - SAST (Semgrep/CodeQL)
  - Added workflows:
    - .github/workflows/security-audit.yml
    - .github/workflows/sast.yml
4. If descriptions become dynamic/user-controlled, move to explicit markdown rendering with sanitization (allowlisted tags/attributes).  [DONE]
  - Added safe markdown renderer (react-markdown + rehype-sanitize) in components/thing-description.tsx.
  - Replaced ad-hoc HTML link parsing in app/livro/[id]/page.tsx.
  - Converted inline HTML anchors in lib/things.ts descriptions to markdown links.
