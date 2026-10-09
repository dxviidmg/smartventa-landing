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
      { icon: AddShoppingCart, title: 'Multiventa', desc: 'Atiende a varios clientes a la vez en hora pico, cada uno con su propia venta.' },
      { icon: Payments, title: 'Cobro flexible', desc: 'Efectivo, tarjeta, transferencia o pagos combinados en una misma venta.' },
      { icon: Sell, title: 'Precio de mayoreo', desc: 'Define el precio y la cantidad mínima: se aplica solo al llegar a ella.' },
      { icon: Scale, title: 'Venta por unidad y a granel', desc: 'Vende por pieza, kilo, litro, metro, costal o bote, incluso por monto: "dame $20 de queso".' },
      { icon: Print, title: 'Compatible con tu equipo', desc: 'Usa lector de código de barras e impresora térmica en computadora, o vende desde celular y tableta escaneando con la cámara.' },
    ],
  },
  {
    key: 'caja', label: 'Caja y clientes', mockup: CashMockup,
    features: [
      { icon: PointOfSale, title: 'Corte de caja automático', desc: 'Ventas por forma de pago, entradas y salidas con concepto y monto, todo en un solo resumen.' },
      { icon: Savings, title: 'Ganancia al instante', desc: 'Conoce el costo y la ganancia de tus ventas del día o de cualquier periodo.' },
      { icon: LocalOffer, title: 'Clientes y descuentos', desc: 'Guarda a tus clientes con su descuento: se aplica solo al cobrar.' },
      { icon: BookmarkAdded, title: 'Apartados con abonos', desc: 'Aparta con anticipo y registra abonos hasta liquidar. Lo apartado queda reservado para ese cliente.' },
      { icon: AssignmentReturn, title: 'Devoluciones y cancelaciones', desc: 'Devuelve parte de una venta o cancélala completa, con el motivo siempre registrado.' },
    ],
  },
  {
    key: 'inventario', label: 'Inventario y catálogo', mockup: InventoryMockup,
    features: [
      { icon: History, title: 'Historial de stock', desc: 'Cada movimiento registra quién, cuándo y cuánto cambió.' },
      { icon: PriceChange, title: 'Cambio masivo de precios', desc: 'Actualiza costo, precio y mayoreo de varios productos en 2 clics, con registro de antes, después, fecha y responsable.' },
      { icon: PhotoCamera, title: 'Catálogo con fotos', desc: 'Toma la foto con tu celular y distingue al instante productos parecidos al vender.' },
      { icon: Inventory2, title: 'Desempaque', desc: 'Convierte un costal de 20 kg en kilos listos para vender a granel, con un clic.' },
      { icon: UploadFile, title: 'Importación desde Excel', desc: 'Sube tu catálogo y el sistema revisa los datos antes de importarlos.' },
    ],
  },
  {
    key: 'sucursales', label: 'Sucursales y análisis', mockup: BranchesMockup,
    features: [
      { icon: SyncAlt, title: 'Traspasos entre tiendas', desc: 'Consulta el stock de otras tiendas y pide mercancía con un botón. El traspaso se confirma al escanear.' },
      { icon: LocalShipping, title: 'Distribución desde almacén', desc: 'El almacén arma los envíos viendo el stock de todas las tiendas, y cada tienda confirma lo que recibe.' },
      { icon: Insights, title: 'Tableros de ventas', desc: 'Ventas, ganancia y ticket promedio: descubre tu mejor tienda, día y hora.' },
      { icon: TrendingDown, title: 'Cancelaciones y devoluciones', desc: 'Mide cuánto se cancela o devuelve, en qué tienda, cuándo y por qué.' },
      { icon: Badge, title: 'Vendedores y permisos', desc: 'Vendedores ilimitados por tienda con tres roles (dueño, administrador y vendedor) y ventas por vendedor.' },
    ],
  },
  {
    key: 'control', label: 'Control total del inventario', mockup: null,
    features: [
      { icon: ManageSearch, title: 'Auditoría interna', desc: 'Detecta diferencias de stock, movimientos que no cuadran, códigos repetidos, errores de costo o mayoreo y productos sin movimiento.' },
      { icon: HowToReg, title: 'Ajustes con aprobación', desc: 'Vendedores y administradores piden el ajuste con la cantidad real y el dueño lo aprueba.' },
      { icon: Lock, title: 'Stock, caja y precios protegidos', desc: 'Solo el dueño cambia el stock, edita entradas y salidas de dinero y modifica precios. El costo y el mayoreo nunca superan el precio de venta.' },
      { icon: QrCodeScanner, title: 'Traspasos verificados', desc: 'Solo se envía lo que hay en stock, la tienda confirma escaneando lo que recibe y el dueño puede corregir cantidades.' },
    ],
  },
];
