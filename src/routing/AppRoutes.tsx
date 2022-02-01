import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import PlansPage from 'pages/PlansPage';
import AuthorizedPage from '../pages/Page/AuthorizedPage';
import AppRoutesEnum from './AppRoute.enum';
import { BigIconInfo, BigIconInfoTypesEnum } from '../components/BigIconInfo';

const AppPageRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutesEnum.home} element={<WelcomePage />} />
      <Route path={AppRoutesEnum.myPlans} element={<AuthorizedPage page={<PlansPage />} />} />
      <Route
        path='*'
        element={
          <main style={{ padding: '1rem' }}>
            <BigIconInfo messageType={BigIconInfoTypesEnum.NonExistingRoute} messageKey='ROUTING.ROUTE_DOESNT_EXISTS' />
          </main>
        }
      />
    </Routes>
  );
};

export default AppPageRoutes;
