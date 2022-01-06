import { Menu, MenuItem, Divider, ListItemIcon } from '@mui/material';
import { Logout } from '@mui/icons-material';
import { UserMenuPropsType } from './types';
import { useStyles, menuPaperProps } from './styles';

const UserMenu = (props: UserMenuPropsType) => {
  const open = Boolean(props.anchorElement);
  const classes = useStyles();

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
      <div className={classes.menuTitle}>{props.userName}</div>
      <Divider />
      <MenuItem onClick={props.onAuthenticationClick}>
        <ListItemIcon>
          <Logout fontSize='small' />
        </ListItemIcon>
        Logout
      </MenuItem>
    </Menu>
  );
};

export default UserMenu;
