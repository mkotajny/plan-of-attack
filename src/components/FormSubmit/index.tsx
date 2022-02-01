import { Button, CircularProgress } from '@mui/material';
import { FormSubmitPropsType } from './types';
import useToolkit from 'hooks/useToolkit';
import { useStyles } from './styles';

const FormSubmit = ({ inProgress = false, formPristine = true, onCancel }: FormSubmitPropsType) => {
  const classes = useStyles();
  const { t } = useToolkit();

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
