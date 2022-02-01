import { Fade, Modal, Backdrop, Typography } from '@mui/material';
import { ModalPoweredPropsType } from './types';
import DividerPowered from '../DividerPowered';
import useToolkit from 'hooks/useToolkit';
import { useStyles } from './styles';

const ModalPowered = ({
  children,
  title,
  open: modalOpen,
  setOpen: setModalOpen,
  small = false,
}: ModalPoweredPropsType) => {
  const classes = useStyles(small)();
  const { t } = useToolkit();

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Escape') {
      setModalOpen(false);
    }
  };
  return (
    <Modal open={modalOpen} onClose={() => setModalOpen(false)} closeAfterTransition BackdropComponent={Backdrop}>
      <div>
        <Fade in timeout={1000}>
          <div className={classes.modalBox} onKeyDown={keyDownHandler}>
            <Typography variant='h6'>{t(title)}</Typography>
            <DividerPowered spacingTop={3} noLine />
            {children}
          </div>
        </Fade>
      </div>
    </Modal>
  );
};

export default ModalPowered;
