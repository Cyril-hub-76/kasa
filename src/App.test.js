import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App.js';

function renderAt(path) {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>
  );
}

test('renders the home route', () => {
  renderAt('/');
  expect(screen.getByText('Chez vous,')).toBeInTheDocument();
});

test('renders the about route', () => {
  renderAt('/about');
  expect(screen.getByText('Fiabilité')).toBeInTheDocument();
});

test('renders a valid logement route', () => {
  renderAt('/logements/c67ab8a7');
  expect(screen.getByRole('heading', { name: 'Appartement cosy' })).toBeInTheDocument();
});

test('renders the 404 page for an unknown route', () => {
  renderAt('/route-qui-n-existe-pas');
  expect(screen.getByText('404')).toBeInTheDocument();
});

test('redirects an unknown logement to the 404 page', async () => {
  renderAt('/logements/id-inconnu');
  expect(await screen.findByText('404')).toBeInTheDocument();
});
