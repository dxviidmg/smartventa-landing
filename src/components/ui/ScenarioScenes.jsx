import { Store, Warehouse } from './HeroIllustration';

/** Small SVG scenes (stores, warehouses and transfer arrows) for each business setup. */
export const Arrows = () => (
  <defs>
    <marker id="ba-y" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#EAB308" /></marker>
    <marker id="ba-g" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0 0 L10 5 L0 10 z" fill="#10B981" /></marker>
  </defs>
);
const L = '#334155';
export const scenes = {
  single: (
    <g transform="translate(210 160) scale(1.6) translate(-210 -150)">
      <Store x={158} y={80} color="#FACC15" label="Tu tienda" chip="+$4.2k" labelColor={L} />
    </g>
  ),
  multi: (
    <>
      <path d="M150 170 Q210 120 270 170" fill="none" stroke="#10B981" strokeWidth="3.5" strokeLinecap="round" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda 1" chip="+$4.2k" labelColor={L} />
      <Store x={276} y={90} color="#34D399" label="Tienda 2" chip="+$2.4k" labelColor={L} />
    </>
  ),
  singleWarehouse: (
    <>
      <path d="M244 170 H156" fill="none" stroke="#EAB308" strokeWidth="3.5" strokeLinecap="round" markerEnd="url(#ba-y)" />
      <Store x={40} y={90} color="#FACC15" label="Tienda" chip="+$4.2k" labelColor={L} />
      <Warehouse x={254} y={90} w={130} h={64} label="Almacén" labelColor={L} />
    </>
  ),
  multiWarehouse: (
    <>
      <g fill="none" strokeWidth="3.5" strokeLinecap="round">
        <path d="M178 40 Q 224 14 262 40" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M70 128 Q 52 150 62 176" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M340 118 Q 356 150 346 176" stroke="#EAB308" markerEnd="url(#ba-y)" />
        <path d="M126 236 H152" stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
        <path d="M264 236 H290" stroke="#10B981" markerStart="url(#ba-g)" markerEnd="url(#ba-g)" />
      </g>
      <Warehouse x={30} y={14} w={140} h={52} label="Almacén central" labelColor={L} />
      <Warehouse x={270} y={22} w={110} h={44} label="Almacén 2" labelColor={L} />
      <Store x={10} y={166} color="#FACC15" label="Tienda 1" labelColor={L} />
      <Store x={158} y={166} color="#A78BFA" label="Tienda 2" labelColor={L} />
      <Store x={306} y={166} color="#34D399" label="Tienda 3" labelColor={L} />
    </>
  ),
};

