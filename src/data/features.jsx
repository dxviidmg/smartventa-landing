import PointOfSale from '@mui/icons-material/PointOfSale';
import Assessment from '@mui/icons-material/Assessment';
import People from '@mui/icons-material/People';
import SwapHoriz from '@mui/icons-material/SwapHoriz';
import AttachMoney from '@mui/icons-material/AttachMoney';
import Keyboard from '@mui/icons-material/Keyboard';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import History from '@mui/icons-material/History';
import Security from '@mui/icons-material/Security';
import Print from '@mui/icons-material/Print';
import AccountBalance from '@mui/icons-material/AccountBalance';
import Transform from '@mui/icons-material/Transform';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import Storefront from '@mui/icons-material/Storefront';
import Inventory from '@mui/icons-material/Inventory';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Scale from '@mui/icons-material/Scale';
import UploadFile from '@mui/icons-material/UploadFile';
import TrendingUp from '@mui/icons-material/TrendingUp';
import Badge from '@mui/icons-material/Badge';

export const features = [
  // Diferenciadores — lo que nos separa
  { icon: <Storefront />, title: 'Multi-tienda', desc: 'Administra todas tus tiendas y almacenes desde una sola cuenta. Un catálogo, un precio, una plataforma.', color: '#10b981' },
  { icon: <SwapHoriz />, title: 'Traspasos entre tiendas', desc: 'Mueve mercancía entre sucursales mientras vendes. Queda registrado quién mandó qué, cuándo y a dónde.', color: '#8b5cf6' },
  { icon: <LocalShipping />, title: 'Distribución desde almacén', desc: 'El almacén envía mercancía a una o varias tiendas en una sola operación, sin que ellas la soliciten.', color: '#0891b2' },
  { icon: <Transform />, title: 'Conversión de unidades', desc: 'Convierte productos automáticamente: cajas a piezas, costales a kilos. Una sola configuración y listo.', color: '#ec4899' },
  { icon: <Scale />, title: 'Venta a granel', desc: 'Vende medio kilo de algo o "20 pesos de" y el sistema calcula lo proporcional. Ideal para abarrotes y productos sueltos.', color: '#f97316' },
  { icon: <PointOfSale />, title: 'Crear productos al vender', desc: 'Si un producto no existe en tu catálogo, lo creas directo desde la venta sin interrumpir al cliente.', color: '#22c55e' },
  { icon: <AttachMoney />, title: 'Cambio masivo de precios', desc: 'Actualiza costo, precio unitario y mayoreo de varios productos a la vez. Se aplica en todas las tiendas.', color: '#eab308' },
  { icon: <TrendingUp />, title: 'Rentabilidad por tienda', desc: 'Consulta la utilidad de tus operaciones y cuánto capital tienes invertido en mercancía por sucursal.', color: '#8b5cf6' },
  { icon: <BookmarkAdded />, title: 'Apartados', desc: 'Reserva productos para un cliente sin cobrar el total. El stock se descuenta automáticamente.', color: '#0891b2' },

  // Estándar POS — lo que se espera
  { icon: <PointOfSale />, title: 'Múltiples carritos', desc: 'Mantén varias ventas abiertas al mismo tiempo. Mientras uno paga, avanzas con el siguiente.', color: '#10b981' },
  { icon: <AccountBalance />, title: 'Corte de caja', desc: 'Resumen por método de pago, movimientos de entrada/salida y exportación a Excel.', color: '#22c55e' },
  { icon: <People />, title: 'Clientes y descuentos', desc: 'Base de clientes con historial de compras y descuentos personalizados por porcentaje.', color: '#a855f7' },
  { icon: <Badge />, title: 'Vendedores', desc: 'Asigna vendedores a tiendas y consulta sus ventas individuales. Cada quien con su reporte.', color: '#f97316' },
  { icon: <History />, title: 'Kardex de inventario', desc: 'Historial completo de cada producto: ventas, traspasos, distribuciones y ajustes.', color: '#14b8a6' },
  { icon: <SwapHoriz />, title: 'Devoluciones', desc: 'Cancelación total o devolución parcial con motivo registrado.', color: '#ef4444' },
  { icon: <QrCodeScanner />, title: 'Código de barras', desc: 'Busca productos por código, nombre o SKU. Compatible con lectores USB y Bluetooth.', color: '#22c55e' },
  { icon: <Print />, title: 'Tickets', desc: 'Impresión en impresoras térmicas estándar. Indicador visual de conexión en pantalla.', color: '#6366f1' },
  { icon: <UploadFile />, title: 'Importación desde Excel', desc: 'Sube tu catálogo completo con plantillas descargables y validación antes de importar.', color: '#0ea5e9' },
  { icon: <Assessment />, title: 'Dashboard de ventas', desc: 'KPIs, productos destacados y rendimiento por tienda. Todo en una vista.', color: '#8b5cf6' },
  { icon: <Keyboard />, title: 'Atajos de teclado', desc: 'Opera el punto de venta sin tocar el mouse. Buscar, cambiar operación, seleccionar cliente — todo con teclado.', color: '#84cc16' },
  { icon: <Security />, title: 'Roles y permisos', desc: 'Dueño, administrador y vendedor. Cada rol ve solo lo que necesita.', color: '#d946ef' },
];
