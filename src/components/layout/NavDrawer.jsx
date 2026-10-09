'use client';

import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { CONFIG, POPPINS, NAV_BG, ACCENT } from '../../constants';

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
  </svg>
);

/**
 * Mobile navigation drawer with section links and auth actions.
 * @param {object} props
 * @param {boolean} props.open - Whether the drawer is visible
 * @param {function} props.onClose - Callback to close the drawer
 * @param {Array<{label: string, id: string}>} props.navItems - Navigation items to render
 * @param {function} props.onNav - Callback when a nav item is clicked, receives section id
 */
const NavDrawer = ({ open, onClose, navItems, onNav }) => (
  <Drawer anchor="right" open={open} onClose={onClose} PaperProps={{ sx: { background: NAV_BG, color: '#fff' } }}>
    <Box sx={{ width: 280, pt: 1 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', pl: 2, pr: 1 }}>
        <Box component="img" src="/logo-white.svg" alt={CONFIG.company.name} width={143} height={30} sx={{ height: 30, width: 'auto' }} />
        <IconButton aria-label="Cerrar menú" onClick={onClose} sx={{ color: '#fff' }}><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => onNav(id)}>
              <ListItemText primary={label} primaryTypographyProps={{ fontFamily: POPPINS, fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open(`${CONFIG.urls.app}/registrarme`, '_blank')}>
            <ListItemText primary="Probar SmartVenta" primaryTypographyProps={{ color: ACCENT, fontFamily: POPPINS, fontWeight: 500 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

export default NavDrawer;
