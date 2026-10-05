# SmartVenta Design System

**Date:** 2026-10-04  
**Status:** Active  
**Pattern:** Hero + Features + CTA  
**Style:** Flat Minimal (no glassmorphism)

## Colors

| Role | Value | Variable |
|------|-------|----------|
| Primary | `#2563EB` | `--color-primary` |
| On Primary | `#FFFFFF` | `--color-on-primary` |
| Secondary | `#3B82F6` | `--color-secondary` |
| Accent/CTA | `#059669` | `--color-accent` |
| On Accent | `#FFFFFF` | `--color-on-accent` |
| Background | `#F8FAFC` | `--color-background` |
| Surface | `#FFFFFF` | `--color-surface` |
| Foreground | `#1E293B` | `--color-foreground` |
| Muted Foreground | `#475569` | `--color-muted-fg` |
| Border | `#E2E8F0` | `--color-border` |
| Destructive | `#DC2626` | `--color-destructive` |
| Ring/Focus | `#2563EB` | `--color-ring` |

## Typography

**Font:** Plus Jakarta Sans (Google Fonts)  
**Weights:** 300, 400, 500, 600, 700

**Scale:**
- H1: 3.6rem / 800 / -0.035em
- H2: 2.8rem / 800 / -0.03em
- H3: 2rem / 700 / -0.025em
- Body: 1rem / 400 / 1.7
- Label: 0.875rem / 600

## Effects

- **Shadow:** `0 1px 3px rgba(0,0,0,0.1), 0 1px 2px rgba(0,0,0,0.06)` (cards)
- **Border radius:** 12px (components), 16px (cards)
- **Transitions:** 150-300ms cubic-bezier(0.4, 0, 0.2, 1)
- **No blur, no glassmorphism**

## Spacing

4/8px grid. Scale: 4 8 12 16 24 32 48 64

## Checklist

- [ ] SVG icons only (Heroicons, Lucide)
- [ ] Contrast 4.5:1 normal text
- [ ] Focus rings 2-4px visible
- [ ] prefers-reduced-motion respected
- [ ] Touch targets ≥44×44px
- [ ] No horizontal scroll on mobile
- [ ] Responsive: 375/768/1024/1440px
