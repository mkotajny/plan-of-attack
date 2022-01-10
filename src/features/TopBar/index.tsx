import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

import GoogleAuth from '../GoogleAuth';

import { useStyles } from './styles';

const TopBar = () => {
  const classes = useStyles();
  const { t } = useTranslation();
  const titleKey = useLocation().pathname.toUpperCase().replace('/', '');
  return (
    <Box className={classes.topBar} sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            {t(`PAGES.${titleKey}.TITLE`)}
          </Typography>
          <GoogleAuth />
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
