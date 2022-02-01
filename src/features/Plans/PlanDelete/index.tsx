import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import DecisionModal from 'components/DecisionModal';
import { deleteThunk, selectPlans } from '../slice';
import { PlanDeletePropsType } from './types';
import useToolkit from 'hooks/useToolkit';

const PlanDelete = ({ planId }: PlanDeletePropsType) => {
  const dispatch = useDispatch();
  const { t, currentUser, enqueueSnackbar } = useToolkit();
  const plans = useSelector(selectPlans);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await dispatch(deleteThunk({ planId: planId, authorId: currentUser.profile.userId }));
      enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_DELETED'), { variant: 'success' });
      setModalOpen(false);
    } catch {
      enqueueSnackbar(t('COMMON.GENERAL_ERROR'), { variant: 'error' });
    }
  };

  return (
    <>
      <Tooltip title={t('FEATURES.PLANS.PLANS_FORM.DELETE_PLAN') || ''}>
        <IconButton color='primary' aria-label='delete' size='small' onClick={() => setModalOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <DecisionModal
        title='FEATURES.PLANS.PLANS_FORM.DELETE_PLAN'
        question='FEATURES.PLANS.PLANS_FORM.DELETE_PLAN_QUESTION'
        open={modalOpen}
        inProgress={plans.apiRequestInProgress}
        setOpen={setModalOpen}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default PlanDelete;
