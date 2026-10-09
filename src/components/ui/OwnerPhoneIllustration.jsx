/**
 * Original flat illustration: the owner checks a sale on a phone while the catalog is already loaded.
 * Inline SVG, no external assets or licences.
 */
const AMBER = '#FFB020';

const Chip = ({ x, y, w, color, children }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect width={w} height="34" rx="17" fill="#fff" />
    <circle cx="19" cy="17" r="9" fill={color} />
    <path d="M14.5 17.3l3.2 3.2 5.8-6.3" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="36" y="22" fontSize="13" fontWeight="600" fill="#0F172A" fontFamily="Poppins, sans-serif">{children}</text>
  </g>
);

const OwnerPhoneIllustration = ({ label }) => (
  <svg viewBox="0 0 420 420" role="img" aria-label={label} style={{ width: '100%', height: 'auto', display: 'block' }}>
    <circle cx="210" cy="215" r="180" fill="#fff" opacity="0.1" />
    <ellipse cx="210" cy="388" rx="150" ry="16" fill="#001A66" opacity="0.28" />

    {/* floating status chips */}
    <Chip x={14} y={86} w={176} color="#10B981">Catálogo cargado</Chip>
    <Chip x={252} y={40} w={152} color={AMBER}>Venta registrada</Chip>
    <g transform="translate(300 300)">
      <circle r="26" fill={AMBER} />
      <circle r="19" fill="none" stroke="#E69500" strokeWidth="3" />
      <text y="8" textAnchor="middle" fontSize="22" fontWeight="700" fill="#7A4B00" fontFamily="Poppins, sans-serif">$</text>
    </g>

    {/* owner */}
    <g transform="translate(-72 8)">
      <rect x="262" y="340" width="22" height="46" rx="8" fill="#2E2A7A" />
      <rect x="292" y="340" width="22" height="46" rx="8" fill="#2E2A7A" />
      <path d="M254 380 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <path d="M286 380 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <rect x="244" y="232" width="88" height="120" rx="30" fill="#FF6B8A" />
      <rect x="270" y="196" width="36" height="46" rx="14" fill="#F2B994" />
      <circle cx="288" cy="190" r="32" fill="#F5C6A0" />
      <path d="M256 190 a32 32 0 0 1 64 -4 c-10 -8 -26 -14 -44 -8 c-8 3 -14 8 -20 12 z" fill="#2B2350" />
      <path d="M268 193 q7 -9 14 0" stroke="#2B2350" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M294 193 q7 -9 14 0" stroke="#2B2350" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="268" cy="203" r="5" fill="#FF8FA3" opacity="0.55" />
      <circle cx="308" cy="203" r="5" fill="#FF8FA3" opacity="0.55" />
      <path d="M272 203 q16 20 32 0 z" fill="#B4392F" />
      <path d="M277 203 h22 v3 q-11 5 -22 0 z" fill="#fff" />
      {/* left arm relaxed */}
      <path d="M252 256 q-22 40 -8 78" stroke="#FF6B8A" strokeWidth="22" fill="none" strokeLinecap="round" />
      <circle cx="244" cy="336" r="10" fill="#F5C6A0" />
      {/* right arm raises the phone */}
      <path d="M326 262 q46 4 44 -34" stroke="#FF6B8A" strokeWidth="22" fill="none" strokeLinecap="round" />
      <rect x="352" y="168" width="44" height="76" rx="8" fill="#0F172A" />
      <rect x="357" y="175" width="34" height="62" rx="4" fill="#fff" />
      <rect x="361" y="180" width="18" height="4" rx="2" fill="#CBD5E1" />
      <polyline points="361,226 369,214 375,220 386,203" fill="none" stroke="#2563EB" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="372" cy="240" r="10" fill="#F5C6A0" />
    </g>
  </svg>
);

export default OwnerPhoneIllustration;
