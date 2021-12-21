import { useTranslation } from 'react-i18next';
import styles from './welcome.module.css';

const Welcome = () => {
  const { t } = useTranslation();
  return (
    <header className={styles.appHeader}>
      <img
        src='https://user-images.githubusercontent.com/33925073/146893835-d527501b-ef41-49ac-b2fa-f197f5a2048f.png'
        className={styles.appLogo}
        alt='logo'
      />
      <p>{t('MAIN.WELCOME')}</p>
    </header>
  );
};

export default Welcome;
