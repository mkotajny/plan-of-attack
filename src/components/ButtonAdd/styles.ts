import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  buttonAddRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  addLabel: {
    marginLeft: theme.spacing(1),
  },
}));
