import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { List, Avatar, ListItemText, Fade, Collapse } from '@mui/material';
import { BigIconInfo, BigIconInfoTypesEnum } from 'components/BigIconInfo';
import { selectTasks, fetchTasksThunk } from '../slice';
import TaskSave from '../TaskSave';
import TaskDelete from '../TaskDelete';
import useToolkit from 'hooks/useToolkit';
import { useStyles, sxStyles } from './styles';

const TasksList = () => {
  const classes = useStyles();
  const tasks = useSelector(selectTasks).tasksList;
  const dispatch = useDispatch();
  const { t, enqueueSnackbar, currentUser } = useToolkit();

  useEffect(() => {
    async function fetchTasks() {
      if (!tasks.length && currentUser.profile.userId) {
        try {
          await dispatch(fetchTasksThunk(currentUser.profile.userId));
        } catch {
          enqueueSnackbar(t('FEATURES.TASKS.TASKS_LIST.SNACKBAR.ERROR_FETCH_TASKS'), { variant: 'error' });
        }
      }
    }
    fetchTasks();
  }, []);

  return (
    <div>
      <TaskSave />
      <div className={classes.listContainer}>
        <Fade in={true} timeout={1000} style={{ transitionDelay: `500ms` }}>
          <List sx={sxStyles.tasksList}>
            <TransitionGroup>
              {tasks.map(taskItem => (
                <Collapse key={taskItem.id}>
                  <div className={classes.listItem} key={taskItem.id}>
                    <div className={classes.listItemContents}>
                      <Avatar
                        className={classes.listItemAvatar}
                        alt={currentUser.profile.userName}
                        src={currentUser.profile.imageUrl}
                      />
                      <ListItemText primary={taskItem.document.title} secondary={currentUser.profile.userName} />
                    </div>
                    <div className={classes.listItemButtonsContainer}>
                      <div className={classes.listItemButton}>
                        <TaskSave task={taskItem} />
                      </div>
                      <div className={classes.listItemButton}>
                        <TaskDelete taskId={taskItem.id} />
                      </div>
                    </div>
                  </div>
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Fade>
        {!tasks.length && (
          <BigIconInfo messageKey='COMPONENTS.NO_CONTENT.MESSAGE' messageType={BigIconInfoTypesEnum.NoItems} />
        )}
      </div>
    </div>
  );
};

export default TasksList;
