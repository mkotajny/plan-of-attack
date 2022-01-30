import { useStyles } from './styles';
import { useTranslation } from 'react-i18next';
import { Fab, Typography, Zoom, Slide } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { ButtonAddPropsType } from './types';

const ButtonAdd = ({ labelTranslationKey, onClick }: ButtonAddPropsType) => {
  const classes = useStyles();
  const { t } = useTranslation();

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
