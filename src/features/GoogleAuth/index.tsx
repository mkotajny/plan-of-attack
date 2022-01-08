import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, CircularProgress, Avatar, Tooltip } from '@mui/material';
import { Google, ExpandMore } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { selectCurrentUser, signIn, signOut, setInProgress, setGoogleInitialize } from './authSlice';
import { get } from 'lodash';
import UserMenu from './UserMenu';
import { useStyles } from './styles';

const GoogleAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [auth, setAuth] = useState<gapi.auth2.GoogleAuth>();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>();
  const currentUser = useSelector(selectCurrentUser);
  const divRef = useRef<HTMLDivElement>(null);

  const onGoogleAuthChange = (auth: gapi.auth2.GoogleAuth) => {
    const profile = auth.currentUser.get().getBasicProfile();
    auth.isSignedIn.get()
      ? dispatch(
          signIn({ fullName: profile.getName(), firstName: profile.getGivenName(), imageUrl: profile.getImageUrl() })
        )
      : dispatch(signOut());
  };

  useEffect(() => {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          const auth = window.gapi.auth2.getAuthInstance();
          auth.isSignedIn.listen(() => onGoogleAuthChange(auth));
          setAuth(auth);
          dispatch(setGoogleInitialize(true));
          onGoogleAuthChange(auth);
        })
        .catch(error => {
          dispatch(setGoogleInitialize(false));
          enqueueSnackbar(
            `${t('FEATURES.GOOGLE_AUTH.NOTIFICATION_SNAKS.INITIALIZATION_ERROR')}: "${get(error, 'details', '...')}"`,
            { variant: 'error' }
          );
        });
    });
  }, []);

  const onAuthenticationClick = () => {
    dispatch(setInProgress(true));
    currentUser.signedIn
      ? auth?.signOut()
      : auth
          ?.signIn({ prompt: 'select_account' })
          .then()
          .catch(error => {
            dispatch(setInProgress(false));
            enqueueSnackbar(
              `${t('FEATURES.GOOGLE_AUTH.NOTIFICATION_SNAKS.OTHER_ERROR')}: "${get(error, 'error', '...')}"`,
              { variant: 'error' }
            );
          });
  };

  const handleMenuOpen = (open: boolean) => {
    setAnchorEl(open ? divRef.current : null);
  };

  if (currentUser.inProgress) return <CircularProgress color='inherit' />;
  if (!currentUser.googleInitialized) return null;

  return (
    <div className={classes.authContainer}>
      {currentUser.profile.fullName && (
        <Tooltip title='Account settings'>
          <div className={classes.avatarContainer} ref={divRef} onClick={() => handleMenuOpen(true)}>
            <Avatar alt={currentUser.profile.fullName} src={currentUser.profile.imageUrl} />
            <ExpandMore />
          </div>
        </Tooltip>
      )}
      {!currentUser.profile.fullName && (
        <Tooltip title={t('FEATURES.GOOGLE_AUTH.SIGN_IN_TOOLTIP') || ''}>
          <Button
            color='inherit'
            startIcon={currentUser.signedIn ? undefined : <Google />}
            onClick={onAuthenticationClick}
          >
            {t('FEATURES.GOOGLE_AUTH.SIGN_IN')}
          </Button>
        </Tooltip>
      )}
      <UserMenu
        fullName={currentUser.profile.fullName}
        anchorElement={anchorEl}
        handleMenuOpen={handleMenuOpen}
        onAuthenticationClick={onAuthenticationClick}
      />
    </div>
  );
};

export default GoogleAuth;
