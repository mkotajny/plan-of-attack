import { createTheme } from '@mui/material/styles';

export default createTheme({
  palette: {
    background: {
      default: '#f0f0f0',
    },
  },
  spacing: 8,
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: '0.75em',
        },
      },
    },
  },
});
