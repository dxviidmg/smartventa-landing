import { Box, Container, Typography, Grid, Card, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import {
  Inventory2Outlined,
  PointOfSaleOutlined,
  SwapHorizOutlined,
  DashboardOutlined,
  PeopleOutlined,
  HistoryOutlined,
} from "@mui/icons-material";

const Features = () => {
  const features = [
    {
      icon: <Inventory2Outlined sx={{ fontSize: 48 }} />,
      title: "Inventario en tiempo real",
      description:
        "Controla el stock de todas tus sucursales en tiempo real con actualizaciones automáticas.",
    },
    {
      icon: <PointOfSaleOutlined sx={{ fontSize: 48 }} />,
      title: "Sistema de ventas rápido",
      description:
        "Procesa ventas de forma ágil con múltiples métodos de pago e impresión de tickets.",
    },
    {
      icon: <SwapHorizOutlined sx={{ fontSize: 48 }} />,
      title: "Transferencias entre tiendas",
      description:
        "Distribuye inventario entre sucursales de manera eficiente y con trazabilidad completa.",
    },
    {
      icon: <DashboardOutlined sx={{ fontSize: 48 }} />,
      title: "Dashboard con métricas",
      description:
        "Visualiza ventas, inventario y rendimiento de cada tienda desde un solo lugar.",
    },
    {
      icon: <PeopleOutlined sx={{ fontSize: 48 }} />,
      title: "Gestión de empleados",
      description:
        "Administra trabajadores por tienda con roles y permisos personalizados.",
    },
    {
      icon: <HistoryOutlined sx={{ fontSize: 48 }} />,
      title: "Auditoría de inventario",
      description:
        "Logs completos de todos los movimientos de inventario para máxima transparencia.",
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
                Smartventa incluye todas las herramientas para gestionar tu
                negocio multi-tienda
              </Typography>
            </motion.div>
          </Stack>

          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            {features.map((feature, index) => (
              <Grid key={index} size={{ xs: 2, sm: 4, md: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} style={{ height: '100%' }}>
                    <Card
                      sx={{
                        width: "100%",
                        height: "100%",
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        borderRadius: 3,
                        transition: "box-shadow 0.3s ease",
                        "&:hover": {
                          boxShadow: "0 12px 24px rgba(0,0,0,0.1)",
                        },
                      }}
                    >
                      <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                        <Box sx={{ color: "primary.main", mb: 2 }}>
                          {feature.icon}
                        </Box>
                      </motion.div>

                      <Typography
                        variant="h6"
                        sx={{ fontWeight: 600, mb: 2, minHeight: "3em" }}
                      >
                        {feature.title}
                      </Typography>

                      <Typography
                        variant="body2"
                        sx={{
                          color: "text.secondary",
                          lineHeight: 1.7,
                          flexGrow: 1,
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Card>
                  </motion.div>
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
