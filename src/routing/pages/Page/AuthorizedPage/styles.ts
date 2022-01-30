import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  notAuthorizedContentRoot: {
    marginTop: theme.spacing(15),
  },
}));
