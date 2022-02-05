import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';
import { useNavigate } from 'react-router-dom';
import { Typography, Button } from '@mui/material';

import LanguageSwitcher from 'features/LanguageSwitcher';
import Logo from '../../assets/images/plan-of-attack-logo.png';
import AppRoutesEnum from 'routing/AppRoute.enum';

const WelcomePage = () => {
  const { t } = useTranslation();
  let navigate = useNavigate();
  const classes = useStyles();
  return (
    <div className={classes.rootWelcomePage}>
      <LanguageSwitcher />
      <img src={Logo} className={classes.logo} alt='logo' loading='lazy' />
      <Typography variant='h4'>
        <div className={classes.mainTitle}>{t('PAGES.WELCOME.TITLE')}</div>
      </Typography>
      <Typography variant='h6'>
        <div className={classes.subTitle}>{t('PAGES.WELCOME.SUBTITLE')}</div>
      </Typography>
      <div className={classes.buttonStart}>
        <Button
          role='start-button'
          variant='contained'
          color='warning'
          size='large'
          onClick={() => {
            navigate(AppRoutesEnum.myTasks);
          }}
        >
          {t('PAGES.WELCOME.BUTTON_START')}
        </Button>
      </div>
    </div>
  );
};

export default WelcomePage;
