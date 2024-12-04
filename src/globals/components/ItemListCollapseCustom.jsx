import { ExpandLess, ExpandMore, PanoramaFishEye } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText, Menu } from '@mui/material';
import React from 'react'
import { Fragment } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const colorActive = '#D2D2D2'


const activeMenu = {
    mt: 1,
    mx: 2,
    py: 0,
    pl: 4,
    borderRadius: 1,
    minHeight: 40,
    background: '#343434',
    color: '#9C9C9C',
    '&:hover': {
        backgroundColor: '#343434',
    },
}
const desActiveMenu = {
    mt: 1,
    mx: 2,
    py: 0,
    pl: 4,
    borderRadius: 1,
    minHeight: 40,
    color: '#9C9C9C',
    '&:hover': {
        backgroundColor: '#343434',
    },
}


export const ItemListCollapseCustom = ({ selected, isSelected, drawer, options = [], children, titulo }) => {
    const [open, setOpen] = useState(isSelected);
    const navigate = useNavigate();
    const handleClick = () => {
        setOpen(!open);
    };

    const [menuAbierto, setMenuAbierto] = useState(null);
    const handleItemClick = (event) => {
        setMenuAbierto(event.currentTarget);
    };
    const handleCloseMenu = () => {
        setMenuAbierto(null);
    };
    return (
        <Fragment>
            <ListItemButton
                sx={{
                    flex: 0,
                    mt: 1,
                    mx: drawer ? 2 : 1,
                    py: 0,
                    px: 1,
                    borderRadius: 1,
                    minHeight: 40,
                    bgcolor: isSelected ? '#3D3D3D' : 'none',
                    color: isSelected ? '#D2D2D2' : '#ACACAC',
                    '&:hover': {
                        bgcolor: '#3D3D3D',
                    },
                }}
                onClick={drawer ? handleClick : handleItemClick}

            >
                <ListItemIcon sx={{ minWidth: 40 }}>
                    {React.cloneElement(children, { sx: { color: isSelected ? colorActive : '#696969' } })}
                </ListItemIcon>
                {drawer && <ListItemText primary={titulo} primaryTypographyProps={{ fontWeight: 'medium' }} />}
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            {
                drawer ?
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <List component="div" disablePadding sx={{ background: '#1E1E1E' }}>
                            {
                                options.map((e, i) => (
                                    <ListItemButton key={`item${i}`}
                                        sx={selected == e.rutaC ? activeMenu : desActiveMenu}
                                        onClick={() => navigate(e.rutaC)}

                                    >
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <PanoramaFishEye sx={{ color: '#FED800', width: 16, height: 16 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={e.nombre} primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium' }} />
                                    </ListItemButton>
                                ))
                            }


                        </List>
                    </Collapse> :
                    <Menu

                        anchorEl={menuAbierto}
                        open={Boolean(menuAbierto)}
                        onClose={handleCloseMenu}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}
                        PaperProps={{
                            style: {
                                backgroundColor: '#1E1E1E', // Cambiar el color del menú aquí
                            },
                        }}
                    >
                        <List component="div" disablePadding sx={{}}>
                            {
                                options.map((e, i) => (
                                    <ListItemButton key={`item${i}`}
                                        sx={selected == e.rutaC ? activeMenu : desActiveMenu}
                                        onClick={() => navigate(e.rutaC)}
                                    >
                                        <ListItemIcon sx={{ minWidth: 30 }}>
                                            <PanoramaFishEye sx={{ color: '#FED800', width: 16, height: 16 }} />
                                        </ListItemIcon>
                                        <ListItemText primary={e.nombre} primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium' }} />
                                    </ListItemButton>
                                ))
                            }
                        </List>
                    </Menu>
            }
        </Fragment>
    )
}

const box = {
    mt: 1,
    mx: 2,
    py: 0,
    pl: 4,
    borderRadius: 1,
    minHeight: 40,
}

const box1 = {
    my: 1,
    mx: 2,
    py: 0,

    borderRadius: 1,
    minHeight: 40,
}
