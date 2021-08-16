import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from './Card';

describe('Card', () => {
  it('renders Card component', () => {
    render(<Card />);
    screen.debug();
    expect(screen.getByText('Follow')).toBeInTheDocument();
  });
});

describe('events', () => {
  it('button click', () => {
    const { getByTestId } = render(<Card />);
    const button = getByTestId('action-button');
    userEvent.click(button);
    expect(screen.getByText('Following')).toBeInTheDocument();
  });
});
