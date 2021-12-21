import AppRoutes from './routing/AppRoutes';
import styles from './App.module.css';

const App = () => (
  <div className={styles.app}>
    {/* <Navigation /> */}
    <AppRoutes />
  </div>
);
export default App;
