import { Button, CircularProgress } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { FormSubmitPropsType } from './types';
import { useStyles } from './styles';

const FormSubmit = ({ inProgress, formPristine, onCancel }: FormSubmitPropsType) => {
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <div className={classes.buttonsContainer}>
      <div className={classes.formButton}>
        {!inProgress && (
          <Button variant='contained' type='submit' disabled={formPristine}>
            {t('COMMON.CONFIRM')}
          </Button>
        )}
        {inProgress && <CircularProgress />}
      </div>
      <div className={classes.formButton}>
        <Button variant='outlined' onClick={() => onCancel(false)} disabled={inProgress}>
          {t('COMMON.CANCEL')}
        </Button>
      </div>
    </div>
  );
};

export default FormSubmit;
