import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup } from 'react-transition-group';
import { List, Avatar, ListItemText, Fade, Collapse } from '@mui/material';
import { BigIconInfo, BigIconInfoTypesEnum } from 'components/BigIconInfo';
import { selectPlans, fetchPlansThunk } from '../slice';
import PlanSave from '../PlanSave';
import PlanDelete from '../PlanDelete';
import useToolkit from 'hooks/useToolkit';
import { useStyles, sxStyles } from './styles';

const PlansList = () => {
  const classes = useStyles();
  const plans = useSelector(selectPlans).plansList;
  const dispatch = useDispatch();
  const { t, enqueueSnackbar, currentUser } = useToolkit();

  useEffect(() => {
    async function fetchPlans() {
      if (!plans.length && currentUser.profile.userId) {
        try {
          await dispatch(fetchPlansThunk(currentUser.profile.userId));
        } catch {
          enqueueSnackbar(t('FEATURES.PLANS.PLANS_LIST.SNACKBAR.ERROR_FETCH_PLANS'), { variant: 'error' });
        }
      }
    }
    fetchPlans();
  }, []);

  return (
    <div>
      <PlanSave />
      <div className={classes.listContainer}>
        <Fade in={true} timeout={1000} style={{ transitionDelay: `500ms` }}>
          <List sx={sxStyles.plansList}>
            <TransitionGroup>
              {plans.map(planItem => (
                <Collapse key={planItem.id}>
                  <div className={classes.listItem} key={planItem.id}>
                    <div className={classes.listItemContents}>
                      <Avatar
                        className={classes.listItemAvatar}
                        alt={currentUser.profile.userName}
                        src={currentUser.profile.imageUrl}
                      />
                      <ListItemText primary={planItem.document.title} secondary={currentUser.profile.userName} />
                    </div>
                    <div className={classes.listItemButtonsContainer}>
                      <div className={classes.listItemButton}>
                        <PlanSave plan={planItem} />
                      </div>
                      <div className={classes.listItemButton}>
                        <PlanDelete planId={planItem.id} />
                      </div>
                    </div>
                  </div>
                </Collapse>
              ))}
            </TransitionGroup>
          </List>
        </Fade>
        {!plans.length && (
          <BigIconInfo messageKey='COMPONENTS.NO_CONTENT.MESSAGE' messageType={BigIconInfoTypesEnum.NoItems} />
        )}
      </div>
    </div>
  );
};

export default PlansList;
