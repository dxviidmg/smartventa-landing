import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Inventory2Outlined,
  PointOfSaleOutlined,
  SwapHorizOutlined,
  DashboardOutlined,
  PeopleOutlined,
  HistoryOutlined,
  Store,
  Assessment,
  AdminPanelSettings,
} from "@mui/icons-material";

const Features = () => {
  const mainFeatures = [
    {
      icon: <Inventory2Outlined sx={{ fontSize: 48 }} />,
      title: "Gestión de Productos",
      description: "Administra tu catálogo completo con precios unificados en todas tus tiendas",
      details: [
        'Calcula ganancias automáticamente desde el costo',
        'Precio unificado en todas las tiendas',
        'Precio especial para ventas al mayoreo',
        'Organiza por marca y departamento',
        'Códigos de barras y SKU',
        'Imágenes de productos',
        'Importación masiva vía Excel',
      ],
    },
    {
      icon: <Store sx={{ fontSize: 48 }} />,
      title: "Gestión de Almacenes",
      description: "Controla el inventario de tus almacenes y distribúyelo a tus tiendas",
      details: [
        'Inventario separado por almacén',
        'Distribución de productos a tiendas',
        'Control de stock centralizado',
        'Seguimiento de productos en tránsito',
      ],
    },
    {
      icon: <Assessment sx={{ fontSize: 48 }} />,
      title: "Control de Inventario",
      description: "Monitorea el stock de todas tus sucursales y almacenes",
      details: [
        'Actualización de stock en tiempo real',
        'Inventario por tienda y almacén',
        'Alertas de productos con bajo stock',
        'Visibilidad total de inventario en todas las ubicaciones',
        'Importación masiva de inventario vía Excel',
      ],
    },
    {
      icon: <SwapHorizOutlined sx={{ fontSize: 48 }} />,
      title: "Transferencias entre Sucursales",
      description: "Mueve inventario entre tiendas y almacenes con trazabilidad completa",
      details: [
        'Solicitud de productos entre tiendas',
        'Aprobación y confirmación de transferencias',
        'Distribución desde almacenes a tiendas',
        'Seguimiento de productos en tránsito',
        'Actualización automática de inventarios',
        'Historial completo de movimientos',
      ],
    },
    {
      icon: <PointOfSaleOutlined sx={{ fontSize: 48 }} />,
      title: "Punto de Venta",
      description: "Procesa ventas de forma ágil con múltiples métodos de pago",
      details: [
        'Interfaz rápida e intuitiva',
        'Compatible con lectores de código de barras',
        'Conexión directa con impresoras de tickets',
        'Múltiples métodos de pago',
        'Historial completo de transacciones',
        'Búsqueda y filtrado avanzado de ventas',
      ],
    },
    {
      icon: <PeopleOutlined sx={{ fontSize: 48 }} />,
      title: "Clientes y Descuentos",
      description: "Fideliza a tus clientes con descuentos personalizados",
      details: [
        'Registro de clientes',
        'Descuentos personalizados por cliente',
        'Historial de compras por cliente',
        'Información de contacto del cliente',
      ],
    },
    {
      icon: <DashboardOutlined sx={{ fontSize: 48 }} />,
      title: "Dashboard y Reportes",
      description: "Visualiza el rendimiento de tu negocio con métricas en tiempo real",
      details: [
        'Gráficos interactivos de ventas (diarias, mensuales, anuales)',
        'Análisis por hora, día de la semana y día del mes',
        'Comparación de rendimiento entre tiendas',
        'Métricas de ventas: cantidad vs. monto total',
        'Visualización de promedios automáticos',
        'Exportación de reportes a Excel',
      ],
    },
    {
      icon: <AdminPanelSettings sx={{ fontSize: 48 }} />,
      title: "Gestión de Empleados",
      description: "Administra tu equipo con roles y permisos personalizados",
      details: [
        'Autenticación segura',
        'Roles y permisos personalizables',
        'Control de acceso por tienda',
        'Asignación de empleados por sucursal',
        'Registro de actividad de usuarios',
      ],
    },
    {
      icon: <HistoryOutlined sx={{ fontSize: 48 }} />,
      title: "Auditoría y Trazabilidad",
      description: "Registros completos de todos los movimientos para máxima transparencia",
      details: [
        'Registro completo de movimientos de inventario',
        'Historial de cambios con fecha y usuario',
        'Auditorías periódicas de stock',
        'Detección de discrepancias',
        'Reportes de auditoría exportables',
      ],
    },
  ];

  return (
    <Box id="features" sx={{ py: { xs: 8, md: 12 }, bgcolor: "background.default" }}>
      <Container maxWidth="xl">
        <Stack spacing={6}>
          <Stack spacing={2} alignItems="center" textAlign="center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                sx={{ fontSize: { xs: "2rem", md: "2.5rem" }, color: "text.primary" }}
              >
                Todo lo que necesitas en una sola plataforma
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography
                variant="body1"
                sx={{
                  color: "text.secondary",
                  maxWidth: "700px",
                  fontSize: "1.1rem",
                }}
              >
                Smartventa incluye todas las herramientas para gestionar tu negocio multi-tienda
              </Typography>
            </motion.div>
          </Stack>

          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {mainFeatures.map((feature, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ height: '100%', perspective: '1000px' }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      height: '100%',
                      minHeight: '350px',
                      transformStyle: 'preserve-3d',
                      transition: 'transform 0.6s',
                      cursor: 'pointer',
                      '&:hover': {
                        '& .card-front': {
                          transform: 'rotateY(180deg)',
                        },
                        '& .card-back': {
                          transform: 'rotateY(0deg)',
                        },
                      },
                    }}
                  >
                    {/* Frente de la card */}
                    <Card
                      className="card-front"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        p: 4,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        textAlign: 'center',
                        borderRadius: 3,
                        backfaceVisibility: 'hidden',
                        transition: 'transform 0.6s',
                        boxShadow: 2,
                      }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <motion.div
                          animate={{ color: ['#04346b', '#1976d2', '#04346b'] }}
                          transition={{ duration: 4, delay: index * 0.3, repeat: Infinity, ease: "easeInOut" }}
                        >
                          {feature.icon}
                        </motion.div>
                      </motion.div>
                      <Typography variant="h6" sx={{ fontWeight: 600, mt: 2, mb: 2 }}>
                        {feature.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: "text.secondary", lineHeight: 1.7 }}>
                        {feature.description}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "primary.main", mt: 'auto', pt: 2, fontWeight: 600 }}>
                        Pasa el cursor para ver detalles →
                      </Typography>
                    </Card>

                    {/* Reverso de la card */}
                    <Card
                      className="card-back"
                      sx={{
                        position: 'absolute',
                        width: '100%',
                        height: '100%',
                        p: 3,
                        borderRadius: 3,
                        backfaceVisibility: 'hidden',
                        transform: 'rotateY(-180deg)',
                        transition: 'transform 0.6s',
                        bgcolor: 'primary.main',
                        color: 'white',
                        boxShadow: 4,
                        overflow: 'auto',
                      }}
                    >
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: 'white' }}>
                        {feature.title}
                      </Typography>
                      <Stack spacing={1.5}>
                        {feature.details.map((detail, i) => (
                          <Stack key={i} direction="row" spacing={1.5} alignItems="center">
                            <Box sx={{ width: 6, height: 6, borderRadius: '50%', bgcolor: 'white', flexShrink: 0 }} />
                            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.95)', lineHeight: 1.7, fontSize: '0.9rem' }}>
                              {detail}
                            </Typography>
                          </Stack>
                        ))}
                      </Stack>
                    </Card>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
