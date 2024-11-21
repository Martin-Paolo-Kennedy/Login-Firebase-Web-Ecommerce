import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';  // Para la redirección

// Íconos de las redes sociales
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function NavBar() {
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();  // Hook para redirigir al usuario

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = () => {
    // Aquí debes agregar la lógica para cerrar sesión. Ejemplo:
    localStorage.removeItem('authToken');  // Si usas localStorage para el token

    // Redirigir a la página de inicio de sesión
    navigate('/login');  // Puedes redirigir a cualquier página que necesites
  };

  return (
    <AppBar position="static" sx={{ width: '100%' }}>
      <Toolbar>
        {/* Íconos de redes sociales a la izquierda */}
        <Box sx={{ display: 'flex', flexGrow: 1 }}>
          <IconButton color="inherit" onClick={() => window.open('https://facebook.com')}>
            <FacebookIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => window.open('https://google.com')}>
            <GoogleIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => window.open('https://instagram.com')}>
            <InstagramIcon />
          </IconButton>
          <IconButton color="inherit" onClick={() => window.open('https://linkedin.com')}>
            <LinkedInIcon />
          </IconButton>
        </Box>

        {/* Carrusel de ofertas en el centro */}
        <Box sx={{ flexGrow: 3, textAlign: 'center' }}>
          {/* Aquí va tu carrusel */}
        </Box>

        {/* Ícono de perfil a la derecha */}
        <Box sx={{ flexGrow: 0 }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Profile Picture" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            {settings.map((setting) => (
              <MenuItem
                key={setting}
                onClick={() => {
                  if (setting === 'Logout') {
                    handleLogout();  // Ejecutar la lógica de cierre de sesión
                  }
                  handleCloseUserMenu();
                }}
              >
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
