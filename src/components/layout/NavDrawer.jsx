'use client';

import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { CONFIG } from '../../constants';

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
  <Drawer anchor="right" open={open} onClose={onClose}>
    <Box sx={{ width: 280, pt: 1 }}>
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', px: 1 }}>
        <IconButton onClick={onClose}><CloseIcon /></IconButton>
      </Box>
      <List>
        {navItems.map(({ label, id }) => (
          <ListItem key={id} disablePadding>
            <ListItemButton onClick={() => onNav(id)}>
              <ListItemText primary={label} />
            </ListItemButton>
          </ListItem>
        ))}
        <ListItem disablePadding>
          <ListItemButton onClick={() => window.open(CONFIG.urls.app, '_blank')}>
            <ListItemText primary="Iniciar Sesión" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={onClose}>
            <ListItemText primary="Solicitar Demo" primaryTypographyProps={{ color: 'secondary.main', fontWeight: 600 }} />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  </Drawer>
);

export default NavDrawer;
