import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  imageWelcome: {
    marginBottom: theme.spacing(3),
  },
}));
