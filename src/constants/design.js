// Design tokens shared by every section: one place to change fonts, gradients and the accent color.

export const POPPINS = '"Poppins", sans-serif';

// Navy-based gradient (app navy to a lighter navy blue): icon circles and accents
export const GRADIENT = 'linear-gradient(135deg, #0B1B4D 0%, #1E3A8A 100%)';
// Full-width navy sections
export const BLUE_BG = 'linear-gradient(135deg, #0B1B4D 0%, #1E3A8A 100%)';
// Closing call to action and highlighted cards
export const CTA_BG = 'linear-gradient(135deg, #1E3A8A 0%, #0B1B4D 100%)';

export const ACCENT = '#00E0D8';
export const AMBER = '#FFB020';

// Navy used by the app for action controls, table headers and text over amber.
// Brought into the landing to stay in sync with the dashboard (pos-multi-store).
export const NAVY = '#0B1B4D';
// Muted light surface matching the app's new background (reduces visual fatigue).
// Use it for light sections; keep cards/panels white as highlighted surfaces.
export const SURFACE_MUTED = '#E8EEF6';
// Raised surfaces (cards, panels, inputs) and their border and shadow, same as the app's background.paper / border.
export const SURFACE = '#FBFCFE';
export const BORDER = '#DDE3EC';
export const SHADOW_CARD = '0 8px 24px rgba(15,23,42,0.12)';

// Pill button base (padding is set where it is used) and its amber primary variant
export const pillSx = {
  fontFamily: POPPINS,
  fontWeight: 500,
  fontSize: 16,
  borderRadius: '45px',
  whiteSpace: 'nowrap',
};

export const amberSx = {
  bgcolor: AMBER,
  color: '#0B1B4D',
  boxShadow: '0 8px 24px rgba(255,176,32,0.35)',
  '&:hover': { bgcolor: '#F59E0B' },
};

// Navigation bar: solid app navy; the footer uses the app sidebar gradient
export const NAV_BG = '#0B1B4D';
export const FOOTER_BG = 'linear-gradient(180deg, #0B1B4D 0%, #08143A 100%)';
// Emphasis color on light surfaces (eyebrows, links): the same navy as the rest of the interface
export const PRIMARY = '#0B1B4D';
