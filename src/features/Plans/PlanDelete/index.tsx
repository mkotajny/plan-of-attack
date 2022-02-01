import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
// import { useDispatch, useSelector } from 'react-redux';
// import { selectCurrentUser } from 'features/nonShared/GoogleAuth/slice';
// import { useSnackbar } from 'notistack';
// import { saveThunk } from '../slice';
import { useTranslation } from 'react-i18next';
import DecisionModal from 'components/DecisionModal';
import { PlanDeletePropsType } from './types';

const PlanDelete = ({ planId }: PlanDeletePropsType) => {
  // const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  const { t } = useTranslation();
  // const currentUser = useSelector(selectCurrentUser);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    // try {
    //   const payload = {
    //     id: planId,
    //     authorId: currentUser.profile.userId,
    //     title: 'sdsdssd',
    //   };
    //   await dispatch(saveThunk(payload));
    //   enqueueSnackbar(t('FEATURES.PLANS.SNACKBAR.PLAN_UPDATED'), { variant: 'success' });
    //   setModalOpen(false);
    // } catch {
    //   enqueueSnackbar(t('COMMON.GENERAL_ERROR'), { variant: 'error' });
    // }
    console.log('on submit...', planId);
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
        setOpen={setModalOpen}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default PlanDelete;
