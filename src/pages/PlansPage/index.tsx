import { CircularProgress, Typography, Fade } from '@mui/material';
import { selectCurrentUser } from 'features/GoogleAuth/authSlice';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import comingSoonImage from '../../assets/images/coming-soon.gif';
import { useStyles } from './styles';

const PlansPage = () => {
  const { t } = useTranslation();
  const currentUser = useSelector(selectCurrentUser);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {currentUser.inProgress && <CircularProgress />}
      {!currentUser.inProgress && !currentUser.signedIn && t('PAGES.PLANS.CONTENT_SIGNED_OUT')}
      {currentUser.signedIn && (
        <Fade in={true} timeout={1000} style={{ transitionDelay: '500ms' }}>
          <div className={classes.root}>
            <img className={classes.imageWelcome} src={comingSoonImage} />
            <Typography variant='h5'>
              {t('PAGES.PLANS.CONTENT_WELCOME')} {currentUser.profile.userName} !
            </Typography>
            {t('PAGES.PLANS.CONTENT_SIGNED_IN')}...
          </div>
        </Fade>
      )}
    </div>
  );
};

export default PlansPage;
