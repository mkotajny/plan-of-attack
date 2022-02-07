import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import LanguageSwitcher from './index';

const getLanguageSwitchElements = () => ({
  switcher: screen.getByRole('language-switcher'),
  switchImage: screen.getByRole('img', { name: 'switch language' }),
});

describe('Language Switcher tests', () => {
  test('Initial render', () => {
    render(<LanguageSwitcher />);
    const languageSwitchElements = getLanguageSwitchElements();
    expect(languageSwitchElements.switcher).toBeInTheDocument();
    expect(languageSwitchElements.switchImage).toHaveAttribute('src', 'flag-uk.png');
  });

  test('Language-switch operation', () => {
    render(<LanguageSwitcher />);
    const languageSwitchElements = getLanguageSwitchElements();
    userEvent.click(languageSwitchElements.switcher);
    expect(languageSwitchElements.switchImage).toHaveAttribute('src', 'flag-pl.png');
  });
});
