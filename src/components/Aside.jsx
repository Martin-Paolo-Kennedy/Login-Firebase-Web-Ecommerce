import React from 'react';
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText, IconButton } from '@mui/material';
import { Category, ChevronRight } from '@mui/icons-material';

function Aside() {
  const categories = [
    { id: 1, name: 'Camisas', icon: <Category />, link: '/camisas' },
    { id: 2, name: 'Pantalones', icon: <Category />, link: '/pantalones' },
    { id: 3, name: 'Zapatos', icon: <Category />, link: '/zapatos' },
    { id: 4, name: 'Accesorios', icon: <Category />, link: '/accesorios' },
  ];

  return (
    <Box
      sx={{
        width: '220px', // Ancho del aside más pequeño
        height: '40vh', // Ajuste automático de altura
        backgroundColor: '#f5f5f5',
        borderRadius: '16px', // Bordes redondeados
        boxShadow: 3, // Sombra para el card
        padding: 2,
        margin: 3, // Espaciado alrededor
      }}
    >
      {/* Título */}
      <Typography
        variant="h6"
        sx={{ fontWeight: 'bold', marginBottom: 2 }}
      >
        Category
      </Typography>

      {/* Lista de categorías */}
      <List>
        {categories.map((category) => (
          <ListItem
            key={category.id}
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 16px',
              borderRadius: '8px',
              '&:hover': {
                backgroundColor: '#e0e0e0', // Fondo al pasar el mouse
              },
            }}
          >
            {/* Ícono y nombre */}
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ListItemIcon sx={{ minWidth: '32px' }}>{category.icon}</ListItemIcon>
              <ListItemText primary={category.name} />
            </Box>

            {/* Ícono de "más" */}
            <IconButton
              href={category.link}
              color="primary"
            >
              <ChevronRight />
            </IconButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default Aside;
