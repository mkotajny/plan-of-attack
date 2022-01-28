import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  plansFormRoot: {
    maxWidth: '400px',
    minHeight: '200px',
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
  },
  buttonAdd: {
    marginRight: theme.spacing(1),
  },
}));
