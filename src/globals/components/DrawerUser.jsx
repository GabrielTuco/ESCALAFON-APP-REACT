import { Link, useLocation } from 'react-router-dom';
import { Box, Stack, useMediaQuery } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { Menu, Settings } from '@mui/icons-material';
import { ItemListCustom } from './ItemListCustom';
import { useState } from 'react';
import logo from '/src/assets/logo2.png'
import { ListItemsSecre } from './ListItemsSecre';

export const DrawerUser = ({ onLogout, toggleDrawer, open, handleClose }) => {
  const [selectedItem, setSelectedItem] = useState('');
  return (
    <>
      <Drawer variant="permanent" open={open}>
        <Toolbar
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pl: open ? [2] : 0,

          }}
        >
           {
            open ?
              <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', p: 1 }} >
                <Link to={''}>
                  <img
                    style={{
                      width: '110px'
                    }}
                    src={logo}></img>
                </Link>
              </Box> : <></>
          }
          <Box sx={{ flex: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
            <IconButton onClick={toggleDrawer}>
              {
                //open ? <Menu sx={{ color: '#D2D2D2' }} /> :
                <Menu sx={{ color: '#D2D2D2' }} />

              }

            </IconButton>
          </Box>

        </Toolbar>

        <Divider color={'#353535'} />

        <List component="nav" sx={{ p: 0, m: 0, flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Stack>
            <ListItemsSecre drawer={open} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
           
          </Stack>
          <ItemListCustom text={'Configuración'} ruta={'configuracion'} rutaC={'/home/configuracion'} selected={selectedItem} setSelectedItem={setSelectedItem} drawer={open}>
            <Settings />
          </ItemListCustom>

        </List>

        <List style={{ marginTop: `auto` }} >
          <Divider color={'#353535'} />
          <ListItemButton onClick={onLogout}
            sx={{
              mt: 1,
              mx: open ? 2 : 1,
              py: 0,
              px: 1,
              borderRadius: 1,
              minHeight: 40,
              color: '#ACACAC',
              '&:hover, &:focus': {
                bgcolor: '#3D3D3D',
              },
            }}>
            <ListItemIcon>
              <LogoutIcon sx={{ color: '#696969' }} />
            </ListItemIcon>
            <ListItemText primary="Cerrar Sesión" primaryTypographyProps={{ fontWeight: 'medium' }} />
          </ListItemButton>
        </List>


      </Drawer >

    </>
  )
}

const drawerWidth = 260;
const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      zIndex: 0,
      position: 'relative',
      margin: '0px',
      padding: '0px',
      whiteSpace: 'nowrap',
      height: '100vh',
      maxHeight: '100vh',
      backgroundColor: '#1B1B1B',
      width: drawerWidth,
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      /*  [theme.breakpoints.down('sm')]: {
          width: 0
        },*/

      [theme.breakpoints.down('sm')]: {
        zIndex: 99,
        position: 'absolute',
        width: '100%',
      },

      boxSizing: 'border-box',
      ...(!open && {
        zIndex: 99,
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.down('sm')]: {
          position: 'absolute',
          width: 0,
        },

      }),
    },
  }),
);
