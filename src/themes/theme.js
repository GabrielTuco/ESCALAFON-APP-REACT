import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1cc88a',
      dark: '#1cc88a',
      contrastText: '#000',
    },
    secondary: {
      main: '#000000',
      dark: '#333333',
      contrastText: '#fff',
    },
    text: {
      primary: '#000',
      secondary: '#AAAAAA',
    },

    background: {
      default: '#F6F6F6',
      paper: '#fff',
      defaul2: '#fff',
      border: '#E6E6E6',
    },
    auth: {
      primary: '#fff',
      secondary: '#fff',
    },
  },
  typography: {
    //fontFamily: 'Lato, sans-serif',
    color: 'black',
    fontFamily: 'Roboto, sans-serif',
  },
});