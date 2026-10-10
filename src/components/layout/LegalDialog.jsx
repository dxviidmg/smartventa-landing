'use client';

import { Box, Typography, Stack, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { POPPINS, CONFIG, BLUE_BG } from '../../constants';

const paper = { sx: { borderRadius: '24px', background: BLUE_BG, color: '#fff' } };
const titleSx = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: POPPINS, fontWeight: 500, color: '#fff' };
const sectionTitleSx = { fontFamily: POPPINS, fontWeight: 500, mb: 1, fontSize: '1rem', color: '#fff' };

/** Modal with one legal document: a list of titled sections. */
const LegalDialog = ({ open, onClose, document }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={paper}>
    <DialogTitle sx={titleSx}>
      {document.title}
      <IconButton aria-label={document.closeLabel} onClick={onClose} sx={{ color: '#fff' }}>
        <Close />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <Stack spacing={3}>
        <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.8)' }}>
          {document.updated}
        </Typography>
        {document.sections.map(({ title, text }) => (
          <Box key={title}>
            <Typography variant="h6" component="p" sx={sectionTitleSx}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'rgba(255,255,255,0.92)', lineHeight: 1.8 }}>
              {text.replace('{phone}', CONFIG.contact.phone).replace('{email}', CONFIG.contact.email ?? '')}
            </Typography>
          </Box>
        ))}
      </Stack>
    </DialogContent>
  </Dialog>
);

export default LegalDialog;
