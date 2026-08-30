import Storefront from '@mui/icons-material/Storefront';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Insights from '@mui/icons-material/Insights';
import PersonAdd from '@mui/icons-material/PersonAdd';

export const steps = [
  { icon: <PersonAdd />, num: '01', title: 'Crea tu cuenta', desc: 'Regístrate en línea o agenda una llamada y lo hacemos juntos. Si ya tienes un catálogo en Excel, lo subimos ahí mismo.' },
  { icon: <Storefront />, num: '02', title: 'Agrega tus tiendas e inventario', desc: 'Crea cada sucursal o almacén y decide qué productos van a cada uno. Tú controlas quién tiene qué.' },
  { icon: <PointOfSale />, num: '03', title: 'Tu equipo empieza a vender', desc: 'La interfaz es directa — buscar producto, agregar al carrito, cobrar. Sin capacitación larga.' },
  { icon: <Insights />, num: '04', title: 'Tú ves todo desde donde estés', desc: 'Cuánto vendió cada tienda, qué hay en caja, qué traspasos hubo. Sin llamar a nadie.' },
];
