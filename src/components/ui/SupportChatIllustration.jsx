/**
 * Original flat illustration: a support chat on a phone. Inline SVG, no external assets or licences.
 */
import { AMBER } from '../../constants';

const SupportChatIllustration = ({ label }) => (
  <svg viewBox="0 0 320 380" role="img" aria-label={label} style={{ width: '100%', height: 'auto', display: 'block' }}>
    <circle cx="160" cy="190" r="150" fill="#fff" opacity="0.7" />
    <ellipse cx="160" cy="356" rx="90" ry="10" fill="#1D4ED8" opacity="0.12" />

    {/* phone */}
    <rect x="70" y="24" width="180" height="326" rx="30" fill="#0F172A" />
    <rect x="78" y="34" width="164" height="306" rx="24" fill="#F1F5F9" />
    {/* header */}
    <path d="M78 58 a24 24 0 0 1 24 -24 h116 a24 24 0 0 1 24 24 v26 h-164 z" fill="#25D366" />
    <circle cx="104" cy="66" r="14" fill="#fff" />
    <circle cx="104" cy="62" r="5" fill="#0B1B4D" />
    <path d="M94 76 a10 8 0 0 1 20 0 z" fill="#0B1B4D" />
    <text x="126" y="64" fontSize="12" fontWeight="600" fill="#fff" fontFamily="Poppins, sans-serif">SmartVenta</text>
    <circle cx="131" cy="75" r="3" fill="#BBF7D0" />
    <text x="139" y="78" fontSize="9" fill="#fff" fontFamily="Poppins, sans-serif">en línea</text>

    {/* messages */}
    <g fontFamily="Poppins, sans-serif">
      <rect x="116" y="96" width="112" height="46" rx="14" fill="#DCF8C6" />
      <text x="126" y="115" fontSize="11" fontWeight="500" fill="#0F172A">¿Cómo importo</text>
      <text x="126" y="130" fontSize="11" fontWeight="500" fill="#0F172A">mi Excel?</text>

      <rect x="92" y="150" width="132" height="62" rx="14" fill="#fff" />
      <text x="102" y="169" fontSize="11" fontWeight="500" fill="#0F172A">Te ayudamos a</text>
      <text x="102" y="184" fontSize="11" fontWeight="500" fill="#0F172A">cargarlo, paso a</text>
      <text x="102" y="199" fontSize="11" fontWeight="500" fill="#0F172A">paso.</text>

      <rect x="92" y="220" width="116" height="38" rx="14" fill="#fff" />
      <text x="102" y="236" fontSize="11" fontWeight="500" fill="#0F172A">Listo, ya puedes</text>
      <text x="102" y="250" fontSize="11" fontWeight="500" fill="#0F172A">iniciar a vender</text>

      <rect x="164" y="266" width="64" height="26" rx="13" fill="#DCF8C6" />
      <text x="175" y="283" fontSize="11" fontWeight="500" fill="#0F172A">¡Gracias!</text>
    </g>
    {/* input bar */}
    <rect x="88" y="300" width="144" height="28" rx="14" fill="#fff" />
    <circle cx="216" cy="314" r="10" fill="#25D366" />
    <path d="M212 314 l8 -4 l-3 9 l-1.5 -3.5 z" fill="#fff" />

    {/* accent badges */}
    <g transform="translate(250 76)">
      <circle r="22" fill={AMBER} />
      <path d="M-9 1 l6 6 l12 -13" stroke="#0B1B4D" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
    <g transform="translate(52 248)">
      <circle r="16" fill="#2563EB" />
      <path d="M-6 0 l4 4 l8 -9" stroke="#fff" strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export default SupportChatIllustration;
