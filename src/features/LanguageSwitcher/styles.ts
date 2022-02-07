import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  flagContainer: {
    position: 'absolute',
    top: theme.spacing(3),
    right: theme.spacing(3),
    border: '2px solid #e6e6e6',
    height: '29px',
    borderRadius: 5,
    // '& $img': {
    //   width: '40px',
    // },
  },
  flagImg: {
    width: '40px',
  },
}));
