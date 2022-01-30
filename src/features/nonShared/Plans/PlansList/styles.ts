import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  listContainer: {
    marginTop: theme.spacing(6),
  },
  listItem: {
    margin: `${theme.spacing(1)} 0`,
    backgroundColor: 'white',
    minHeight: '50px',
    borderRadius: 5,
  },
}));

export const sxStyles = { plansList: { width: '100%', maxWidth: 500 /*, bgcolor: 'background.paper'*/ } };
