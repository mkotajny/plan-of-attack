import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from 'features/SnackbarCloseButton';
import muiTheme from 'muiTheme';
import './i18n/i18n';

import store from 'store';

type AppProvidersPropsType = {
  children: ReactNode;
};

const AppProviders = ({ children }: AppProvidersPropsType) => {
  return (
    <ReduxProvider store={store}>
      <BrowserRouter>
        <ThemeProvider theme={muiTheme}>
          <SnackbarProvider maxSnack={5} action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
            {children}
          </SnackbarProvider>{' '}
        </ThemeProvider>
      </BrowserRouter>
    </ReduxProvider>
  );
};

export default AppProviders;
