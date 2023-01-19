import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import renderer from 'react-test-renderer';
import Card from '../interface/Card';

describe('Compare the Card component current output to a previous snapshot', () => {
  test('The component output should be consistent with the previous snapshot.', () => {
    const card = renderer
      .create(
        <Card>
          <h1>Hello from Card Component</h1>
        </Card>,
      )
      .toJSON();

    expect(card).toMatchSnapshot();
  });

  test('The component should be rendered and visible on the page at all times.', () => {
    render(
      <Card>
        <h1>This is component</h1>
      </Card>,
    );

    expect(screen.getByText('This is component')).toBeInTheDocument();
  });
});
