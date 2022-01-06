import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

const flex = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  authContainer: {
    cursor: 'pointer',
    ...flex,
  },
  avatarContainer: {
    ...flex,
  },
  menuTitle: {
    margin: theme.spacing(1),
  },
}));
