import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  buttonsContainer: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  formButton: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));
