import { Box, Container, Typography, Grid, TextField, Button, Stack, Paper, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SendIcon from '@mui/icons-material/Send';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

export default function Contact() {
  return (
    <>
      <Box sx={{ 
        py: 12, 
        background: 'linear-gradient(180deg, #f8fafc 0%, #ffffff 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Decorative elements */}
        <Box sx={{
          position: 'absolute',
          top: '20%',
          right: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(4, 52, 107, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />
        <Box sx={{
          position: 'absolute',
          bottom: '20%',
          left: '5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 102, 204, 0.08) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }} />

        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Typography 
                  variant="h2" 
                  sx={{ 
                    mb: 3, 
                    fontWeight: 800, 
                    fontSize: { xs: '2.5rem', md: '3.5rem' },
                    background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  ¿Listo para transformar tu negocio?
                </Typography>
                <Typography variant="h6" color="text.secondary" sx={{ mb: 5, lineHeight: 1.7, fontSize: '1.1rem' }}>
                  Solicita una demostración gratuita y descubre cómo SmartVenta puede llevar tu negocio al siguiente nivel
                </Typography>

                <Stack spacing={3}>
                  {[
                    { icon: EmailIcon, label: 'Email', value: 'contacto@smartventa.com', color: '#3b82f6' },
                    { icon: PhoneIcon, label: 'Teléfono', value: '+52 (55) 1234-5678', color: '#10b981' },
                    { icon: LocationOnIcon, label: 'Ubicación', value: 'Ciudad de México, México', color: '#8b5cf6' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Paper
                        elevation={0}
                        sx={{
                          p: 2.5,
                          borderRadius: 3,
                          border: '2px solid #e2e8f0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            borderColor: item.color,
                            boxShadow: `0 8px 24px ${item.color}20`,
                            transform: 'translateX(8px)',
                          }
                        }}
                      >
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Box
                            sx={{
                              width: 56,
                              height: 56,
                              borderRadius: '14px',
                              background: `linear-gradient(135deg, ${item.color}15, ${item.color}30)`,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                            }}
                          >
                            <item.icon sx={{ color: item.color, fontSize: 28 }} />
                          </Box>
                          <Box>
                            <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 600 }}>
                              {item.label}
                            </Typography>
                            <Typography variant="body1" sx={{ fontWeight: 600 }}>
                              {item.value}
                            </Typography>
                          </Box>
                        </Stack>
                      </Paper>
                    </motion.div>
                  ))}
                </Stack>

                <Box sx={{ mt: 5 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 2, fontWeight: 600 }}>
                    Síguenos en redes sociales
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    {[
                      { icon: TwitterIcon, color: '#1DA1F2' },
                      { icon: FacebookIcon, color: '#4267B2' },
                      { icon: LinkedInIcon, color: '#0077B5' },
                      { icon: InstagramIcon, color: '#E4405F' }
                    ].map((social, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconButton
                          sx={{
                            width: 48,
                            height: 48,
                            background: `${social.color}15`,
                            color: social.color,
                            '&:hover': {
                              background: social.color,
                              color: 'white',
                            },
                            transition: 'all 0.3s ease'
                          }}
                        >
                          <social.icon />
                        </IconButton>
                      </motion.div>
                    ))}
                  </Stack>
                </Box>
              </motion.div>
            </Grid>

            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Paper 
                  elevation={0}
                  sx={{ 
                    p: 5,
                    borderRadius: 4,
                    background: 'white',
                    border: '2px solid #e2e8f0',
                    boxShadow: '0 20px 60px rgba(0,0,0,0.08)',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 1, fontWeight: 700 }}>
                    Solicita tu Demo Gratuita
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
                    Completa el formulario y nos pondremos en contacto contigo en menos de 24 horas
                  </Typography>
                  <Stack spacing={3}>
                    <TextField 
                      fullWidth 
                      label="Nombre completo" 
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover fieldset': {
                            borderColor: '#0066cc',
                          },
                        }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Email" 
                      type="email" 
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover fieldset': {
                            borderColor: '#0066cc',
                          },
                        }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Teléfono" 
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover fieldset': {
                            borderColor: '#0066cc',
                          },
                        }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Nombre de tu negocio" 
                      variant="outlined"
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover fieldset': {
                            borderColor: '#0066cc',
                          },
                        }
                      }}
                    />
                    <TextField 
                      fullWidth 
                      label="Mensaje" 
                      multiline 
                      rows={4} 
                      variant="outlined"
                      placeholder="Cuéntanos sobre tu negocio y cómo podemos ayudarte..."
                      sx={{
                        '& .MuiOutlinedInput-root': {
                          borderRadius: 2,
                          '&:hover fieldset': {
                            borderColor: '#0066cc',
                          },
                        }
                      }}
                    />
                    <Button 
                      variant="contained" 
                      size="large" 
                      fullWidth
                      endIcon={<SendIcon />}
                      sx={{
                        py: 1.8,
                        borderRadius: '50px',
                        textTransform: 'none',
                        fontSize: '1.1rem',
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #04346b 0%, #0066cc 100%)',
                        boxShadow: '0 8px 24px rgba(4, 52, 107, 0.3)',
                        '&:hover': {
                          background: 'linear-gradient(135deg, #0066cc 0%, #04346b 100%)',
                          boxShadow: '0 12px 32px rgba(4, 52, 107, 0.4)',
                          transform: 'translateY(-2px)',
                        },
                        transition: 'all 0.3s ease'
                      }}
                    >
                      Enviar Solicitud
                    </Button>
                  </Stack>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ 
        background: 'linear-gradient(135deg, #0a1929 0%, #04346b 100%)',
        color: 'white', 
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 30% 50%, rgba(0, 102, 204, 0.2) 0%, transparent 50%)',
        }
      }}>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Typography variant="h5" sx={{ fontWeight: 800, mb: 2 }}>
                SmartVenta
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, lineHeight: 1.7 }}>
                La solución completa para gestionar tu negocio de manera inteligente y eficiente.
              </Typography>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Enlaces Rápidos
              </Typography>
              <Stack spacing={1}>
                {['Características', 'Precios', 'Soporte', 'Blog', 'Términos'].map((link) => (
                  <Button 
                    key={link}
                    sx={{ 
                      color: 'white', 
                      justifyContent: 'flex-start',
                      textTransform: 'none',
                      opacity: 0.8,
                      '&:hover': { opacity: 1, pl: 1 },
                      transition: 'all 0.3s ease'
                    }}
                  >
                    {link}
                  </Button>
                ))}
              </Stack>
            </Grid>
            <Grid item xs={12} md={4}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 2 }}>
                Newsletter
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8, mb: 2 }}>
                Recibe las últimas novedades y tips
              </Typography>
              <Stack direction="row" spacing={1}>
                <TextField 
                  size="small"
                  placeholder="Tu email"
                  sx={{
                    flexGrow: 1,
                    '& .MuiOutlinedInput-root': {
                      bgcolor: 'rgba(255,255,255,0.1)',
                      color: 'white',
                      borderRadius: '50px',
                      '& fieldset': { borderColor: 'rgba(255,255,255,0.2)' },
                      '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.4)' },
                    }
                  }}
                />
                <IconButton 
                  sx={{ 
                    bgcolor: '#4ade80',
                    color: '#0a1929',
                    '&:hover': { bgcolor: '#22c55e' }
                  }}
                >
                  <SendIcon />
                </IconButton>
              </Stack>
            </Grid>
          </Grid>
          <Box sx={{ 
            borderTop: '1px solid rgba(255,255,255,0.1)', 
            mt: 5, 
            pt: 4,
            textAlign: 'center'
          }}>
            <Typography variant="body2" sx={{ opacity: 0.7 }}>
              © 2026 SmartVenta. Todos los derechos reservados. Hecho con ❤️ en México
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}
