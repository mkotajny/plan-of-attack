import AppRoutes from '../../routing/AppRoutes';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import muiTheme from '../../muiTheme';
import { Container } from '@mui/material';

import Background from '../nonShared/Background';

const App = () => (
  <ThemeProvider theme={muiTheme}>
    <CssBaseline enableColorScheme />
    {/* <Navigation /> */}
    <Background>
      <Container maxWidth={false}>
        <AppRoutes />
      </Container>
    </Background>
  </ThemeProvider>
);
export default App;
