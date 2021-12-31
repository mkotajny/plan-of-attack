import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import PlansPage from 'pages/PlansPage';
import AppRouteEnum from './AppRoute.enum';

const AppRoutes = () => (
  <Routes>
    <Route path={AppRouteEnum.home} element={<WelcomePage />} />
    <Route path={AppRouteEnum.plans} element={<PlansPage />} />
    <Route
      path='*'
      element={
        <main style={{ padding: '1rem' }}>
          <p>There is nothing here!</p>
        </main>
      }
    />
  </Routes>
);

export default AppRoutes;
