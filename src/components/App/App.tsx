import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import muiTheme from '../../muiTheme';
import { useLocation } from 'react-router-dom';

import TopBar from 'components/nonShared/TopBar';
import Background from '../nonShared/Background';
import AppRoutes from '../../routing/AppRoutes';
import AppRouteEnum from 'routing/AppRoute.enum';

const App = () => {
  const homePage = useLocation().pathname === AppRouteEnum.home;
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline enableColorScheme />
      {/* <Navigation /> */}
      <Background homePage={useLocation().pathname === AppRouteEnum.home}>
        <div>
          {!homePage && <TopBar />}
          <Container maxWidth={false}>
            <AppRoutes />
          </Container>
        </div>
      </Background>
    </ThemeProvider>
  );
};
export default App;
