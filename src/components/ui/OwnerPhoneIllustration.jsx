'use client';

/**
 * Original flat illustration: the owner checks a sale on a phone while the inventory is already loaded.
 * Inline SVG, no external assets or licences.
 */
import { motion, useReducedMotion } from 'framer-motion';
import { AMBER } from '../../constants';

/** Pops in once, when scrolled into view, `delay` seconds later; static for reduced motion. */
const Pop = ({ delay, children }) => {
  const reduce = useReducedMotion();
  if (reduce) return <g>{children}</g>;
  return (
    <motion.g initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.3 }} transition={{ duration: 0.5, delay }}>
      {children}
    </motion.g>
  );
};

const Chip = ({ x, y, w, color, delay, children }) => (
  <g transform={`translate(${x} ${y})`}>
    <Pop delay={delay}>
    <rect width={w} height="34" rx="17" fill="#fff" />
    <circle cx="19" cy="17" r="9" fill={color} />
    <path d="M14.5 17.3l3.2 3.2 5.8-6.3" stroke="#fff" strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <text x="36" y="22" fontSize="13" fontWeight="600" fill="#0F172A" fontFamily="Poppins, sans-serif">{children}</text>
    </Pop>
  </g>
);

const OwnerPhoneIllustration = ({ label }) => (
  <svg viewBox="0 0 420 420" role="img" aria-label={label} style={{ width: '100%', height: 'auto', display: 'block' }}>
    <circle cx="210" cy="215" r="180" fill="#fff" opacity="0.1" />
    <ellipse cx="210" cy="388" rx="150" ry="16" fill="#001A66" opacity="0.28" />

    {/* floating status chips */}
    <Chip x={228} y={40} w={176} color="#10B981" delay={0.2}>Inventario cargado</Chip>
    <Chip x={252} y={86} w={152} color="#10B981" delay={1.6}>Venta registrada</Chip>
    <g transform="translate(300 300)">
      <Pop delay={2.2}>
        <circle r="26" fill={AMBER} />
        <circle r="19" fill="none" stroke="#E69500" strokeWidth="3" />
        <text y="8" textAnchor="middle" fontSize="22" fontWeight="700" fill="#7A4B00" fontFamily="Poppins, sans-serif">$</text>
      </Pop>
    </g>

    {/* owner */}
    <g transform="translate(-72 8)">
      <rect x="262" y="340" width="22" height="46" rx="8" fill="#1F2937" />
      <rect x="292" y="340" width="22" height="46" rx="8" fill="#1F2937" />
      <path d="M254 380 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <path d="M286 380 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <rect x="252" y="232" width="72" height="116" rx="26" fill="#14B8A6" />
      <rect x="270" y="196" width="36" height="46" rx="14" fill="#F2B994" />
      <path d="M270 238 q18 14 36 0" stroke="#0F766E" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* curly hair behind the face */}
      <g fill="#1F2937">
        <circle cx="258" cy="184" r="12" />
        <circle cx="318" cy="184" r="12" />
        <circle cx="262" cy="166" r="16" />
        <circle cx="314" cy="166" r="16" />
        <circle cx="278" cy="155" r="17" />
        <circle cx="300" cy="155" r="17" />
        <circle cx="288" cy="160" r="18" />
      </g>
      <circle cx="288" cy="190" r="32" fill="#F5C6A0" />
      <path d="M257 184 C257 158 272 151 288 151 C304 151 319 158 319 184 C310 172 300 168 288 168 C276 168 266 172 257 184 z" fill="#1F2937" />
      <path d="M268 181 q8 -5 15 -1 M293 180 q8 -4 15 1" stroke="#1F2937" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="276" cy="192" r="4" fill="#1F2937" />
      <circle cx="300" cy="192" r="4" fill="#1F2937" />
      <circle cx="277.2" cy="190.8" r="1.3" fill="#fff" />
      <circle cx="301.2" cy="190.8" r="1.3" fill="#fff" />
      <path d="M288 195 q4 6 -1 7" stroke="#D99A74" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="268" cy="204" r="5" fill="#FF8FA3" opacity="0.55" />
      <circle cx="308" cy="204" r="5" fill="#FF8FA3" opacity="0.55" />
      <path d="M274 206 q14 12 28 0" stroke="#B4392F" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* left arm relaxed */}
      <path d="M259 256 q-19 38 -9 76" stroke="#14B8A6" strokeWidth="18" fill="none" strokeLinecap="round" />
      <circle cx="250" cy="334" r="9" fill="#F5C6A0" />
      {/* right arm raises the phone */}
      <path d="M318 260 q52 4 52 -32" stroke="#14B8A6" strokeWidth="18" fill="none" strokeLinecap="round" />
      <rect x="352" y="168" width="44" height="76" rx="8" fill="#0F172A" />
      <rect x="357" y="175" width="34" height="62" rx="4" fill="#fff" />
      <rect x="361" y="180" width="18" height="4" rx="2" fill="#CBD5E1" />
      <polyline points="361,226 369,214 375,220 386,203" fill="none" stroke="#2563EB" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="372" cy="240" r="10" fill="#F5C6A0" />
    </g>
  </svg>
);

export default OwnerPhoneIllustration;
