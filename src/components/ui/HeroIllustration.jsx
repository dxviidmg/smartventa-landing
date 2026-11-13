import { useState, useEffect } from 'react';

/**
 * Original flat illustration: a happy owner who sees 3 stores and 2 warehouses at once,
 * with arrows for transfers (warehouse to store, big warehouse to small, store to store).
 * Inline SVG, no external assets or licences.
 */
export const YELLOW = '#FDE047';
export const GREEN = '#6EE7B7';
// Outline shared by stores and warehouses so they stay readable on both dark and light backgrounds
const OUTLINE = { stroke: '#0B1B4D', strokeWidth: 2.5, strokeLinejoin: 'round' };
const LABEL = { fontSize: 12, fontWeight: 600, fill: '#fff', fontFamily: 'Poppins, sans-serif', textAnchor: 'middle' };

export const Store = ({ x, y, color, label, chip, chipBelow = false, labelColor = '#fff' }) => (
  <g transform={`translate(${x} ${y})`}>
    <rect x="0" y="34" width="104" height="76" rx="6" fill="#fff" {...OUTLINE} />
    {[0, 1, 2, 3, 4].map((i) => (
      <path key={i} d={`M${i * 20.8} 12 h20.8 v26 a10.4 10.4 0 0 1 -20.8 0 z`} fill={i % 2 ? '#fff' : color} {...OUTLINE} />
    ))}
    <rect x="0" y="4" width="104" height="10" rx="4" fill={color} {...OUTLINE} />
    <rect x="14" y="64" width="32" height="46" rx="3" fill="#CBD5E1" {...OUTLINE} />
    <rect x="58" y="62" width="32" height="26" rx="3" fill="#BFDBFE" {...OUTLINE} />
    {chip && (
      <g transform={`translate(52 ${chipBelow ? 138 : -26})`}>
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
      <path d={`M-8 28 L${w / 2} 0 L${w + 8} 28 Z`} fill="#1E3A8A" {...OUTLINE} />
      <rect x="0" y="26" width={w} height={h} fill="#fff" {...OUTLINE} />
      <rect x={(w - doorW) / 2} y={26 + h - doorH} width={doorW} height={doorH} rx="3" fill="#CBD5E1" {...OUTLINE} />
      {[1, 2, 3, 4].map((i) => (
        <line key={i} x1={(w - doorW) / 2} x2={(w + doorW) / 2} y1={26 + h - doorH + (doorH / 5) * i} y2={26 + h - doorH + (doorH / 5) * i} stroke="#94A3B8" strokeWidth="2" />
      ))}
      <rect x="8" y={26 + h - crate} width={crate} height={crate} rx="2" fill="#F59E0B" {...OUTLINE} strokeWidth={2} />
      <rect x={w - crate - 8} y={26 + h - crate} width={crate} height={crate} rx="2" fill="#FBBF24" {...OUTLINE} strokeWidth={2} />
      <text x={w / 2} y={26 + h + 18} {...LABEL} fill={labelColor}>{label}</text>
    </g>
  );
};

const TRANSFERS = [
  { id: 'hi-t1', d: 'M224 66 Q 322 8 418 66' },
  { id: 'hi-t2', d: 'M150 156 Q 172 206 128 256' },
  { id: 'hi-t3', d: 'M520 150 Q 500 204 516 256' },
  { id: 'hi-t4', d: 'M134 306 Q 176 228 262 180', both: true },
  { id: 'hi-t5', d: 'M378 180 Q 456 218 508 306', both: true },
];
const PATH = Object.fromEntries(TRANSFERS.map((t) => [t.id, t.d]));

/**
 * One loop of 14s. Every store has a natural sale (box out, then coin in) and a transfer sale
 * (a box arrives from a warehouse or another store, then a box leaves and a coin comes in).
 * Each entry: [path, start, duration, options]. Coin landing times feed the earnings counters.
 */
export const HERO_CYCLE = 14;
const HERO_MOVES = [
  // stock arriving at the warehouses and moving between them
  ['M-8 115 L84 115', 0.02, 1.6],
  ['M648 115 L556 115', 1, 1.6],
  [PATH['hi-t1'], 1.6, 2],
  // warehouse to store transfers
  [PATH['hi-t2'], 2, 2],
  [PATH['hi-t3'], 2.8, 2],
  // store to store: each arrow carries two separate transfers, one per direction (the box vanishes on arrival)
  [PATH['hi-t4'], 6.4, 2],
  [PATH['hi-t5'], 6.4, 2, { reverse: true }],
  [PATH['hi-t4'], 8.8, 2, { reverse: true }],
  [PATH['hi-t5'], 8.8, 2],
  // Tienda 1: natural sale, then transfer sale
  ['M54 346 L54 380', 0.4, 1],
  ['M156 336 L96 336', 0.4, 1, { coin: true }],
  ['M54 346 L54 380', 4.2, 1],
  ['M156 336 L96 336', 4.2, 1, { coin: true }],
  ['M54 346 L54 380', 10.8, 1],
  ['M156 336 L96 336', 10.8, 1, { coin: true }],
  // Tienda 3
  ['M542 346 L542 380', 1.2, 1],
  ['M490 336 L560 336', 1.2, 1, { coin: true }],
  ['M542 346 L542 380', 5, 1],
  ['M490 336 L560 336', 5, 1, { coin: true }],
  ['M542 346 L542 380', 11, 1],
  ['M490 336 L560 336', 11, 1, { coin: true }],
  // Tienda 2
  ['M298 176 L298 212', 2.4, 1],
  ['M404 162 L338 162', 2.4, 1, { coin: true }],
  ['M298 176 L298 212', 8.6, 1],
  ['M404 162 L338 162', 8.6, 1, { coin: true }],
];
// seconds, within the loop, at which a coin reaches each store
const HERO_COINS = [
  [1.4, 5.2, 11.8],
  [3.4, 9.6],
  [2.2, 6, 12],
];

/**
 * Crate or coin that travels along path `d` during [begin, begin + dur] of a `cycle`-second timeline.
 * Looping by default; `calm` plays once (smaller and a bit transparent) and with `hold` stays at its
 * last position, otherwise it fades out on arrival. Skipped for reduced motion.
 */
export const Mover = ({ d, begin = 0, dur = 2.6, cycle, reverse = false, coin = false, calm = false, hold = false }) => {
  const [on, setOn] = useState(false);
  useEffect(() => {
    setOn(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  if (!on) return null;
  const c = cycle ?? begin + dur;
  const f4 = (n) => Math.min(1, Math.max(0, n)).toFixed(4);
  const s = begin / c;
  const e = (begin + dur) / c;
  const fade = (e - s) * 0.15;
  const peak = calm ? 0.85 : 1;
  let points = '0;0;1;1';
  const times = [0, s, e, 1];
  if (reverse) points = '1;1;0;0';
  const stays = calm && hold;
  const opacity = stays
    ? { values: `0;0;${peak};${peak}`, keyTimes: [0, s, s + fade, 1] }
    : { values: `0;0;${peak};${peak};0;0`, keyTimes: [0, s, s + fade, e - fade, e, 1] };
  const timing = { dur: `${c}s`, begin: '0s', repeatCount: calm ? '1' : 'indefinite', ...(calm ? { fill: 'freeze' } : {}) };
  return (
    <g opacity="0">
      <g transform={calm ? 'scale(0.8)' : undefined}>
        {coin ? (
          <>
            <circle r="10" fill="#FACC15" stroke="#0B1B4D" strokeWidth="2" />
            <text y="4" textAnchor="middle" fontSize="12" fontWeight="700" fill="#A16207" fontFamily="Poppins, sans-serif">$</text>
          </>
        ) : (
          <>
            <rect x="-8" y="-8" width="16" height="16" rx="3" fill="#F59E0B" {...OUTLINE} strokeWidth={2} />
            <path d="M-8 -1 h16 M0 -8 v7" stroke="#0B1B4D" strokeWidth="1.5" />
          </>
        )}
      </g>
      <animateMotion path={d} calcMode="linear" keyPoints={points} keyTimes={times.map(f4).join(';')} {...timing} />
      <animate attributeName="opacity" values={opacity.values} keyTimes={opacity.keyTimes.map(f4).join(';')} {...timing} />
    </g>
  );
};

const TARGETS = [4200, 3100, 2400];
export const money = (n) => `+$${n < 1000 ? n : `${(n / 1000).toFixed(1)}k`}`;

/**
 * Earnings counter: starts at 0 and adds a random sale (50 to 1000 pesos) each time a coin lands.
 * `times` are the seconds in the timeline at which coins land; it repeats every `cycle` seconds
 * unless `calm`, which plays once. Past `target` the total restarts from the last sale.
 */
export const useEarnings = (times, cycle, target, animate, calm = false) => {
  const [n, setN] = useState(0);
  const key = times.join(',');
  useEffect(() => {
    if (!animate) {
      setN(target);
      return undefined;
    }
    setN(0);
    const step = () => {
      const sale = 50 + Math.floor(Math.random() * 96) * 10;
      setN((v) => (v + sale > target ? sale : v + sale));
    };
    const timers = [];
    times.forEach((t) => {
      timers.push(setTimeout(() => {
        step();
        if (!calm) timers.push(setInterval(step, cycle * 1000));
      }, t * 1000));
    });
    return () => timers.forEach((id) => { clearTimeout(id); clearInterval(id); });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, calm, cycle, key, target]);
  return n;
};

/** True unless the user prefers reduced motion (decided after mount to keep server and client markup equal). */
export const useAnimate = () => {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    setAnimate(!window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);
  return animate;
};

const HeroIllustration = ({ label }) => {
  const animate = useAnimate();
  const e1 = useEarnings(HERO_COINS[0], HERO_CYCLE, TARGETS[0], animate);
  const e2 = useEarnings(HERO_COINS[1], HERO_CYCLE, TARGETS[1], animate);
  const e3 = useEarnings(HERO_COINS[2], HERO_CYCLE, TARGETS[2], animate);
  return (
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
      {TRANSFERS.map((t) => (
        <path
          key={t.id}
          id={t.id}
          d={t.d}
          stroke={t.both ? GREEN : YELLOW}
          markerStart={t.both ? 'url(#hi-arr-g)' : undefined}
          markerEnd={t.both ? 'url(#hi-arr-g)' : 'url(#hi-arr-y)'}
        />
      ))}
    </g>

    <Warehouse x={24} y={14} w={190} h={84} label="Almacén central" />
    <Warehouse x={426} y={14} w={190} h={84} label="Almacén 2" />
    <Store x={24} y={258} color="#FACC15" label="Tienda 1" chip={money(e1)} />
    <Store x={268} y={88} color="#A78BFA" label="Tienda 2" chip={money(e2)} />
    <Store x={512} y={258} color="#34D399" label="Tienda 3" chip={money(e3)} />

    {HERO_MOVES.map(([d, begin, dur, opts], i) => (
      <Mover key={i} d={d} begin={begin} dur={dur} cycle={HERO_CYCLE} {...opts} />
    ))}

    {/* owner: sitting back in a chair, calm and happy, looking down at the laptop on their lap */}
    <g transform="translate(32 90)">
      <ellipse cx="290" cy="436" rx="92" ry="11" fill="#001A66" opacity="0.28" />
      {/* chair */}
      <rect x="232" y="226" width="112" height="140" rx="22" fill="#475569" />
      <rect x="284" y="372" width="10" height="50" rx="4" fill="#334155" />
      <path d="M236 428 h104" stroke="#334155" strokeWidth="8" strokeLinecap="round" />
      <rect x="222" y="354" width="132" height="20" rx="9" fill="#334155" />
      {/* legs: thighs on the seat, shins down */}
      <rect x="254" y="344" width="34" height="44" rx="14" fill="#1F2937" />
      <rect x="290" y="344" width="34" height="44" rx="14" fill="#1F2937" />
      <rect x="260" y="378" width="22" height="50" rx="8" fill="#1F2937" />
      <rect x="296" y="378" width="22" height="50" rx="8" fill="#1F2937" />
      <path d="M252 428 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      <path d="M288 428 h34 a6 6 0 0 1 6 6 v2 h-40 z" fill="#fff" />
      {/* torso */}
      <rect x="252" y="232" width="72" height="120" rx="26" fill="#14B8A6" />
      <rect x="270" y="200" width="36" height="42" rx="14" fill="#F2B994" />
      <path d="M270 238 q18 14 36 0" stroke="#0F766E" strokeWidth="5" fill="none" strokeLinecap="round" />
      {/* head, slightly tilted down towards the screen */}
      <g transform="rotate(5 288 232)">
        <g fill="#1F2937">
          <circle cx="258" cy="188" r="12" />
          <circle cx="318" cy="188" r="12" />
          <circle cx="262" cy="170" r="16" />
          <circle cx="314" cy="170" r="16" />
          <circle cx="278" cy="159" r="17" />
          <circle cx="300" cy="159" r="17" />
          <circle cx="288" cy="164" r="18" />
        </g>
        <circle cx="288" cy="194" r="32" fill="#F5C6A0" />
        <path d="M257 188 C257 162 272 155 288 155 C304 155 319 162 319 188 C310 176 300 172 288 172 C276 172 266 176 257 188 z" fill="#1F2937" />
        <path d="M268 185 q8 -5 15 -1 M293 184 q8 -4 15 1" stroke="#1F2937" strokeWidth="2.4" fill="none" strokeLinecap="round" />
        <circle cx="276" cy="196" r="4" fill="#1F2937" />
        <circle cx="300" cy="196" r="4" fill="#1F2937" />
        <circle cx="277.2" cy="194.8" r="1.3" fill="#fff" />
        <circle cx="301.2" cy="194.8" r="1.3" fill="#fff" />
        <path d="M288 198 q4 6 -1 7" stroke="#D99A74" strokeWidth="2" fill="none" strokeLinecap="round" />
        <circle cx="268" cy="208" r="5" fill="#FF8FA3" opacity="0.55" />
        <circle cx="308" cy="208" r="5" fill="#FF8FA3" opacity="0.55" />
        <path d="M274 210 q14 12 28 0" stroke="#B4392F" strokeWidth="3" fill="none" strokeLinecap="round" />
      </g>
      {/* arms resting on the laptop */}
      <path d="M259 258 q-20 34 -4 82" stroke="#14B8A6" strokeWidth="18" fill="none" strokeLinecap="round" />
      <path d="M317 258 q20 34 4 82" stroke="#14B8A6" strokeWidth="18" fill="none" strokeLinecap="round" />
      {/* laptop seen from behind, lid facing us */}
      <rect x="240" y="304" width="96" height="58" rx="6" fill="#CBD5E1" stroke="#0F172A" strokeWidth="2.5" />
      <circle cx="288" cy="333" r="7" fill="#fff" stroke="#94A3B8" strokeWidth="1.5" />
      <path d="M232 362 h112" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
      <circle cx="248" cy="346" r="10" fill="#F5C6A0" />
      <circle cx="328" cy="346" r="10" fill="#F5C6A0" />
    </g>

    {/* legend */}
    <g transform="translate(24 460)">
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
};

export default HeroIllustration;
