import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    text:{
        main: '#ffffff'
    },
    primary: {
      type: "dark",
      light: '#ff7961',
      main: '#4b4b4b',
      dark: '#16181d',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#000000',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    text:{
        main: '#000000'
    },
    primary: {
      type: "light",
      light: '#171717',
      main: '#00356B',
      dark: '#fffff',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#00ff00',
      dark: '#fff5d0',
      contrastText: '#000',
    },
  },
})

export {darkTheme,lightTheme};