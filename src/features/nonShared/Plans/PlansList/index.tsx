import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { selectCurrentUser } from 'features/nonShared/GoogleAuth/slice';
import { selectPlans, fetchPlansThunk } from '../slice';
import { List, ListItem, ListItemAvatar, Avatar, ListItemText, Fade } from '@mui/material';
import { BigIconInfo, BigIconInfoTypesEnum } from 'features/shared/BigIconInfo';
import { useStyles, sxStyles } from './styles';
import PlansForm from '../PlansForm';

const PlansList = () => {
  const classes = useStyles();
  const currentUser = useSelector(selectCurrentUser);
  const plans = useSelector(selectPlans).plans;
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
      <PlansForm />
      <div className={classes.listContainer}>
        <Fade in={true} timeout={1000} style={{ transitionDelay: `500ms` }}>
          <List sx={sxStyles.plansList}>
            {plans.map(planItem => (
              <ListItem alignItems='center' className={classes.listItem} key={planItem.title}>
                <ListItemAvatar>
                  <Avatar alt='Remy Sharp' src={currentUser.profile.imageUrl} />
                </ListItemAvatar>
                <ListItemText primary={planItem.title} secondary={currentUser.profile.userName} />
              </ListItem>
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
