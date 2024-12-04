import React from 'react'
import { PageRoot } from '../../globals/components/PageRoot'
import { FormFamiliares } from '../forms/FormFamiliares'
import { Box, Paper, Stack } from '@mui/material'

export const Familiares = () => {
  return (
    <Stack
    p={2}
    gap={2}
    sx={{
      height:'100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      boxSizing:'border-box',

    }}>
          
            <Box component={Paper} flex={1}>
              <h1>asdasd</h1>

            </Box>

            <Box component={Paper} flex={1}>

            </Box>
            
    </Stack> 
  )
}
//<FormFamiliares/>