import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#60269E',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
    grey:{
      "400":"#F8FAFC"
    }
  },
  typography:{
    fontFamily: `'Inter', sans-serif`
  }
});

export default theme;
