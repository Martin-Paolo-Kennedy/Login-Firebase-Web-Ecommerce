import React from 'react';
import { Box, Card, Typography, Grid } from '@mui/material';
import c01 from '../assets/casaca-mujer.jpeg'; // Imagen de ejemplo
import c02 from '../assets/carrusel2.jpg';  // Imagen de ejemplo
import c03 from '../assets/carrusel3.jpg';  // Imagen de ejemplo

function Article() {
    const products = [
        { id: 1, name: 'Casaca Mujer', category: 'Ropa', price: '$50', image: c01 },
        { id: 2, name: 'Camisa Hombre', category: 'Ropa', price: '$35', image: c02 },
        { id: 3, name: 'Pantalón', category: 'Ropa', price: '$40', image: c03 },
        { id: 4, name: 'Chaqueta', category: 'Accesorios', price: '$60', image: c01 },
        { id: 5, name: 'Vestido', category: 'Ropa', price: '$45', image: c02 },
        { id: 6, name: 'Cinturón', category: 'Accesorios', price: '$25', image: c03 },
        { id: 7, name: 'Sombrero', category: 'Accesorios', price: '$30', image: c01 },
        { id: 8, name: 'Pantalón Corto', category: 'Ropa', price: '$35', image: c02 },
        { id: 9, name: 'Abrigo', category: 'Ropa', price: '$70', image: c03 },
        { id: 10, name: 'Gorra', category: 'Accesorios', price: '$20', image: c01 },
    ];

    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                width: 'calc(100% - 240px)', // Reduce el espacio entre los lados
                padding: 2,
            }}
        >
            <Typography
                variant="h5"
                sx={{
                    fontWeight: 'bold',
                    marginBottom: 2,
                }}
            >
                Artículos
            </Typography>

            {/* Caja que permite scroll horizontal */}
            <Box
                sx={{
                    display: 'flex',
                    overflowX: 'auto',  // Activa el desplazamiento horizontal
                    paddingBottom: 2,   // Espacio debajo del contenido
                    scrollbarWidth: 'thin', // Propiedad para ajustar el grosor del scroll
                }}
            >
                <Box
                    
                    container
                    spacing={2} // Espacio entre los Card
                    sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'nowrap', // Impide el salto de línea de las tarjetas
                    }}
                >
                    {products.map((product) => (
                        <Grid item key={product.id} md={3}>
                            <Card
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row', // Usar dirección en fila para imagen a la izquierda y contenido a la derecha
                                    width: '200px', // Ajustamos el ancho del Card
                                    height: '120px', // Altura del Card
                                    borderRadius: 2,
                                    boxShadow: 3,
                                    padding: 2,
                                    alignItems: 'center', // Alineación central del contenido
                                }}
                            >
                                {/* Imagen del producto */}
                                <Box
                                    component="img"
                                    src={product.image}
                                    alt={product.name}
                                    sx={{
                                        width: '120px', // Ancho de la imagen
                                        height: '120px', // Altura de la imagen
                                        objectFit: 'cover',
                                        borderRadius: 2,
                                        marginRight: 2, // Espacio entre la imagen y el contenido
                                    }}
                                />
                                {/* Contenido del producto */}
                                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
                                    <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Categoría: {product.category}
                                    </Typography>
                                    <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                                        {product.price}
                                    </Typography>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}

export default Article;
