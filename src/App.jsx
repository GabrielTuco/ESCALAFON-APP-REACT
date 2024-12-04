import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login } from './login/Login'
import { Stack, ThemeProvider } from '@mui/material'
import { theme } from './themes/theme'
import { DrawerUser } from './globals/components/DrawerUser'
import { PageRoot } from './globals/components/PageRoot'
import { useState } from 'react'
import { Familiares } from './Legajo/views/Familiares'
import { VinculoLab } from './Legajo/views/VinculoLab'
import { ExpLab } from './Legajo/views/ExpLab'
import { Movimientos } from './Legajo/views/Movimientos'
import { Reconocimientos } from './Legajo/views/Reconocimientos'
import { Idiomas } from './Legajo/views/Idiomas'
import { Compensaciones } from './Legajo/views/Compensaciones'
import { FormacionAcad } from './Legajo/views/FormacionAcad'
import { Sanciones } from './Legajo/views/Sanciones'
import { EstudiosCom } from './Legajo/views/EstudiosCom'
import { AsignacionTiempo } from './Legajo/views/AsignacionTiempo'
import { Archivos } from './Legajo/views/Archivos'

function App() {
  const [open, setOpen] = useState(true);
  const handleClose = () => {
      setOpen(false);
  }
  const toggleDrawer = () => {
      setOpen(!open);
  };

  return (
    <div className="App" >
      <ThemeProvider theme={theme}>
        <Stack sx={{ width: '100%',  flexDirection: 'row', position: 'relative', }}>
            <DrawerUser onLogout={()=>{}} toggleDrawer={toggleDrawer} open={open} handleClose={handleClose} />
            <PageRoot>
              <Routes>
                <Route path="" element={<Login/>} />
                <Route path="legajo">
                  <Route path="familiares" element={<Familiares/>} />
                  <Route path="vinculo-laboral" element={<VinculoLab/>} />
                  <Route path="exp-laboral" element={<ExpLab/>} />
                  <Route path="movimientos" element={<Movimientos/>} />
                  <Route path="reconocimientos" element={<Reconocimientos/>} />
                  <Route path="idiomas" element={<Idiomas/>} />
                  <Route path="compensaciones" element={<Compensaciones/>} />
                  <Route path="formacion" element={<FormacionAcad/>} />
                  <Route path="sanciones" element={<Sanciones/>} />
                  <Route path="estudios-comp" element={<EstudiosCom/>} />
                  <Route path="asignacion-tiempo" element={<AsignacionTiempo/>} />
                  <Route path="archivos" element={<Archivos/>} />
                </Route>
              </Routes>
            </PageRoot>
        </Stack>
      </ThemeProvider>
    </div>
  )
}

export default App
