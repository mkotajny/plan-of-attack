import { useStyles } from './styles';
import { Fab, Typography, Zoom, Slide } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ButtonAddPropsType } from './types';
import useToolkit from 'hooks/useToolkit';

const ButtonAdd = ({ labelTranslationKey, onClick }: ButtonAddPropsType) => {
  const classes = useStyles();
  const { t } = useToolkit();

  return (
    <div className={classes.buttonAddRoot}>
      <Zoom in style={{ transitionDelay: `300ms` }}>
        <Fab size='small' color='primary' aria-label='add'>
          <AddIcon onClick={onClick} />
        </Fab>
      </Zoom>
      <Slide direction='right' in timeout={500}>
        <div className={classes.addLabel}>
          <Typography>{t(labelTranslationKey)}</Typography>
        </div>
      </Slide>
    </div>
  );
};

export default ButtonAdd;
