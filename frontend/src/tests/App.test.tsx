import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../App';
import { BrowserRouter } from 'react-router-dom';

describe('App', () => {
  it('renders without crashing', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    // Hledáme něco, co víme, že bude v aplikaci vždy přítomno
    expect(document.querySelector('div')).toBeInTheDocument();
  });
}); 