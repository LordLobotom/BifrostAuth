import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import EmailVerificationPage from '@/pages/auth/EmailVerificationPage';
import { vi } from 'vitest';

const mockNavigate = vi.fn();
const mockSearchParams = new URLSearchParams();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate,
    useSearchParams: () => [mockSearchParams],
  };
});

vi.mock('@/lib/api', () => ({
  apiRequest: vi.fn().mockImplementation(async ({ data }) => {
    if (data.token === 'valid-token') {
      return { status: 200 };
    }
    return { status: 400, error: 'Neplatný token' };
  }),
}));

describe('EmailVerificationPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockSearchParams.delete('token');
  });

  it('shows error when token is missing', async () => {
    render(
      <BrowserRouter>
        <EmailVerificationPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Chybí verifikační token')).toBeInTheDocument();
    });
  });

  it('shows success message with valid token', async () => {
    mockSearchParams.set('token', 'valid-token');

    render(
      <BrowserRouter>
        <EmailVerificationPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('E-mail byl úspěšně ověřen')).toBeInTheDocument();
    });
  });

  it('shows error message with invalid token', async () => {
    mockSearchParams.set('token', 'invalid-token');

    render(
      <BrowserRouter>
        <EmailVerificationPage />
      </BrowserRouter>
    );

    await waitFor(() => {
      expect(screen.getByText('Neplatný token')).toBeInTheDocument();
    });
  });

  it('navigates to login page when clicking button', async () => {
    render(
      <BrowserRouter>
        <EmailVerificationPage />
      </BrowserRouter>
    );

    const loginButton = screen.getByRole('button', { name: 'Přejít na přihlášení' });
    loginButton.click();

    expect(mockNavigate).toHaveBeenCalledWith('/login');
  });
}); 