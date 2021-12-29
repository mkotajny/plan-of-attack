import { createTheme } from '@mui/material/styles';

export default createTheme({
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
