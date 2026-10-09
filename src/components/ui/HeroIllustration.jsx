/**
 * Original flat illustration: a happy owner who sees 3 stores and 2 warehouses at once,
 * with arrows for transfers (warehouse to store, big warehouse to small, store to store).
 * Inline SVG, no external assets or licences.
 */
export const YELLOW = '#FDE047';
export const GREEN = '#6EE7B7';
const LABEL = { fontSize: 12, fontWeight: 600, fill: '#fff', fontFamily: 'Poppins, sans-serif', textAnchor: 'middle' };

export const Store = ({ x, y, color, label, chip, labelColor = '#fff' }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="0" y="34" width="104" height="76" rx="6" fill="#fff" />
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} d={`M${i * 20.8} 12 h20.8 v26 a10.4 10.4 0 0 1 -20.8 0 z`} fill={i % 2 ? '#fff' : color} />
    ))}
    <rect x="0" y="4" width="104" height="10" rx="4" fill={color} />
    <rect x="14" y="64" width="32" height="46" rx="3" fill="#CBD5E1" />
    <rect x="58" y="62" width="32" height="26" rx="3" fill="#BFDBFE" />
    {chip && (
      <g transform="translate(52 -26)">
        <rect x="-36" y="-4" width="72" height="26" rx="13" fill="#fff" />
        <circle cx="-22" cy="9" r="7" fill="#10B981" />
        <path d="M-25.5 9.2l2.4 2.4 4.4-4.8" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        <text x="-10" y="13" fontSize="11" fontWeight="600" fill="#0F172A" fontFamily="Poppins, sans-serif">{chip}</text>
      </g>
    )}
    <text x="52" y="128" {...LABEL} fill={labelColor}>{label}</text>
  </g>
);

export const Warehouse = ({ x, y, w, h, label, labelColor = '#fff' }) => {
  const doorW = w * 0.46;
  const doorH = h * 0.7;
  const crate = Math.max(14, h * 0.2);
  return (
    <g transform={`translate(${x} ${y})`}>
      <path d={`M-8 28 L${w / 2} 0 L${w + 8} 28 Z`} fill="#1E3A8A" />
      <rect x="0" y="26" width={w} height={h} fill="#fff" />
      <rect x={(w - doorW) / 2} y={26 + h - doorH} width={doorW} height={doorH} rx="3" fill="#CBD5E1" />
      {[1, 2, 3, 4].map((i) => (
        <line key={i} x1={(w - doorW) / 2} x2={(w + doorW) / 2} y1={26 + h - doorH + (doorH / 5) * i} y2={26 + h - doorH + (doorH / 5) * i} stroke="#94A3B8" strokeWidth="2" />
      ))}
      <rect x="8" y={26 + h - crate} width={crate} height={crate} rx="2" fill="#F59E0B" />
      <rect x={w - crate - 8} y={26 + h - crate} width={crate} height={crate} rx="2" fill="#FBBF24" />
      <text x={w / 2} y={26 + h + 18} {...LABEL} fill={labelColor}>{label}</text>
    </g>
  );
};

