import React from 'react';
import { Box, Card, CardContent, Typography, Link } from '@mui/material';

// Importación de imágenes
import c01 from '../assets/casaca-mujer.jpeg';
import c02 from '../assets/zapato-mujer.jpeg';
import c03 from '../assets/polo-hombre.jpeg';
import c04 from '../assets/pantalo-hombre.jpeg';

function ProductCards() {
  const products = [
    { id: 1, name: 'Producto 1', price: '$100', image: c01 },
    { id: 2, name: 'Producto 2', price: '$200', image: c02 },
    { id: 3, name: 'Producto 3', price: '$300', image: c03 },
    { id: 4, name: 'Producto 4', price: '$400', image: c04 },
  ];

  return (
    <Box
      display="flex"
      flexWrap="wrap"
      justifyContent="space-between"
      gap={2}
      margin="2vh auto"
      width="90%"
    >
      {products.map((product) => (
        <Card
          key={product.id}
          sx={{
            width: '22%', // Ajusta el ancho para que quepan 4 columnas
            borderRadius: 2,
            boxShadow: 3,
            padding: 1,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}
        >
          {/* Imagen del producto */}
          <Box
            sx={{
              width: '60px',
              height: '60px',
              borderRadius: 1,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </Box>

          {/* Contenido del producto */}
          <CardContent
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              paddingLeft: 1,
            }}
          >
            <Box>
              {/* Nombre del producto */}
              <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                {product.name}
              </Typography>

              {/* Precio */}
              <Typography variant="body2" color="textSecondary">
                {product.price}
              </Typography>
            </Box>

            {/* Enlace de "Mostrar más" */}
            <Box display="flex" justifyContent="center" mt={1}>
              <Link href="#" underline="hover" variant="body2" color="primary">
                Mostrar más
              </Link>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

export default ProductCards;
