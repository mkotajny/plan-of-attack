import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import SnackbarCloseButton from 'features/nonShared/SnackbarCloseButton';
import muiTheme from 'muiTheme';
import Page from 'routing/pages/Page';

const App = () => {
  return (
    <ThemeProvider theme={muiTheme}>
      <SnackbarProvider maxSnack={5} action={snackbarKey => <SnackbarCloseButton snackbarKey={snackbarKey} />}>
        <Page />
      </SnackbarProvider>
    </ThemeProvider>
  );
};
export default App;
