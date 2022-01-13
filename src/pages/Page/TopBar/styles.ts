import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  topBarRoot: {
    marginBottom: theme.spacing(0),
  },
  logo: {
    width: '32px',
    marginRight: theme.spacing(1),
  },
}));
