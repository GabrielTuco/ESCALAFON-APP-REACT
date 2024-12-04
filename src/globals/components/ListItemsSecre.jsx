import * as React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import { Avatar } from '@mui/material';
import { Book, Face, School } from '@mui/icons-material';
import { ItemListCustom } from './ItemListCustom';
import { ItemListCollapseCustom } from './ItemListCollapseCustom';

export const ListItemsSecre = ({ selectedItem, setSelectedItem, drawer }) => {
  //const { user } = useSelector(state => state.user);

  return (
    <React.Fragment>
      <ItemListCustom text={"user.nombres"} ruta={'profile'} rutaC={'/home/profile'} selected={selectedItem} setSelectedItem={setSelectedItem} drawer={drawer}>
        <Avatar
//          src={"user.usuario.avatar"}
          style={{ width: 24, height: 24 }}
        >

        </Avatar>
      </ItemListCustom>

      <ItemListCustom text={'Inicio'} ruta={''} rutaC={'/home'} selected={selectedItem} setSelectedItem={setSelectedItem} drawer={drawer}>
        <HomeIcon />
      </ItemListCustom>

      <ItemListCollapseCustom
        selected={selectedItem}
        setSelectedItem={setSelectedItem}
        drawer={drawer}
        isSelected={selectedItem == '/home/matricula/listado' || selectedItem == '/home/matricula/registrar' || selectedItem == '/home/matricula/especialidades' || selectedItem == '/home/matricula/importar'}
        titulo={'Legajo'}
        options={[
          {
            nombre: 'Familiares',
            rutaC: '/legajo/familiares',
          },
          {
            nombre: 'Vinculo Laboral',
            rutaC: '/legajo/vinculo-laboral',
          },
          {
            nombre: 'Experiencia Laboral',
            rutaC: '/legajo/exp-laboral',
          },
          {
            nombre: 'Movimientos',
            rutaC: '/legajo/movimientos',
          },
          {
            nombre: 'Reconocimientos',
            rutaC: '/legajo/reconocimientos',
          },
          {
            nombre: 'Idiomas',
            rutaC: '/legajo/idiomas',
          },
          {
            nombre: 'Compensaciones',
            rutaC: '/legajo/compensaciones',
          },
          {
            nombre: 'Formación Academica',
            rutaC: '/legajo/formacion',
          },
          {
            nombre: 'Sanciones',
            rutaC: '/legajo/sanciones',
          }
          ,
          {
            nombre: 'Estudios complementarios',
            rutaC: '/legajo/estudios-comp',
          },
          {
            nombre: 'Asignacion de Tiempo',
            rutaC: '/legajo/asignacion-tiempo',
          },
          {
            nombre: 'Otros Archivos',
            rutaC: '/legajo/archivos',
          }
        ]}
      >
        <Book sx={{ color: '#fff' }} />
      </ItemListCollapseCustom>

    </React.Fragment>
  )
}
