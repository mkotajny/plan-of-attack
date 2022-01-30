import { useState } from 'react';
import { Form } from 'react-final-form';
import TextFieldPowered from 'features/shared/PoweredMuiComponents/TextFieldPowered';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { validatePlansForm } from './validation';
import { addPlanThunk, selectPlans } from '../slice';
import { selectCurrentUser } from 'features/nonShared/GoogleAuth/slice';
import ButtonAdd from 'features/shared/ButtonAdd';
import ModalPowered from 'features/shared/PoweredMuiComponents/ModalPowered';
import FormSubmit from 'features/shared/FormSubmit';

const PlansForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const plansState = useSelector(selectPlans);
  const currentUser = useSelector(selectCurrentUser);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (values: { title: string }) => {
    try {
      await dispatch(
        addPlanThunk({
          authorId: currentUser.profile.userId,
          title: values.title,
        })
      );
      enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADDED'), { variant: 'success' });
      setModalOpen(false);
    } catch {
      enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_ADD_ERROR'), { variant: 'error' });
    }
  };

  return (
    <>
      <ButtonAdd labelTranslationKey='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' onClick={() => setModalOpen(true)} />
      <ModalPowered title='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' open={modalOpen} setOpen={setModalOpen}>
        <Form
          onSubmit={onSubmit}
          validate={values => validatePlansForm(values, plansState.plans, t)}
          render={({ handleSubmit, pristine /*,form, values*/ }) => (
            <form onSubmit={handleSubmit}>
              <TextFieldPowered
                label={t('FEATURES.PLANS.PLANS_FORM.PLAN_TITLE_LABEL')}
                name='title'
                multiline
                disabled={plansState.apiRequestInProgress}
                autoFocus
                inputProps={{ maxLength: 100 }}
                fullWidth={true}
              />
              <FormSubmit
                inProgress={plansState.apiRequestInProgress}
                formPristine={pristine}
                onCancel={setModalOpen}
              />
            </form>
          )}
        />
      </ModalPowered>
    </>
  );
};

export default PlansForm;
