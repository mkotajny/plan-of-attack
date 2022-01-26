import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { Button, CircularProgress, Avatar, Tooltip } from '@mui/material';
import { Google, ExpandMore } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import { selectCurrentUser, signIn, signOut, setInProgress } from './slice';
import { auth, signInWithGoogle } from 'firebase/firebase.utils';
import UserMenu from './UserMenu';
import { useStyles } from './styles';

const GoogleAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { enqueueSnackbar } = useSnackbar();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>();
  const currentUser = useSelector(selectCurrentUser);
  const divRef = useRef<HTMLDivElement>(null);

  const onSignInClick = () => {
    dispatch(setInProgress(true));
    signInWithGoogle().catch(error => {
      dispatch(setInProgress(false));
      enqueueSnackbar(`${t('FEATURES.GOOGLE_AUTH.NOTIFICATION_SNAKS.OTHER_ERROR')}: "${error}"`, {
        variant: 'error',
      });
    });
  };

  useEffect(() => {
    dispatch(setInProgress(true));
    let isCancelled = false;
    const unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      if (!isCancelled) {
        user
          ? dispatch(
              signIn({
                userId: user.uid ? user.uid : undefined,
                userName: user.displayName ? user.displayName : undefined,
                imageUrl: user.photoURL ? user.photoURL : undefined,
              })
            )
          : dispatch(signOut());
      }
    });
    return () => {
      isCancelled = true;
      unsubscribeFromAuth();
    };
  }, []);

  const handleMenuOpen = (open: boolean) => {
    setAnchorEl(open ? divRef.current : null);
  };

  if (currentUser.inProgress) return <CircularProgress color='inherit' />;
  return (
    <div className={classes.authContainer}>
      {currentUser.profile.userName && (
        <Tooltip title='Account settings'>
          <div className={classes.avatarContainer} ref={divRef} onClick={() => handleMenuOpen(true)}>
            <Avatar alt={currentUser.profile.userName} src={currentUser.profile.imageUrl} />
            <ExpandMore />
          </div>
        </Tooltip>
      )}
      {!currentUser.profile.userName && (
        <Tooltip title={t('FEATURES.GOOGLE_AUTH.SIGN_IN_TOOLTIP') || ''}>
          <Button color='inherit' startIcon={currentUser.signedIn ? undefined : <Google />} onClick={onSignInClick}>
            {t('FEATURES.GOOGLE_AUTH.SIGN_IN')}
          </Button>
        </Tooltip>
      )}
      <UserMenu fullName={currentUser.profile.userName} anchorElement={anchorEl} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};

export default GoogleAuth;
