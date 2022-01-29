import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { commonColors } from 'common/commonStyles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  pageHeaderRoot: {
    backgroundColor: commonColors.pageHeaderBackground,
    padding: `${theme.spacing(10)} ${theme.spacing(3.5)} ${theme.spacing(2)} ${theme.spacing(3.5)}`,
  },
}));
