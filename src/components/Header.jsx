import React from 'react';
import { AppBar, Box, Toolbar, IconButton, InputBase, Badge, Typography } from '@mui/material';
import { Search as SearchIcon, Favorite as FavoriteIcon, ShoppingBag as ShoppingBagIcon } from '@mui/icons-material';

function Header() {
  return (
    <AppBar position="sticky" sx={{ marginTop: '4vh', backgroundColor: '#f8f8f8' }}> {/* Fondo claro para mejor contraste */}
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {/* Logo o título */}
        <Typography variant="h6" color="text.primary" sx={{ flexGrow: 1 }}> {/* Cambiar color del texto */}
          LOGO
        </Typography>

        {/* Barra de búsqueda */}
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          borderRadius: 1,
          width: '50%',
          backgroundColor: '#e0e0e0', // Fondo claro para la barra de búsqueda
          padding: '2px 8px', // Espaciado interno
        }}>
          <SearchIcon sx={{ color: '#424242' }} /> {/* Color oscuro para el icono */}
          <InputBase
            sx={{
              color: '#424242', // Color oscuro para el texto
              ml: 1,
              flex: 1,
            }}
            placeholder="Buscar..."
            inputProps={{ 'aria-label': 'buscar' }}
          />
        </Box>

        {/* Íconos a la derecha */}
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          {/* Ícono de Favoritos */}
          <IconButton sx={{ color: '#424242' }}> {/* Color oscuro para el icono */}
            <FavoriteIcon />
          </IconButton>

          {/* Ícono de Bolsa de compra */}
          <IconButton sx={{ color: '#424242' }}> {/* Color oscuro para el icono */}
            <Badge badgeContent={4} color="error">
              <ShoppingBagIcon />
            </Badge>
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Header;
