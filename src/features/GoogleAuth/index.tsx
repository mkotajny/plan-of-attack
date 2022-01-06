import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress, Avatar, Tooltip } from '@mui/material';
import { Google, ExpandMore } from '@mui/icons-material';
import { selectCurrentUser, signIn, signOut, setInProgress, setGoogleInitialize } from './authSlice';
import UserMenu from './UserMenu';
import { useStyles } from './styles';

const GoogleAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [auth, setAuth] = useState<gapi.auth2.GoogleAuth>();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>();
  const currentUser = useSelector(selectCurrentUser);
  const divRef = useRef<HTMLDivElement>(null);

  const onGoogleAuthChange = (auth: gapi.auth2.GoogleAuth) => {
    const profile = auth.currentUser.get().getBasicProfile();
    auth.isSignedIn.get()
      ? dispatch(signIn({ userName: profile.getName(), imageUrl: profile.getImageUrl() }))
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
        .catch(() => {
          dispatch(setGoogleInitialize(false));
        });
    });
  }, []);

  const onAuthenticationClick = () => {
    dispatch(setInProgress(true));
    currentUser.signedIn
      ? auth?.signOut()
      : auth
          ?.signIn()
          .then()
          .catch(() => {
            dispatch(setInProgress(false));
          });
  };

  const handleMenuOpen = (open: boolean) => {
    setAnchorEl(open ? divRef.current : null);
  };

  if (currentUser.inProgress) return <CircularProgress color='inherit' />;
  if (!currentUser.googleInitialized) return null;

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
        <Button
          color='inherit'
          startIcon={currentUser.signedIn ? undefined : <Google />}
          onClick={onAuthenticationClick}
        >
          {currentUser.signedIn ? 'Sign out' : 'Sign in'}
        </Button>
      )}
      <UserMenu
        userName={currentUser.profile.userName}
        anchorElement={anchorEl}
        handleMenuOpen={handleMenuOpen}
        onAuthenticationClick={onAuthenticationClick}
      />
    </div>
  );
};

export default GoogleAuth;
