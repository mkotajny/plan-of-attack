import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import OtherPage from '../pages/OtherPage';
import AppRoute from './AppRoute.enum';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<HomePage />} />
    <Route path={AppRoute.otherPage} element={<OtherPage />} />
  </Routes>
);

export default AppRoutes;
