import { Box, Button, Checkbox, FormControlLabel, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useLogin } from '../hooks/useLogin';
import logo from '/src/assets/logo.png'

export const Login = () => {
    const [isLoading, setIsLoading] = useState(false)
    const initialForm = {
        usuario: "",
        password: "",
        codRol: ""
    }
    const { usuario, password, onInputChange, onSubmit } = useLogin(initialForm);
    return (
        <Box
            sx={{
                background: '#1cc88a',
                display: 'flex',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100%',
                p:10,
                boxSizing: 'border-box',
            }}>

                <Stack component="form" onSubmit={onSubmit}
                    sx={{
                        p: 4,
                        borderRadius: 2,
                        background: 'white',
                        flexDirection:'row',
                        gap: 4,
                        boxSizing: 'border-box',
                        flexWrap: 'wrap',
                    }}>                    
                        <Stack sx={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                            <img src={logo} style={{ maxWidth:'350px', maxHeight: '100px', height: 'auto', width: 'auto' }}></img>
                        </Stack>    
                        
                        <Stack flex={1} minWidth={'300px'}>
                            <Typography variant="subtitle2">
                                ESCALAFON
                            </Typography>

                            <Typography component="h1" variant="h5">
                            Iniciar sesión
                            </Typography>

                            <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Usuario"
                            name="usuario"
                            autoComplete='nope'
                            autoFocus
                            variant="outlined"
                            size="small"
                            value={usuario}
                            onChange={onInputChange}

                            />


                            <TextField
                            margin="normal"
                            sx={{ color: 'white' }}
                            required
                            fullWidth
                            autoComplete='nope'
                            name="password"
                            label="Contraseña"
                            type="password"
                            id="password"
                            variant="outlined"
                            size="small"
                            value={password}
                            onChange={onInputChange}

                            />

                            <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            sx={{ mt: 1, mb: 2 }}
                            >
                            {
                                isLoading ? 'Cargando...' : "Iniciar Sesión"
                            }
                            </Button>

                        </Stack>
                </Stack>
        </Box>
    )
}
