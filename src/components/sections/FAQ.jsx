import { Box, Container, Typography, Stack, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import { motion } from 'framer-motion';
import Add from '@mui/icons-material/Add';
import { faqItem, sectionPadding } from '../../constants';
import SectionHeader from '../ui/SectionHeader';
import { faqs } from '../../data/faqs';

const FAQ = () => (
  <>
    <Box id="faq" sx={{ ...sectionPadding, bgcolor: 'surface.alt' }}>
      <Container maxWidth="md">
        <SectionHeader
          overline="FAQ"
          title="Preguntas frecuentes"
          sx={{ mb: 6 }}
        />

        <Stack spacing={1.5}>
          {faqs.map((faq, i) => (
            <motion.div key={i} {...faqItem} transition={{ delay: i * 0.04 }}>
              <Accordion
                elevation={0}
                sx={{
                  bgcolor: 'background.paper',
                  border: '1px solid', borderColor: 'divider', borderRadius: '12px !important',
                  '&:before': { display: 'none' },
                  '&.Mui-expanded': { borderColor: 'primary.light', bgcolor: 'rgba(4,52,107,0.02)' },
                  transition: 'border-color 0.3s ease, background-color 0.3s ease',
                  '&:hover': { borderColor: 'primary.main', bgcolor: 'rgba(4,52,107,0.02)' },
                }}
              >
                <AccordionSummary
                  expandIcon={<Add sx={{ fontSize: 20, transition: 'transform 0.3s ease', '.Mui-expanded &': { transform: 'rotate(180deg)' } }} />}
                  sx={{ '&:hover': { bgcolor: 'rgba(4,52,107,0.02)' } }}
                >
                  <Typography sx={{ fontWeight: 600, fontSize: '0.95rem' }}>{faq.q}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ pt: 0 }}>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>{faq.a}</Typography>
                </AccordionDetails>
              </Accordion>
            </motion.div>
          ))}
        </Stack>
      </Container>
    </Box>
  </>
);

export default FAQ;
