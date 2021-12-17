/*
consider to NOT remove this component (use it as an implementation-example),  until you will implement any REAL feature, which uses: 
  - translations
  - lodash
  - routing
*/

import { useTranslation } from 'react-i18next';
import styles from './welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.appHeader}>
      <img
        src='https://user-images.githubusercontent.com/33925073/146369487-1535e133-045f-4f32-ad9c-d74a952728bf.jpg'
        className={styles.appLogo}
        alt='logo'
      />
      <p>{t('MAIN.WELCOME')}</p>
      <a
        className={styles.appLink}
        href='https://github.com/mkotajny/another-react-starter'
        target='_blank'
        rel='noopener noreferrer'
      >
        {t('MAIN.MORE_INFO')}
      </a>
    </header>
  );
};

export default Welcome;
