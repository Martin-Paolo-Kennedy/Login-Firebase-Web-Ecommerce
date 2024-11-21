import React, { useState, useEffect } from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

import B01 from '../assets/carrusel1.jpg';
import B02 from '../assets/carrusel2.jpg';
import B03 from '../assets/carrusel3.jpg';
import B04 from '../assets/carrusel4.jpg';

const images = [B01, B02, B03, B04];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    // Cambiar automáticamente las imágenes cada 3 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 3000); // 3000ms = 3 segundos

        return () => clearInterval(interval); // Limpiar el intervalo al desmontar
    }, []);

    return (
        <Box 
            display="flex" 
            flexDirection="column" 
            alignItems="center" 
            justifyContent="center" 
            position="relative" 
            width="65%" 
            height="500px" 
            margin="auto" // Centra el carrusel horizontalmente
            overflow="hidden" 
            sx={{
                marginTop: '6vh', // Agregar margen superior
            }}
        >
            <IconButton
                onClick={handlePrev}
                sx={{ position: 'absolute', top: '50%', left: '10px', zIndex: 2, transform: 'translateY(-50%)' }}
            >
                <ArrowBack />
            </IconButton>

            <Box
                component="img"
                src={images[currentIndex]}
                alt={`Slide ${currentIndex + 1}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.5s ease-in-out',
                }}
            />

            <IconButton
                onClick={handleNext}
                sx={{ position: 'absolute', top: '50%', right: '10px', zIndex: 2, transform: 'translateY(-50%)' }}
            >
                <ArrowForward />
            </IconButton>

            <Typography 
                variant="caption" 
                sx={{ position: 'absolute', bottom: '20px', color: 'white', backgroundColor: 'rgba(0,0,0,0.5)', padding: '5px 10px', borderRadius: '5px' }}
            >
                {`Slide ${currentIndex + 1} of ${images.length}`}
            </Typography>
        </Box>
    );
}

export default Carousel;
