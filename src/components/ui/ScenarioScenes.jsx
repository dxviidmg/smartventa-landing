import { Store, Warehouse, Mover, money, useEarnings, useAnimate } from './HeroIllustration';

/** Small SVG scenes (stores, warehouses and transfer arrows) for each business setup. */
export const Arrows = () => (
  <defs>
    <marker id="ba-y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#EAB308" /></marker>
    <marker id="ba-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#10B981" /></marker>
  </defs>
);
const L = '#334155';
// Every drawing plays once, in order: stock arrives, is sold, and money comes back.
// A natural sale is a box leaving while a coin comes in; a transfer sale is the same, right after a transfer arrived.
// Sales hold their last position only when `hold` is set, everything else fades out.
const SALE = 0.9; // seconds the box takes to leave; the coin comes in during the same time
const coinLands = (at) => at + SALE;

const Sale = ({ box, coin, at, C, hold = false }) => (
  <>
    <Mover calm hold={hold} d={box} begin={at} dur={SALE} cycle={C} />
    <Mover calm hold={hold} coin d={coin} begin={at} dur={SALE} cycle={C} />
  </>
);
const Hop = ({ d, at, C, dur = 1.6, reverse = false }) => <Mover calm d={d} begin={at} dur={dur} cycle={C} reverse={reverse} />;

// Store 1 on the left of the two-store drawings
const LEFT = { box: 'M70 176 L70 204', coin: 'M12 165 L104 165' };
const RIGHT = { box: 'M306 176 L306 204', coin: 'M410 165 L346 165' };
const ARROW = 'M150 170 Q210 120 270 170';

const Single = () => {
  const animate = useAnimate();
  const C = 5;
  const e = useEarnings([coinLands(0.4)], C, 4200, animate, true);
  return (
    <g transform="translate(210 160) scale(1.6) translate(-210 -150)">
      <Store x={158} y={80} color="#FACC15" label="Tu tienda" chip={money(e)} labelColor={L} />
      <Sale box="M188 172 L188 198" coin="M300 158 L238 158" at={0.4} C={C} hold />
    </g>
  );
};

const Multi = () => {
  const animate = useAnimate();
  const C = 13;
  const e1 = useEarnings([coinLands(0.4), coinLands(9.8)], C, 4200, animate, true);
  const e2 = useEarnings([coinLands(0.8), coinLands(5.4)], C, 2400, animate, true);
  return (
    <>
      <path d={ARROW} fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda 1" chip={money(e1)} labelColor={L} />
      <Store x={276} y={90} color="#34D399" label="Tienda 2" chip={money(e2)} labelColor={L} />
      {/* natural sales */}
      <Sale {...LEFT} at={0.4} C={C} />
      <Sale {...RIGHT} at={0.8} C={C} />
      {/* Tienda 1 sends to Tienda 2, which sells it */}
      <Hop d={ARROW} at={3.2} C={C} />
      <Sale {...RIGHT} at={5.4} C={C} hold />
      {/* then Tienda 2 sends back to Tienda 1, which sells it */}
      <Hop d={ARROW} at={7.6} C={C} reverse />
      <Sale {...LEFT} at={9.8} C={C} hold />
    </>
  );
};

const SingleWarehouse = () => {
  const animate = useAnimate();
  const C = 8;
  const e = useEarnings([coinLands(0.2), coinLands(4.2)], C, 4200, animate, true);
  return (
    <>
      <path d="M244 170 H156" fill="none" stroke="#EAB308" strokeWidth="3.5" strokeLinecap="round" markerEnd="url(#ba-y)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda" chip={money(e)} labelColor={L} />
      <Warehouse x={254} y={90} w={130} h={64} label="Almacén" labelColor={L} />
      <Sale {...LEFT} at={0.2} C={C} />
      <Hop d="M432 171 L330 171" at={0.4} C={C} />
      <Hop d="M244 170 H156" at={2.2} C={C} dur={1.8} />
      <Sale {...LEFT} at={4.2} C={C} hold />
    </>
  );
};

const MultiWarehouse = () => {
  const animate = useAnimate();
  const C = 14;
  const e1 = useEarnings([coinLands(0.4), coinLands(3.6), coinLands(9.6)], C, 4200, animate, true);
  const e2 = useEarnings([coinLands(1.6), coinLands(6.6)], C, 3100, animate, true);
  const e3 = useEarnings([coinLands(1), coinLands(4.4), coinLands(9.6)], C, 2400, animate, true);
  const S1 = { box: 'M40 264 L40 286', coin: 'M-8 241 L78 241' };
  const S2 = { box: 'M188 264 L188 286', coin: 'M210 128 L210 192' };
  const S3 = { box: 'M336 264 L336 286', coin: 'M428 241 L372 241' };
  const W12 = 'M178 40 Q 214 14 242 40';
  const W1S1 = 'M70 128 Q 52 150 62 176';
  const W2S3 = 'M340 118 Q 356 150 346 176';
  const S1S2 = 'M126 236 H152';
  const S2S3 = 'M264 236 H290';
  return (
    <>
      <g fill="none" strokeWidth="3.5" strokeLinecap="round">
        <path d={W12} stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d={W1S1} stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d={W2S3} stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d={S1S2} stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
        <path d={S2S3} stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      </g>
      <Warehouse x={30} y={14} w={140} h={52} label="Almacén central" labelColor={L} />
      <Warehouse x={250} y={14} w={140} h={52} label="Almacén 2" labelColor={L} />
      <Store x={10} y={166} color="#FACC15" label="Tienda 1" chip={money(e1)} chipBelow labelColor={L} />
      <Store x={158} y={166} color="#A78BFA" label="Tienda 2" chip={money(e2)} chipBelow labelColor={L} />
      <Store x={306} y={166} color="#34D399" label="Tienda 3" chip={money(e3)} chipBelow labelColor={L} />
      {/* stock arrives at both warehouses */}
      <Hop d="M-8 84 L80 84" at={0.2} C={C} />
      <Hop d="M428 84 L340 84" at={1} C={C} />
      {/* natural sales */}
      <Sale {...S1} at={0.4} C={C} />
      <Sale {...S3} at={1} C={C} />
      <Sale {...S2} at={1.6} C={C} />
      {/* warehouses send to Tienda 1 and Tienda 3, which sell it */}
      <Hop d={W1S1} at={1.8} C={C} dur={1.4} />
      <Hop d={W2S3} at={2.6} C={C} dur={1.4} />
      <Sale {...S1} at={3.6} C={C} />
      <Sale {...S3} at={4.4} C={C} />
      {/* the stores pass stock to Tienda 2, which sells it */}
      <Hop d={S1S2} at={5.4} C={C} dur={1} />
      <Hop d={S2S3} at={5.4} C={C} dur={1} reverse />
      <Sale {...S2} at={6.6} C={C} hold />
      {/* and Tienda 2 sends it back, one transfer in each direction */}
      <Hop d={S1S2} at={8.4} C={C} dur={1} reverse />
      <Hop d={S2S3} at={8.4} C={C} dur={1} />
      <Sale {...S1} at={9.6} C={C} hold />
      <Sale {...S3} at={9.6} C={C} hold />
    </>
  );
};

export const scenes = {
  single: <Single />,
  multi: <Multi />,
  singleWarehouse: <SingleWarehouse />,
  multiWarehouse: <MultiWarehouse />,
};
