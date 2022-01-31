import { makeStyles } from '@mui/styles';
import { Theme } from '@mui/material';
import { commonColors } from 'common/commonStyles';

export const useStyles = makeStyles<Theme>((theme: Theme) => ({
  modalBox: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: commonColors.paperBackGroundColor,
    border: `1px solid ${theme.palette.divider}`,
    borderRadius: 5,
    padding: `${theme.spacing(2)} ${theme.spacing(5)} ${theme.spacing(3)} ${theme.spacing(5)}`,
    boxShadow: '0 3px 7px rgba(0, 0, 0, 0.3)',
    width: '90%',
    maxWidth: '600px',
  },
}));
