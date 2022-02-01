import useToolkit from 'hooks/useToolkit';
import { Link } from 'react-router-dom';
import styles from './navigation.module.css';

const Navigation = () => {
  const { t } = useToolkit();
  return (
    <nav className={styles.navigation}>
      <Link to='/'>{t('NAVIGATION.HOME')}</Link>
      {/* <Link to='/otherPage'>{t('NAVIGATION.OTHER_PAGE')}</Link> */}
    </nav>
  );
};

export default Navigation;
