import { Routes, Route } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import TasksPage from 'pages/TasksPage';
import AuthorizedPage from '../pages/Page/AuthorizedPage';
import AppRoutesEnum from './AppRoute.enum';
import { BigIconInfo, BigIconInfoTypesEnum } from '../components/BigIconInfo';

const AppPageRoutes = () => {
  return (
    <Routes>
      <Route path={AppRoutesEnum.home} element={<WelcomePage />} />
      <Route path={AppRoutesEnum.myTasks} element={<AuthorizedPage page={<TasksPage />} />} />
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
