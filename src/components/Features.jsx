import { Box, Container, Typography, Grid, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  SearchOutlined, ShoppingCart, AttachMoney,
  ViewStream, Keyboard,
  PrintOutlined,
  Storefront, AccountTree, Inventory,
  SwapHoriz, Warehouse, CheckCircle,
  People, AttachMoney as Money,
  Assessment, BarChart, PieChart,
  TrendingUp, BugReport, FilterAlt,
  Description, PictureAsPdf, History,
  Lock, DarkMode, WhatsApp,
  Help, Update, Warning,
} from '@mui/icons-material';

const features = [
  { icon: <SearchOutlined />, title: 'Búsqueda instantánea', desc: 'Por código de barras o nombre de producto. Respuesta en milisegundos.' },
  { icon: <ShoppingCart />, title: 'Múltiples carritos simultáneos', desc: 'Atiende a varios clientes al mismo tiempo sin perder información.' },
  { icon: <AttachMoney />, title: 'Precios dinámicos', desc: 'Precio unitario y precio mayoreo automático según cantidad.' },
  { icon: <ViewStream />, title: 'Una pantalla para todo', desc: 'Ventas, traspasos y distribuciones desde la misma interfaz.' },
  { icon: <Keyboard />, title: 'Atajos de teclado', desc: 'Ctrl+Q/W para buscar, Ctrl+E/R/T/Y/U para tipo de operación, Ctrl+B para enfocar búsqueda.' },
  { icon: <PrintOutlined />, title: 'Impresión de tickets', desc: 'Compatible con impresoras térmicas estándar.' },
  { icon: <Storefront />, title: 'Panel centralizado', desc: 'Administra todas tus tiendas y almacenes desde un solo lugar.' },
  { icon: <AccountTree />, title: 'Cambio instantáneo', desc: 'Pasa de una tienda a otra sin cerrar sesión.' },
  { icon: <Inventory />, title: 'Indicador de catálogo', desc: 'Sabes qué tiendas tienen el catálogo completo y cuáles les faltan productos.' },
  { icon: <Inventory />, title: 'Stock unificado', desc: 'Consulta cuánto tienes en todas tus tiendas simultáneamente.' },
  { icon: <ShoppingCart />, title: 'Reservas inteligentes', desc: 'El sistema reserva productos entre carritos para evitar ventas duplicadas.' },
  { icon: <History />, title: 'Historial completo', desc: 'Cada movimiento de inventario queda registrado (ventas, traspasos, ajustes).' },
  { icon: <SwapHoriz />, title: 'Traspasos', desc: 'Mueve mercancía de una tienda a otra con trazabilidad completa.' },
  { icon: <Warehouse />, title: 'Distribuciones', desc: 'Envía productos desde almacén a múltiples tiendas en una sola operación.' },
  { icon: <CheckCircle />, title: 'Confirmación obligatoria', desc: 'Cada tienda confirma lo que recibe.' },
  { icon: <People />, title: 'Registro completo', desc: 'Historial de compras por cliente.' },
  { icon: <Money />, title: 'Descuentos personalizados', desc: 'Aplica descuentos por porcentajes.' },
  { icon: <Assessment />, title: 'Resumen diario', desc: 'Ventas por método de pago (efectivo, tarjeta, transferencia).' },
  { icon: <BarChart />, title: 'Movimientos detallados', desc: 'Registra entradas y salidas de dinero.' },
  { icon: <Description />, title: 'Exportación a Excel', desc: 'Descarga tu corte de caja con un clic.' },
  { icon: <PieChart />, title: 'Corte parcial y total', desc: 'Consulta el estado actual o el cierre del día.' },
  { icon: <ShoppingCart />, title: 'Cancelación total', desc: 'Cancela una venta completa con motivo registrado.' },
  { icon: <ShoppingCart />, title: 'Devolución parcial', desc: 'Devuelve solo algunos productos de una venta.' },
  { icon: <Description />, title: 'Motivos documentados', desc: 'Todo queda registrado para análisis.' },
  { icon: <FilterAlt />, title: 'Filtros rápidos', desc: 'Encuentra fácilmente ventas canceladas o con devolución.' },
  { icon: <Assessment />, title: 'Tablero de ventas', desc: 'KPIs clave: mejor/peor tienda, mejor/peor día, hora pico, ticket promedio.' },
  { icon: <TrendingUp />, title: 'Heatmap de ventas', desc: 'Visualiza cuándo y dónde se vende más.' },
  { icon: <BarChart />, title: 'Análisis de cancelaciones', desc: 'Tablero dedicado a ventas canceladas y devueltas.' },
  { icon: <TrendingUp />, title: 'Top de marcas y productos', desc: 'Qué productos y marcas venden más (y cuáles menos).' },
  { icon: <TrendingUp />, title: 'Gráficas de tendencia', desc: 'Compara ventas por día, semana o mes.' },
  { icon: <BugReport />, title: 'Detección automática', desc: 'Ventas duplicadas, códigos repetidos, precios faltantes, stock faltante, productos sin movimiento.' },
  { icon: <FilterAlt />, title: 'Acceso configurable', desc: 'Restringe quién puede ver los tableros por horario.' },
  { icon: <Description />, title: 'Importación masiva', desc: 'Carga miles de productos desde Excel en minutos.' },
  { icon: <Description />, title: 'Plantillas descargables', desc: 'Formato listo para llenar.' },
  { icon: <CheckCircle />, title: 'Validación previa', desc: 'El sistema revisa errores antes de importar.' },
  { icon: <History />, title: 'Historial de precios', desc: 'Ve cómo ha cambiado el precio de cada producto.' },
  { icon: <PictureAsPdf />, title: 'Imágenes de productos', desc: 'Agrega fotos a cada producto para identificación visual.' },
  { icon: <Lock />, title: 'Tres niveles de acceso', desc: 'Dueño, Administrador y Vendedor con vistas personalizadas.' },
  { icon: <DarkMode />, title: 'Modo oscuro/claro', desc: 'Elige la apariencia que prefieras.' },
  { icon: <WhatsApp />, title: 'WhatsApp directo', desc: 'Botón para contactar soporte con información de tu tienda prellenada.' },
  { icon: <Help />, title: 'Ayuda contextual', desc: 'Botón de ayuda en cada página que explica qué puedes hacer ahí.' },
  { icon: <Update />, title: 'Solicitudes de ajuste', desc: 'Vendedores y admins pueden pedir cambios de stock; el dueño aprueba o rechaza.' },
  { icon: <Update />, title: 'Notificaciones en tiempo real', desc: 'Alertas instantáneas sobre traspasos, distribuciones y solicitudes.' },
  { icon: <Warning />, title: 'Indicador de ventas duplicadas', desc: 'Alerta visual cuando hay ventas duplicadas en el sistema.' },
];

