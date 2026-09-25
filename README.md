JARVIS CRM — Standalone Landing Page

A standalone Vite + React marketing experience for the JARVIS CRM / Lead Intelligence Radar product.

## Independence

This project is intentionally isolated from the actual CRM application. It has no imports, API dependencies, database dependencies, shared components, or runtime coupling to the CRM codebase. All CRM panels are presentation-only mockups.

## Experience

- Premium dark intelligence-console visual language
- Oversized editorial typography inspired by the supplied reference, without copying it
- Animated executive radar with signal labels
- Floating hot-lead and follow-up alerts
- Interactive JARVIS command surface with quick prompts
- Mouse-follow intelligence glow on desktop
- Scroll-triggered reveal animations
- Sticky/glass navigation after scrolling
- Interactive capability navigator covering 8 major product areas
- Global company + people intelligence
- Controlled registry-to-tenant data pull
- CSV/XLSX ingestion, mapping, validation and deduplication
- Tenant CRM and Kanban pipeline
- 360-degree lead workflow positioning
- Role-aware phone/email masking
- Call, WhatsApp and Gmail action concepts
- Telecaller cockpit positioning
- Team, assignments and RBAC controls
- Platform audit trail and anomaly/security signals
- Interactive product-tour modal
- Responsive layouts for tablet and mobile
- Reduced-motion accessibility handling
- Bottom system-status indicator

## Run locally

```bash
npm install
npm run dev
```

Then open the Vite URL shown in the terminal, normally `http://localhost:5173`.

## Production build

```bash
npm run build
npm run preview
```

## Notes

The landing page intentionally uses mock product data and visual UI. It does not send email, make calls, query the CRM database, or call the CRM backend.
