import { useState } from 'react';
import { Form } from 'react-final-form';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useSnackbar } from 'notistack';
import { saveThunk, selectPlans } from '../slice';
import { selectCurrentUser } from 'features/GoogleAuth/slice';
import TextFieldPowered from 'components/PoweredMuiComponents/TextFieldPowered';
import ButtonAdd from 'components/ButtonAdd';
import ModalPowered from 'components/PoweredMuiComponents/ModalPowered';
import FormSubmit from 'components/FormSubmit';
import { validatePlansForm } from './validation';
import { PlansSavePropsType } from './types';

const PlanSave = ({ plan }: PlansSavePropsType) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const plansState = useSelector(selectPlans);
  const currentUser = useSelector(selectCurrentUser);
  const [modalOpen, setModalOpen] = useState(false);
  const updateExistingPlan = !!plan;

  const onSubmit = async (values: { title: string }) => {
    try {
      const payload = {
        id: plan?.id,
        authorId: currentUser.profile.userId,
        title: values.title,
      };
      await dispatch(saveThunk(payload));
      enqueueSnackbar(t(`FEATURES.PLANS.SNACKBAR.PLAN_${updateExistingPlan ? 'UPDATED' : 'ADDED'}`), {
        variant: 'success',
      });
      setModalOpen(false);
    } catch {
      enqueueSnackbar(t('COMMON.GENERAL_ERROR'), { variant: 'error' });
    }
  };

  return (
    <>
      {plan ? (
        <Tooltip title={t('FEATURES.PLANS.PLANS_FORM.EDIT_PLAN') || ''}>
          <IconButton color='primary' aria-label='delete' size='small' onClick={() => setModalOpen(true)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <ButtonAdd labelTranslationKey='FEATURES.PLANS.PLANS_FORM.CREATE_PLAN' onClick={() => setModalOpen(true)} />
      )}
      <ModalPowered
        title={`FEATURES.PLANS.PLANS_FORM.${updateExistingPlan ? 'EDIT' : 'CREATE'}_PLAN`}
        open={modalOpen}
        setOpen={setModalOpen}
      >
        <Form
          onSubmit={onSubmit}
          validate={values => validatePlansForm(t, values, plansState.plansList, updateExistingPlan)}
          initialValues={{ title: plan?.document.title }}
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

export default PlanSave;
