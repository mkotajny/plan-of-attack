import { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const GoogleAuth = () => {
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const [auth, setAuth] = useState<gapi.auth2.GoogleAuth>();

  const onAuthChange = (auth: gapi.auth2.GoogleAuth) => {
    setSignedIn(auth.isSignedIn.get());
  };

  const onChangeAuthentication = () => {
    isSignedIn ? auth?.signOut() : auth?.signIn();
  };

  useEffect(() => {
    let isCancelled = false;
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId: process.env.REACT_APP_GOOGLE_API_CLIENT_ID,
          scope: 'email',
        })
        .then(() => {
          if (!isCancelled) {
            const auth = window.gapi.auth2.getAuthInstance();
            setAuth(auth);
            setSignedIn(auth.isSignedIn.get());
            auth.isSignedIn.listen(() => onAuthChange(auth));
          }
        });
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  return (
    <Button color='inherit' startIcon={isSignedIn ? undefined : <GoogleIcon />} onClick={onChangeAuthentication}>
      {isSignedIn ? 'Sign out' : 'Sign in'}
    </Button>
  );
};

export default GoogleAuth;

/*
const profile = auth.currentUser.get().getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Full Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Email: ' + profile.getEmail());
            */
