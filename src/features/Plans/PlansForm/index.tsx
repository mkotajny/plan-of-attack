import React, { useState } from 'react';
import { Button, Fade, CircularProgress } from '@mui/material';
import { Form } from 'react-final-form';
import { TextField } from 'mui-rff';
import ButtonAdd from 'components/shared/ButtonAdd';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { useSnackbar } from 'notistack';
import { validatePlansForm } from './validation';
import { useAddPlanMutation } from 'api/api';

const PlansForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const [inputMode, setInputMode] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [addPlan, { isLoading: inProgress }] = useAddPlanMutation();

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Escape') {
      setInputMode(false);
    }
  };

  const toggleInputMode = () => {
    setInputMode(prevState => !prevState);
  };

  const onSubmit = (values: { title: string }) => {
    addPlan({
      authorId: 'koszmarrrek',
      title: values.title,
    })
      .unwrap()
      .then(() => {
        setInputMode(false);
        enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADDED'), { variant: 'success' });
      })
      .catch(() => {
        enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADD_ERROR'), { variant: 'error' });
      });
  };

  if (!inputMode) {
    return (
      <div className={classes.plansFormRoot}>
        <ButtonAdd labelTranslationKey='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' onClick={toggleInputMode} />
      </div>
    );
  }

  return (
    <Fade in timeout={1000}>
      <div>
        <Form
          onSubmit={onSubmit}
          validate={values => validatePlansForm(values, t)}
          render={({ handleSubmit, submitting, pristine /*,form, values*/ }) => (
            <form onSubmit={handleSubmit}>
              <div className={classes.plansFormRoot} onKeyDown={keyDownHandler}>
                <TextField
                  label={t('FEATURES.PLANS.PLANS_FORM.PLAN_TITLE_LABEL')}
                  name='title'
                  margin='none'
                  // required
                  multiline
                  disabled={inProgress}
                />
                <div className={classes.buttonsContainer}>
                  <div className={classes.buttonAdd}>
                    {!inProgress && (
                      <Button variant='contained' type='submit' disabled={submitting || pristine}>
                        {t('COMMON.CONFIRM')}
                      </Button>
                    )}
                    {inProgress && <CircularProgress />}
                  </div>
                  <Button variant='outlined' onClick={toggleInputMode} disabled={inProgress}>
                    {t('COMMON.CANCEL')}
                  </Button>
                </div>
              </div>
            </form>
          )}
        />
      </div>
    </Fade>
  );
};

export default PlansForm;
