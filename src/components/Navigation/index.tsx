import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

// consider to NOT remove sample links below (and this comment), until you will implement any REAL feature, which uses the same routing flow

const Navigation = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.navigation}>
      <Link to='/'>{t('NAVIGATION.HOME')}</Link>
      <Link to='/otherPage'>{t('NAVIGATION.OTHER_PAGE')}</Link>
    </nav>
  );
};

export default Navigation;