const HeroIllustration = ({ label }) => (
  <svg viewBox="0 0 640 540" role="img" aria-label={label} style={{ width: '100%', height: 'auto', display: 'block' }}>
    <defs>
      <marker id="hi-arr-y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill={YELLOW} />
      </marker>
      <marker id="hi-arr-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0 0 L10 5 L0 10 z" fill={GREEN} />
      </marker>
    </defs>

    <circle cx="320" cy="290" r="210" fill="#fff" opacity="0.07" />
    <ellipse cx="320" cy="500" rx="270" ry="30" fill="#fff" opacity="0.1" />

    {/* transfers */}
    <g fill="none" strokeWidth="3.5" strokeLinecap="round">
      <path d="M224 66 Q 340 8 458 66" stroke={YELLOW} markerEnd="url(#hi-arr-y)" />
      <path d="M150 156 Q 172 206 128 256" stroke={YELLOW} markerEnd="url(#hi-arr-y)" />
      <path d="M520 150 Q 500 204 516 256" stroke={YELLOW} markerEnd="url(#hi-arr-y)" />
      <path d="M134 306 Q 176 236 262 196" stroke={GREEN} markerStart="url(#hi-arr-g)" markerEnd="url(#hi-arr-g)" />
      <path d="M378 196 Q 456 226 508 306" stroke={GREEN} markerStart="url(#hi-arr-g)" markerEnd="url(#hi-arr-g)" />
    </g>

    <Warehouse x={24} y={14} w={190} h={84} label="Almacén central" />
    <Warehouse x={470} y={26} w={120} h={60} label="Almacén 2" />
    <Store x={24} y={258} color="#FACC15" label="Tienda 1" chip="+$4.2k" />
    <Store x={268} y={104} color="#A78BFA" label="Tienda 2" chip="+$3.1k" />
    <Store x={512} y={258} color="#34D399" label="Tienda 3" chip="+$2.4k" />

    {/* owner, happy and relaxed */}
    <g transform="translate(32 84)">
      <ellipse cx="290" cy="436" rx="86" ry="11" fill="#001A66" opacity="0.28" />
      <rect x="262" y="340" width="22" height="92" rx="8" fill="#2E2A7A" />
      <rect x="292" y="340" width="22" height="92" rx="8" fill="#2E2A7A" />
      <path d="M254 428 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <path d="M286 428 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <rect x="244" y="232" width="88" height="120" rx="30" fill="#FF6B8A" />
      <rect x="270" y="196" width="36" height="46" rx="14" fill="#F2B994" />
      <circle cx="288" cy="190" r="32" fill="#F5C6A0" />
      <path d="M256 190 a32 32 0 0 1 64 -4 c-10 -8 -26 -14 -44 -8 c-8 3 -14 8 -20 12 z" fill="#2B2350" />
      {/* closed happy eyes, blush, wide smile */}
      <path d="M268 193 q7 -9 14 0" stroke="#2B2350" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <path d="M294 193 q7 -9 14 0" stroke="#2B2350" strokeWidth="2.6" fill="none" strokeLinecap="round" />
      <circle cx="268" cy="203" r="5" fill="#FF8FA3" opacity="0.55" />
      <circle cx="308" cy="203" r="5" fill="#FF8FA3" opacity="0.55" />
      <path d="M272 203 q16 20 32 0 z" fill="#B4392F" />
      <path d="M277 203 h22 v3 q-11 5 -22 0 z" fill="#fff" />
      {/* left arm holds the tablet */}
      <path d="M252 256 q-34 40 -10 82" stroke="#FF6B8A" strokeWidth="22" fill="none" strokeLinecap="round" />
      <g transform="rotate(-6 276 330)">
        <rect x="218" y="292" width="116" height="80" rx="9" fill="#0F172A" />
        <rect x="225" y="299" width="102" height="66" rx="5" fill="#fff" />
        <polyline points="232,354 252,334 268,342 292,316 320,324" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <rect x="232" y="304" width="32" height="5" rx="2.5" fill="#CBD5E1" />
        <rect x="270" y="304" width="22" height="5" rx="2.5" fill="#BFDBFE" />
      </g>
      <circle cx="240" cy="338" r="10" fill="#F5C6A0" />
      {/* right arm: thumbs up */}
      <path d="M326 262 q46 6 42 -32" stroke="#FF6B8A" strokeWidth="22" fill="none" strokeLinecap="round" />
      <circle cx="368" cy="224" r="12" fill="#F5C6A0" />
      <rect x="363" y="202" width="10" height="18" rx="5" fill="#F5C6A0" />
    </g>

    {/* legend */}
    <g transform="translate(24 446)">
      <rect width="250" height="62" rx="14" fill="#fff" opacity="0.95" />
      <path d="M14 20 h30" stroke={YELLOW} strokeWidth="4" strokeLinecap="round" markerEnd="url(#hi-arr-y)" />
      <text x="58" y="24" fontSize="12" fontWeight="600" fill="#0F172A" fontFamily="Poppins, sans-serif">Almacén a tienda o almacén</text>
      <path d="M14 44 h30" stroke={GREEN} strokeWidth="4" strokeLinecap="round" markerStart="url(#hi-arr-g)" markerEnd="url(#hi-arr-g)" />
      <text x="58" y="48" fontSize="12" fontWeight="600" fill="#0F172A" fontFamily="Poppins, sans-serif">Entre tiendas</text>
    </g>

    <g transform="translate(590 490)">
      <circle r="24" fill="#FACC15" />
      <circle r="17" fill="none" stroke="#EAB308" strokeWidth="3" />
      <text y="7" textAnchor="middle" fontSize="20" fontWeight="700" fill="#A16207" fontFamily="Poppins, sans-serif">$</text>
    </g>
  </svg>
);

export default HeroIllustration;
