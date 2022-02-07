import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import { Routes, Route } from 'react-router-dom';
import WelcomePage from './index';
import AppRoutesEnum from '../../routing/AppRoute.enum';

describe('Welcome Page tests', () => {
  test('Initial render', () => {
    render(<WelcomePage />);
    expect(screen.getByRole('img', { name: 'logo' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 4 })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 6 })).toBeInTheDocument();
    expect(screen.getByRole('start-button')).toBeInTheDocument();
  });

  test('On button start click - redirect taskList route url', () => {
    render(
      <Routes>
        <Route path={AppRoutesEnum.home} element={<WelcomePage />} />
        <Route path={AppRoutesEnum.myTasks} element={<div>Task list mocked page</div>} />
      </Routes>
    );

    userEvent.click(screen.getByRole('start-button'));
    expect(screen.getByText(/task list mocked page/i)).toBeInTheDocument();
  });
});
