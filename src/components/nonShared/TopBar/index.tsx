import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';

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
          <Button color='inherit' startIcon={<GoogleIcon />}>
            {t('TOP_BAR.LOGIN')}
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default TopBar;
