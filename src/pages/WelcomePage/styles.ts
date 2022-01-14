import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { commonColors } from 'common/styles/commonStyles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  rootWelcomePage: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  logo: {
    width: '100px',
    marginBottom: theme.spacing(4),
  },
  mainTitle: {
    color: theme.palette.error.light,
    fontWeight: theme.typography.fontWeightBold,
    letterSpacing: 2,
  },
  subTitle: {
    marginTop: theme.spacing(2),
    color: commonColors.lightText,
  },
  buttonStart: {
    marginTop: theme.spacing(8),
  },
}));
