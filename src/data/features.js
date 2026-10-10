import AddShoppingCart from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/icons-material/Badge';
import LocalOffer from '@mui/icons-material/LocalOffer';
import History from '@mui/icons-material/History';
import PriceChange from '@mui/icons-material/PriceChange';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import SyncAlt from '@mui/icons-material/SyncAlt';
import ManageSearch from '@mui/icons-material/ManageSearch';
import HowToReg from '@mui/icons-material/HowToReg';
import Lock from '@mui/icons-material/Lock';
import QrCodeScanner from '@mui/icons-material/QrCodeScanner';
import Print from '@mui/icons-material/Print';
import Savings from '@mui/icons-material/Savings';
import Insights from '@mui/icons-material/Insights';
import TrendingDown from '@mui/icons-material/TrendingDown';
import Payments from '@mui/icons-material/Payments';
import PointOfSale from '@mui/icons-material/PointOfSale';
import Sell from '@mui/icons-material/Sell';
import UploadFile from '@mui/icons-material/UploadFile';
import LocalShipping from '@mui/icons-material/LocalShipping';
import Inventory2 from '@mui/icons-material/Inventory2';
import Scale from '@mui/icons-material/Scale';
import BookmarkAdded from '@mui/icons-material/BookmarkAdded';
import AssignmentReturn from '@mui/icons-material/AssignmentReturn';
import { SaleMockup, CashMockup, InventoryMockup, BranchesMockup } from '../components/ui/SampleWindows';

// Feature groups of the product section. `mockup` is the sample window shown beside the group (null = text only).
export const tabs = [
  {
    key: 'vender', label: 'Vender', mockup: SaleMockup,
    features: [
      { icon: AddShoppingCart, title: 'Varios clientes a la vez', desc: 'En hora pico abres una venta por cliente y cambias de una a otra con un clic, sin perder nada.' },
      { icon: Payments, title: 'Cobra como te paguen', desc: 'Efectivo, tarjeta, transferencia o una mezcla en la misma venta. El sistema calcula el cambio.' },
      { icon: Sell, title: 'Precio de mayoreo automático', desc: 'Defines el precio y la cantidad mínima. Al llegar a ella, el carrito aplica el precio solo.' },
      { icon: Scale, title: 'Vende por pieza, por peso o por monto', desc: 'Kilo, litro, metro, costal o bote, y también por dinero: "dame $20 de queso". Si compras por costal, lo desempacas a kilos.' },
      { icon: Print, title: 'Usa el equipo que ya tienes', desc: 'Lector de código de barras e impresora térmica de tickets en computadora. En celular y tableta escaneas con la cámara.' },
    ],
  },
  {
    key: 'caja', label: 'Caja y clientes', mockup: CashMockup,
    features: [
      { icon: PointOfSale, title: 'Corte de caja sin hacer cuentas', desc: 'Al cerrar ves lo vendido por forma de pago y el dinero que entró o salió, y lo descargas a Excel.' },
      { icon: Savings, title: 'Cuánto ganaste', desc: 'Con el costo de cada producto, ves la ganancia de tu día o de cualquier periodo.' },
      { icon: LocalOffer, title: 'Descuentos para tus clientes', desc: 'Guardas a cada cliente con su descuento y se aplica solo al cobrar.' },
      { icon: BookmarkAdded, title: 'Apartados con abonos', desc: 'El cliente deja un anticipo y abona hasta liquidar. Lo apartado queda reservado para él.' },
      { icon: AssignmentReturn, title: 'Devoluciones y cancelaciones', desc: 'Devuelves parte de una venta o la cancelas completa. Siempre queda el motivo anotado.' },
    ],
  },
  {
    key: 'inventario', label: 'Inventario y catálogo', mockup: InventoryMockup,
    features: [
      { icon: History, title: 'Sabes quién movió qué', desc: 'Cada venta, entrada, traspaso o ajuste guarda quién lo hizo, cuándo y cuánto cambió el inventario.' },
      { icon: PriceChange, title: 'Cambia precios de golpe', desc: 'Sube el costo y el precio de varios productos a la vez. Queda registrado el precio anterior, el nuevo, la fecha y quién lo cambió.' },
      { icon: PhotoCamera, title: 'Catálogo con fotos', desc: 'Tomas la foto desde el celular. Al vender, distingues al instante productos parecidos.' },
      { icon: Inventory2, title: 'Del costal al kilo', desc: 'Defines una vez que 1 costal = 20 kilos y lo desempacas en la tienda para venderlo a granel.' },
      { icon: UploadFile, title: 'Tu catálogo actual, sin teclear', desc: 'Subes tu Excel y el sistema revisa los datos antes de guardarlos. También puedes exportar tu catálogo e inventario.' },
    ],
  },
  {
    key: 'sucursales', label: 'Sucursales y análisis', mockup: BranchesMockup,
    features: [
      { icon: SyncAlt, title: 'Pide mercancía a otra tienda', desc: 'Si no tienes un producto, ves cuánto hay en las otras sucursales y pides el traspaso con un botón. Se confirma escaneando.' },
      { icon: LocalShipping, title: 'Surte desde tu almacén', desc: 'El almacén arma el envío viendo el inventario de todas las tiendas y queda pendiente. En la tienda se cuenta la mercancía con el almacenista y, si todo está bien, se acepta.' },
      { icon: Insights, title: 'Tableros para decidir', desc: 'Ventas, ganancia y ticket promedio. Descubre tu mejor tienda, tu mejor día y tu mejor hora.' },
      { icon: TrendingDown, title: 'Cuánto se cancela y por qué', desc: 'Mide cuánto se cancela o se devuelve, en qué tienda, cuándo y con qué motivo.' },
      { icon: Badge, title: 'Cada quien ve lo suyo', desc: 'Tres roles: dueño, administrador y vendedor. Cada uno solo ve y abre lo que le corresponde, y sabes cuánto vendió cada vendedor.' },
    ],
  },
  {
    key: 'control', label: 'Control y auditoría', mockup: null,
    features: [
      { icon: ManageSearch, title: 'Auditoría interna', desc: 'Encuentra ventas duplicadas, diferencias de inventario, códigos repetidos, errores de costo o mayoreo y productos que no se mueven.' },
      { icon: HowToReg, title: 'Ajustes con aprobación', desc: 'El administrador pide corregir una cantidad y solo el dueño la aprueba. Todo queda registrado.' },
      { icon: Lock, title: 'Precios y dinero protegidos', desc: 'Solo el dueño ve los costos, cambia precios de productos existentes, ajusta el inventario y edita los movimientos de caja. El sistema revisa que el mayoreo quede entre el costo y el precio.' },
      { icon: QrCodeScanner, title: 'Traspasos que sí llegan', desc: 'No puedes enviar más de lo que hay. El traspaso se confirma escaneando, y un producto que no está en él se rechaza.' },
    ],
  },
];
