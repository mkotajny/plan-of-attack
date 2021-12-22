import AppRoutes from './routing/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from './muiTheme';

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline enableColorScheme />
    {/* <Navigation /> */}
    <AppRoutes />
  </ThemeProvider>
);
export default App;
