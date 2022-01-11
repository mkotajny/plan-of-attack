import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import WelcomePage from '../pages/WelcomePage';
import PlansPage from 'pages/PlansPage';
import AppRoutesEnum from './AppRoute.enum';

const AppRoutes = () => {
  const { t } = useTranslation();
  return (
    <Routes>
      <Route path={AppRoutesEnum.home} element={<WelcomePage />} />
      <Route path={AppRoutesEnum.plans} element={<PlansPage />} />
      <Route path='*' element={<main style={{ padding: '1rem' }}>{t('ROUTING.ROUTE_DOESNT_EXISTS')}</main>} />
    </Routes>
  );
};

export default AppRoutes;
