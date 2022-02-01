import { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, CircularProgress, Avatar, Tooltip } from '@mui/material';
import { Google, ExpandMore } from '@mui/icons-material';
import { selectCurrentUser, signInThunk, toggleAuthSubscribtionThunk } from './slice';
import UserMenu from './UserMenu';
import { getErrorMessage } from './utils';
import useToolkit from 'hooks/useToolkit';
import { useStyles } from './styles';

const GoogleAuth = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t, enqueueSnackbar } = useToolkit();
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>();
  const currentUser = useSelector(selectCurrentUser);
  const divRef = useRef<HTMLDivElement>(null);

  const onSignInClick = async () => {
    try {
      await dispatch(signInThunk());
    } catch (error: unknown) {
      enqueueSnackbar(getErrorMessage(t, error), { variant: 'error' });
    }
  };

  useEffect(() => {
    let isCancelled = false;
    dispatch(toggleAuthSubscribtionThunk(isCancelled));
    return () => {
      isCancelled = true;
      dispatch(toggleAuthSubscribtionThunk(isCancelled));
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
          <Button color='inherit' startIcon={<Google />} onClick={onSignInClick}>
            {t('FEATURES.GOOGLE_AUTH.SIGN_IN')}
          </Button>
        </Tooltip>
      )}
      <UserMenu fullName={currentUser.profile.userName} anchorElement={anchorEl} handleMenuOpen={handleMenuOpen} />
    </div>
  );
};

export default GoogleAuth;
