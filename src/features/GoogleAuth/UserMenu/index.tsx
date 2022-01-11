import { Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { UserMenuPropsType } from './types';
import { useStyles, menuPaperProps } from './styles';
import { useTranslation } from 'react-i18next';
import { auth } from 'firebase/firebase.utils';

const UserMenu = (props: UserMenuPropsType) => {
  const open = Boolean(props.anchorElement);
  const classes = useStyles();
  const { t } = useTranslation();

  return (
    <Menu
      anchorEl={props.anchorElement}
      id='account-menu'
      open={open}
      onClose={() => props.handleMenuOpen(false)}
      onClick={() => props.handleMenuOpen(false)}
      PaperProps={menuPaperProps}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <div className={classes.menuTitle}>{props.fullName}</div>
      <Divider />
      <MenuItem onClick={() => auth.signOut()}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        {t('FEATURES.GOOGLE_AUTH.SIGN_OUT')}
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
