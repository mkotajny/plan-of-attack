import { useState } from 'react';
import { useStyles } from './styles';
import { Typography, Button, Tooltip } from '@mui/material';
import { t } from 'i18next';
import Logo from '../../../assets/images/plan-of-attack-logo.png';

const Welcome = () => {
  const classes = useStyles();
  const [tooltipIsOpen, setTooltipIsOpen] = useState(false);
  return (
    <div className={classes.rootMarek}>
      <img src={Logo} className={classes.logo} alt='logo' loading='lazy' />
      <Typography variant='h4'>
        <div className={classes.mainTitle}>{t('WELCOME_PAGE.TITLE')}</div>
      </Typography>
      <Typography variant='h6'>
        <div className={classes.subTitle}>{t('WELCOME_PAGE.SUBTITLE')}</div>
      </Typography>
      <div className={classes.buttonStart}>
        <Tooltip open={tooltipIsOpen} placement='bottom' arrow title='Coming soon ...'>
          <Button
            variant='contained'
            color='warning'
            size='large'
            onClick={() => {
              setTooltipIsOpen(!tooltipIsOpen);
            }}
          >
            {t('WELCOME_PAGE.BUTTON_START')}
          </Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default Welcome;
