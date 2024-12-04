import { TextField } from '@mui/material'
import React from 'react'

export const TextFieldCustom = (props) => {
  return (
    <TextField
      {...props}
      sx={{ flex: 1, minWidth: '150px' }}
      margin="normal"
      fullWidth
      variant="outlined"
      size="small"
      color='secondary'
    />
  )
}