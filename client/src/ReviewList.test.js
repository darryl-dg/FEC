import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Reviews from './components/Reviews.jsx';

it('renders a list component', () => {
  const {getByText} = render(<Reviews />);
    expect(getByText('Ratings')).toBeInTheDocument();
  });