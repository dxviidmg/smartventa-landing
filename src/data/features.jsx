import PointOfSale from '@mui/icons-material/PointOfSale';
import Assessment from '@mui/icons-material/Assessment';
import People from '@mui/icons-material/People';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import Image from '@mui/icons-material/Image';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Keyboard from '@mui/icons-material/Keyboard';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import History from '@mui/icons-material/History';
import TableChart from '@mui/icons-material/TableChart';
import Security from '@mui/icons-material/Security';
import Print from '@mui/icons-material/Print';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Support from '@mui/icons-material/Support';
import Transform from '@mui/icons-material/Transform';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import FindInPage from '@mui/icons-material/FindInPage';

export const features = [
  { icon: <PointOfSale />, title: 'Multiventa', desc: 'Atiende a varios clientes a la vez con múltiples carritos simultáneos. Mientras uno paga, avanzas con el siguiente sin perder información.', color: '#10b981' },
  { icon: <History />, title: 'Inventario en Tiempo Real', desc: 'Stock unificado en todas las tiendas, reservas inteligentes entre carritos y revisión de stock entre sucursales con acceso rápido para agregar inventario.', color: '#14b8a6' },
  { icon: <SwapHoriz />, title: 'Traspasos y Distribución', desc: 'Mueve mercancía entre tiendas y almacenes con trazabilidad completa, confirmación obligatoria y dashboard de pendientes.', color: '#8b5cf6' },
  { icon: <Transform />, title: 'Conversiones de Producto', desc: 'Desempaque automático con un clic (ej: 1 Costal → 10 Kg). Soporta Pieza, Kilogramo, Costal, Litro, Metro, Rollo y Caja.', color: '#ec4899' },
  { icon: <Assessment />, title: 'Dashboard', desc: 'KPIs clave, heatmap de ventas, ticket promedio, mejor/peor tienda, top de marcas y gráficas de tendencia por día, semana o mes.', color: '#8b5cf6' },
  { icon: <AttachMoney />, title: 'Precios y Pagos Flexibles', desc: 'Mayoreo automático por cantidad, pagos mixtos (efectivo, tarjeta, transferencia) y actualización masiva de precios.', color: '#f97316' },
  { icon: <AccountBalance />, title: 'Corte de Caja', desc: 'Resumen por método de pago, movimientos detallados, corte parcial/total y exportación a Excel.', color: '#22c55e' },
  { icon: <BookmarkAdded />, title: 'Sistema de Apartados', desc: 'Separa productos para un cliente sin cobrar el total. El stock se reserva automáticamente con seguimiento por cliente.', color: '#0891b2' },
  { icon: <Image />, title: 'Catálogo de Productos', desc: 'Imágenes, costos, márgenes, historial de precios. Organiza por marca y departamento.', color: '#f97316' },
  { icon: <QrCodeScanner />, title: 'Lector de Códigos', desc: 'Búsqueda instantánea por código de barras o nombre. Crea productos al vuelo si no existen.', color: '#22c55e' },
  { icon: <People />, title: 'Clientes y Descuentos', desc: 'Registro completo, historial de compras y descuentos personalizados por porcentaje.', color: '#a855f7' },
  { icon: <SwapHoriz />, title: 'Devoluciones y Cancelaciones', desc: 'Cancelación total o devolución parcial con motivos documentados y filtros rápidos.', color: '#eab308' },
  { icon: <FindInPage />, title: 'Auditoría Integrada', desc: 'Detecta automáticamente ventas duplicadas, códigos repetidos, stock faltante y productos sin movimiento.', color: '#ef4444' },
  { icon: <Security />, title: 'Roles y Permisos', desc: 'Dueño, Administrador y Vendedor con vistas personalizadas según nivel de acceso.', color: '#d946ef' },
  { icon: <TableChart />, title: 'Importación Masiva', desc: 'Carga miles de productos desde Excel con plantillas descargables y validación previa.', color: '#0ea5e9' },
  { icon: <Print />, title: 'Impresión de Tickets', desc: 'Compatible con impresoras térmicas estándar. Indicador visual de conexión verde/rojo en pantalla.', color: '#6366f1' },
  { icon: <Keyboard />, title: 'Atajos de Teclado', desc: 'Vende más rápido con atajos para buscar, cambiar operación, enfocar búsqueda y seleccionar cliente.', color: '#84cc16' },
  { icon: <Support />, title: 'Soporte Integrado', desc: 'WhatsApp directo con info prellenada y ayuda contextual en cada página del sistema.', color: '#0ea5e9' },
];