const Features = () => (
  <Box id="features" sx={{ py: { xs: 6, md: 8 }, bgcolor: 'background.paper' }}>
    <Container maxWidth="lg">
      <Stack spacing={8}>
        <Stack spacing={2} alignItems="center" textAlign="center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <Typography variant="overline" sx={{ color: 'secondary.main', fontWeight: 700, letterSpacing: 2 }}>
              Características
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
            <Typography variant="h2" sx={{ fontSize: { xs: '2rem', md: '2.8rem' }, maxWidth: 700 }}>
              Todo lo que necesitas en una plataforma
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }}>
            <Typography variant="body1" sx={{ color: 'text.secondary', maxWidth: 600, fontSize: '1.05rem' }}>
              Herramientas completas para gestionar tu negocio multi-tienda sin complicaciones.
            </Typography>
          </motion.div>
        </Stack>

        <Grid container spacing={3}>
          {features.map((f, i) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={i}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -6 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                style={{ height: '100%' }}
              >
                <Box
                  sx={{
                    p: 3.5, height: '100%', borderRadius: 4,
                    border: '1px solid', borderColor: 'divider',
                    transition: 'all 0.3s ease',
                    '&:hover': { borderColor: 'primary.light', boxShadow: '0 8px 30px rgba(0,0,0,0.06)', transform: 'translateY(-2px)' },
                  }}
                >
                  <Box sx={{
                    width: 44, height: 44, borderRadius: 2.5,
                    bgcolor: 'primary.main', color: '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    mb: 2, '& svg': { fontSize: 22 },
                  }}>
                    {f.icon}
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5, fontSize: '1rem' }}>
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {f.desc}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Container>
  </Box>
);

export default Features;
