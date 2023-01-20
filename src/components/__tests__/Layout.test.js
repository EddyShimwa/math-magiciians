import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Layout from '../interface/Layout';

describe('Test Layout with snapshot', () => {
  test('should match the previous snapshot', () => {
    const tree = renderer.create(
      <BrowserRouter>
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </BrowserRouter>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('The child component should be successfully rendered', () => {
    render(
      <BrowserRouter>
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </BrowserRouter>,
    );
    expect(screen.getByText('Hello world')).toBeInTheDocument();
  });
  test('should be accessible', () => {
    const { container } = render(
      <BrowserRouter>
        <Layout>
          <h1>Hello world</h1>
        </Layout>
      </BrowserRouter>,
    );
    expect(container).toBeInTheDocument();
  });
});
