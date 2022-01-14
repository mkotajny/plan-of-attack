import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { commonColors } from 'common/styles/commonStyles';

export const sxStyles = {
  bigIcon: {
    fontSize: 128,
    color: commonColors.bigIcon,
  },
};

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  noContentRoot: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  noContentMessage: {
    marginTop: theme.spacing(3),
  },
}));
