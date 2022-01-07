import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(8),
    textAlign: 'center',
  },
  imageWelcome: {
    marginBottom: theme.spacing(3),
  },
}));
