import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from 'features/SnackbarCloseButton';
import { Container } from '@mui/material';
import muiTheme from 'muiTheme';
import { useLocation } from 'react-router-dom';

import TopBar from 'features/TopBar';
import Background from 'features/Background';
import AppRoutes from 'routing/AppRoutes';
import AppRoutesEnum from 'routing/AppRoute.enum';

const App = () => {
  const homePage = useLocation().pathname === AppRoutesEnum.home;
  return (
    <ThemeProvider theme={muiTheme}>
      <SnackbarProvider maxSnack={5} action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
        <CssBaseline enableColorScheme />
        {/* <Navigation /> */}
        <Background homePage={useLocation().pathname === AppRoutesEnum.home}>
          <div>
            {!homePage && <TopBar />}
            <Container maxWidth={false}>
              <AppRoutes />
            </Container>
          </div>
        </Background>
      </SnackbarProvider>
    </ThemeProvider>
  );
};
export default App;
