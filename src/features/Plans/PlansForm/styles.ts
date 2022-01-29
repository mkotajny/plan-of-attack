import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  plansFormRoot: {
    maxWidth: '400px',
  },
  buttonsContainer: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexWrap: 'wrap',
  },
  formButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
