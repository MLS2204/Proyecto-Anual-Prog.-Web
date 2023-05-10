import { render, screen } from '@testing-library/react';
import App from './App';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
