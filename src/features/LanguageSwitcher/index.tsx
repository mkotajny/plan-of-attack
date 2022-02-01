import { Tooltip } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { useStyles } from './styles';

import flagPL from '../../assets/countryFlags/flag-pl.png';
import flagUK from '../../assets/countryFlags/flag-uk.png';

const LanguageSwitcher = () => {
  const classes = useStyles();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Tooltip placement='left' arrow title={t('PAGES.WELCOME.FLAG_TOOLTIP')!}>
      <div
        className={classes.flagContainer}
        onClick={() => {
          changeLanguage(i18n.language === 'en' ? 'pl' : 'en');
        }}
      >
        <img src={i18n.language === 'en' ? flagPL : flagUK} />
      </div>
    </Tooltip>
  );
};

export default LanguageSwitcher;
