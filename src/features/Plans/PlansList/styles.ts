import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  createPlan: {
    display: 'flex',
    alignItems: 'center',
  },
  createPlanMessage: {
    marginLeft: theme.spacing(1),
  },
  listContainer: {
    marginTop: theme.spacing(6),
    textAlign: 'center',
  },
}));
