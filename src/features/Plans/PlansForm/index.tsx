import React, { useState } from 'react';
import { Button, Fade, CircularProgress } from '@mui/material';
import { Form } from 'react-final-form';
import TextFieldPowered from 'components/shared/TextFieldPowered';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { validatePlansForm } from './validation';
import { addPlanThunk, selectPlans } from '../slice';
import { selectCurrentUser } from 'features/GoogleAuth/slice';
import ButtonAdd from 'components/shared/ButtonAdd';
import { useStyles } from './styles';

const PlansForm = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const plans = useSelector(selectPlans);
  const currentUser = useSelector(selectCurrentUser);
  const [inputMode, setInputMode] = useState(false);

  const keyDownHandler = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.code === 'Escape') {
      setInputMode(false);
    }
  };

  const onSubmit = async (values: { title: string }) => {
    try {
      await dispatch(
        addPlanThunk({
          authorId: currentUser.profile.userId,
          title: values.title,
        })
      );
      enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADDED'), { variant: 'success' });
      setInputMode(false);
    } catch {
      enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADD_ERROR'), { variant: 'error' });
    }
  };

  if (!inputMode) {
    return (
      <div className={classes.plansFormRoot}>
        <ButtonAdd labelTranslationKey='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' onClick={() => setInputMode(true)} />
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
                <TextFieldPowered
                  label={t('FEATURES.PLANS.PLANS_FORM.PLAN_TITLE_LABEL')}
                  name='title'
                  margin='none'
                  multiline
                  disabled={plans.apiRequestInProgress}
                  autoFocus
                  inputProps={{ maxLength: 100 }}
                  // required
                />
                <div className={classes.buttonsContainer}>
                  <div className={classes.buttonAdd}>
                    {!plans.apiRequestInProgress && (
                      <Button variant='contained' type='submit' disabled={submitting || pristine}>
                        {t('COMMON.CONFIRM')}
                      </Button>
                    )}
                    {plans.apiRequestInProgress && <CircularProgress />}
                  </div>
                  <Button variant='outlined' onClick={() => setInputMode(false)} /*disabled={inProgress}*/>
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
