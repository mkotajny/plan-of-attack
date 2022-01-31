import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from 'features/nonShared/GoogleAuth/slice';
import { selectPlans, fetchPlansThunk } from '../slice';
import { List, Avatar, ListItemText, Fade } from '@mui/material';
import { BigIconInfo, BigIconInfoTypesEnum } from 'features/shared/BigIconInfo';
import { useStyles, sxStyles } from './styles';
import PlansSave from '../PlansSave';

const PlansList = () => {
  const classes = useStyles();
  const currentUser = useSelector(selectCurrentUser);
  const plans = useSelector(selectPlans).plansList;
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();

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
      <PlansSave />
      <div className={classes.listContainer}>
        <Fade in={true} timeout={1000} style={{ transitionDelay: `500ms` }}>
          <List sx={sxStyles.plansList}>
            {plans.map(planItem => (
              <div className={classes.listItem} key={planItem.document.title}>
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
                    <PlansSave plan={planItem} />
                  </div>
                </div>
              </div>
            ))}
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
