'use client';

import { Box, Typography, Stack, Dialog, DialogTitle, DialogContent, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import { POPPINS, CONFIG } from '../../constants';

const paper = { sx: { borderRadius: '24px' } };
const titleSx = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: POPPINS, fontWeight: 500, color: '#0F172A' };
const sectionTitleSx = { fontFamily: POPPINS, fontWeight: 500, mb: 1, fontSize: '1rem', color: '#0F172A' };

/** Modal with one legal document: a list of titled sections. */
const LegalDialog = ({ open, onClose, document }) => (
  <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth PaperProps={paper}>
    <DialogTitle sx={titleSx}>
      {document.title}
      <IconButton aria-label={document.closeLabel} onClick={onClose}>
        <Close />
      </IconButton>
    </DialogTitle>
    <DialogContent>
      <Stack spacing={3}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {document.updated}
        </Typography>
        {document.sections.map(({ title, text }) => (
          <Box key={title}>
            <Typography variant="h6" component="p" sx={sectionTitleSx}>
              {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8 }}>
              {text.replace('{phone}', CONFIG.contact.phone)}
            </Typography>
          </Box>
        ))}
      </Stack>
    </DialogContent>
  </Dialog>
);

export default LegalDialog;
