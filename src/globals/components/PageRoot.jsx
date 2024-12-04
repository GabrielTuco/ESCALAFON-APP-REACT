import { Box } from '@mui/material'
import React from 'react'
import { useTheme } from '@mui/material/styles';

export const PageRoot = ({ children }) => {
    const theme = useTheme();
    
    return (
        <Box
            component="main"
            bgcolor={'white'}
            sx={{
                position: 'relative',
                bgcolor: theme.palette.background.default,
                flexGrow: 1,
                height: '100vh',
                overflow: 'auto',
                transition: 'background 0.5s ease'
            }}
        >


       
                {children}
           

        </Box>
    )
}