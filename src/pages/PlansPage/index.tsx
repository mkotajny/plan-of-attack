import { Fade } from '@mui/material';
import { selectCurrentUser } from 'features/GoogleAuth/authSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

const PlansPage = () => {
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <div className={classes.root}>
      {!currentUser.inProgress && !currentUser.signedIn && t('PAGES.PLANS.CONTENT_SIGNED_OUT')}
      {currentUser.signedIn && (
        <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
          <div>plans list ...</div>
        </Fade>
      )}
    </div>
  );
};

export default PlansPage;
