import { render, screen } from 'test-utils';
import Background from './index';

describe('Initial render', () => {
  test('renders proper Background for Welcome Page', () => {
    render(
      <Background homePage>
        <div />
      </Background>
    );
    const style = window.getComputedStyle(screen.getByRole('background'));
    expect(style.textAlign).toBe('center');
  });
  test('renders proper Background for other pages (without a background image)', () => {
    render(
      <Background>
        <div />
      </Background>
    );
    const style = window.getComputedStyle(screen.getByRole('background'));
    expect(style.textAlign).toBe('');
  });
});
