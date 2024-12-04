import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom';

export const ItemListCustom = ({ children, ruta, rutaC, selected, setSelectedItem, text, drawer }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(ruta)
    setSelectedItem(rutaC)
  }
  const isSelected = selected == rutaC ? true : selected.toLowerCase().split('/')[2] == ruta
  const sxProp = { color: isSelected ? '#D2D2D2' : '#696969' }

  return (
    <ListItemButton
      onClick={onClick}
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
    >
      <ListItemIcon sx={{ minWidth: 40 }}>
        {React.cloneElement(children, { sx: sxProp })}
      </ListItemIcon>

      {
        drawer && <ListItemText
          primary={text}
          primaryTypographyProps={{ fontWeight: 'medium' }}
        />}
    </ListItemButton>
  )
}
//FED800