// Design tokens shared by every section: one place to change fonts, gradients and the accent color.

export const POPPINS = '"Poppins", sans-serif';

// Original brand blue, used for icons, bars and highlights (80deg, cyan end on the right)
export const GRADIENT = 'linear-gradient(80deg, rgb(0,48,204) 0%, rgb(0,164,219) 100%)';
// Full-width blue sections; the start is darkened so white text keeps its contrast
export const BLUE_BG = 'linear-gradient(134deg, #0079BE 0%, #00269E 100%)';
// Closing call to action, with the lighter cyan start from the reference
export const CTA_BG = 'linear-gradient(134deg, #00A4DB 0%, #00269E 100%)';

export const ACCENT = '#00E0D8';
export const AMBER = '#FFB020';

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
