import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import GoogleAuth from '../../../features/GoogleAuth';
import Logo from '../../../assets/images/plan-of-attack-logo.png';
import useToolkit from 'hooks/useToolkit';
import { useStyles } from './styles';

const TopBar = () => {
  const classes = useStyles();
  const { t } = useToolkit();
  return (
    <Box className={classes.topBar} sx={{ flexGrow: 1 }}>
      <AppBar position='fixed'>
        <Toolbar>
          <img src={Logo} className={classes.logo} alt='logo' />
          <Typography variant='h5' component='div' sx={{ flexGrow: 1 }}>
            {t(`PAGES.WELCOME.TITLE`)}
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
