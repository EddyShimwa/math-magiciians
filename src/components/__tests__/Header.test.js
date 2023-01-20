import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Header from '../interface/header';

describe('Use snapshots to confirm the stability of the Header component', () => {
  test('should match the snapshot', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <Header />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('should include the logo', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );

    expect(
      screen.getByRole('heading', { name: 'Math Magicians', exact: false }),
    ).toBeInTheDocument();
  });

  test('should highlight the active link', () => {
    const { getByRole } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    const homeLink = getByRole('link', { name: 'Home' });
    expect(homeLink).toHaveClass('active');
    const quoteLink = getByRole('link', { name: 'Quote' });
    expect(quoteLink).not.toHaveClass('active');
  });
});
