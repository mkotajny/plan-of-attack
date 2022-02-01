import { useState } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import DecisionModal from 'components/DecisionModal';
import { deleteThunk, selectTasks } from '../slice';
import { TaskDeletePropsType } from './types';
import useToolkit from 'hooks/useToolkit';

const TaskDelete = ({ taskId }: TaskDeletePropsType) => {
  const dispatch = useDispatch();
  const { t, currentUser, enqueueSnackbar } = useToolkit();
  const tasks = useSelector(selectTasks);
  const [modalOpen, setModalOpen] = useState(false);

  const onSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      await dispatch(deleteThunk({ taskId, authorId: currentUser.profile.userId }));
      enqueueSnackbar(t('FEATURES.TASKS.SNACKBAR.TASK_DELETED'), { variant: 'success' });
      setModalOpen(false);
    } catch {
      enqueueSnackbar(t('COMMON.GENERAL_ERROR'), { variant: 'error' });
    }
  };

  return (
    <>
      <Tooltip title={t('FEATURES.TASKS.TASKS_FORM.DELETE_TASK') || ''}>
        <IconButton color='primary' aria-label='delete' size='small' onClick={() => setModalOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>

      <DecisionModal
        title='FEATURES.TASKS.TASKS_FORM.DELETE_TASK'
        question='FEATURES.TASKS.TASKS_FORM.DELETE_TASK_QUESTION'
        open={modalOpen}
        inProgress={tasks.apiRequestInProgress}
        setOpen={setModalOpen}
        onSubmit={onSubmit}
      />
    </>
  );
};

export default TaskDelete;
