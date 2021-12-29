import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
// import OtherPage from '../pages/OtherPage';
import AppRoute from './AppRoute.enum';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<WelcomePage />} />
    {/* <Route path={AppRoute.otherPage} element={<OtherPage />} /> */}
  </Routes>
);

export default AppRoutes;
