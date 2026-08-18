import Speed from '@mui/icons-material/Speed';
import CheckCircle from '@mui/icons-material/CheckCircle';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Store from '@mui/icons-material/Store';

export const benefits = [
  {
    icon: <Store />, title: 'Visibilidad total',
    desc: 'Consulta ventas, inventario y operaciones de todas tus sucursales en tiempo real desde un solo panel.',
    metric: '100%', metricLabel: 'visibilidad',
  },
  {
    icon: <CheckCircle />, title: 'Caja siempre cuadrada',
    desc: 'Corte de caja con resumen por método de pago y movimientos detallados.',
    metric: '0', metricLabel: 'descuadres',
  },
  {
    icon: <Speed />, title: 'Operación ágil',
    desc: 'Traspasos, distribuciones e inventario actualizados al instante. Sin llamadas ni hojas de cálculo.',
    metric: '0', metricLabel: 'retrasos',
  },
  {
    icon: <TrendingUp />, title: 'Fácil de usar',
    desc: 'Interfaz intuitiva con ayuda contextual. Tu equipo vende desde el primer día sin capacitación larga.',
    metric: '1', metricLabel: 'día para dominar',
  },
];
