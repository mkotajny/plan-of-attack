import { useState } from 'react';
import { Form } from 'react-final-form';
import { IconButton, Tooltip } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector, useDispatch } from 'react-redux';
import { isEmpty } from 'lodash';
import { saveThunk, selectTasks } from '../slice';
import TextFieldPowered from 'components/PoweredMuiComponents/TextFieldPowered';
import ButtonAdd from 'components/ButtonAdd';
import ModalPowered from 'components/PoweredMuiComponents/ModalPowered';
import FormSubmit from 'components/FormSubmit';
import { validateTasksForm } from './validation';
import useToolkit from 'hooks/useToolkit';
import { TasksSavePropsType } from './types';

const TaskSave = ({ task }: TasksSavePropsType) => {
  const { t, enqueueSnackbar, currentUser } = useToolkit();
  const dispatch = useDispatch();
  const tasksState = useSelector(selectTasks);
  const [modalOpen, setModalOpen] = useState(false);
  const updateExistingTask = !!task;

  const onSubmit = async (values: { title: string }) => {
    try {
      const payload = {
        id: task?.id,
        authorId: currentUser.profile.userId,
        title: values.title,
      };
      await dispatch(saveThunk(payload));
      enqueueSnackbar(t(`FEATURES.TASKS.SNACKBAR.TASK_${updateExistingTask ? 'UPDATED' : 'ADDED'}`), {
        variant: 'success',
      });
      setModalOpen(false);
    } catch {
      enqueueSnackbar(t('COMMON.GENERAL_ERROR'), { variant: 'error' });
    }
  };

  return (
    <>
      {task ? (
        <Tooltip title={t('FEATURES.TASKS.TASKS_FORM.EDIT_TASK') || ''}>
          <IconButton color='primary' aria-label='delete' size='small' onClick={() => setModalOpen(true)}>
            <EditIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <ButtonAdd labelTranslationKey='FEATURES.TASKS.TASKS_FORM.CREATE_TASK' onClick={() => setModalOpen(true)} />
      )}
      <ModalPowered
        title={`FEATURES.TASKS.TASKS_FORM.${updateExistingTask ? 'EDIT' : 'CREATE'}_TASK`}
        open={modalOpen}
        setOpen={setModalOpen}
      >
        <Form
          onSubmit={onSubmit}
          validate={values => validateTasksForm(t, values, tasksState.tasksList, updateExistingTask)}
          initialValues={{ title: task?.document.title }}
          render={({ handleSubmit, pristine, errors }) => (
            <form onSubmit={handleSubmit}>
              <TextFieldPowered
                label={t('FEATURES.TASKS.TASKS_FORM.TASK_TITLE_LABEL')}
                name='title'
                multiline
                disabled={tasksState.apiRequestInProgress}
                autoFocus
                inputProps={{ maxLength: 100 }}
                fullWidth={true}
              />
              <FormSubmit
                inProgress={tasksState.apiRequestInProgress}
                formPristine={pristine}
                onCancel={setModalOpen}
                formWithErrors={!isEmpty(errors)}
              />
            </form>
          )}
        />
      </ModalPowered>
    </>
  );
};

export default TaskSave;
