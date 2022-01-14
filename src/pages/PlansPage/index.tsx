import { selectCurrentUser } from 'features/GoogleAuth/authSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import PlansList from 'features/Plans/PlansList';

import { useStyles } from './styles';

const PlansPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      {!currentUser.inProgress && !currentUser.signedIn && t('PAGES.PLANS.CONTENT_SIGNED_OUT')}
      {currentUser.signedIn && <PlansList />}
    </div>
  );
};

export default PlansPage;
