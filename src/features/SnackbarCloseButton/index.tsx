import { IconButton } from '@mui/material';
import { Close as IconClose } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { SnackbarCloseButtonPropsType } from './types';

var SnackbarCloseButton = ({ snackbarKey }: SnackbarCloseButtonPropsType) => {
  const { closeSnackbar } = useSnackbar();

  return (
    <IconButton color='inherit' onClick={() => closeSnackbar(snackbarKey)}>
      <IconClose />
    </IconButton>
  );
};

export default SnackbarCloseButton;
