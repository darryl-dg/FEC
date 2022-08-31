import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import ReviewList from './components/ReviewList.jsx';

it('renders a list component', () => {
  const {getByText} = render(<ReviewList />);
    expect(getByText('This is the Review List for product 2! There are 2 reviews:'
    )).toBeInTheDocument();
  });