import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { AuthState, User, LoginCredentials, RegisterData } from '../types';
import { apiRequest } from '../services/api/client';

// Počáteční stav
const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: null,
  loading: false,
  error: null,
};

// Typy akcí
type AuthAction =
  | { type: 'LOGIN_REQUEST' }
  | { type: 'LOGIN_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'LOGIN_FAILURE'; payload: string }
  | { type: 'REGISTER_REQUEST' }
  | { type: 'REGISTER_SUCCESS'; payload: { user: User; token: string } }
  | { type: 'REGISTER_FAILURE'; payload: string }
  | { type: 'LOGOUT' }
  | { type: 'CLEAR_ERROR' }
  | { type: 'OAUTH_REQUEST' }
  | { type: 'OAUTH_FAILURE'; payload: string };

// Reducer
const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'REGISTER_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'REGISTER_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case 'REGISTER_SUCCESS':
      return {
        ...state,
        loading: false,
        error: null,
      };
    case 'LOGOUT':
      return {
        ...initialState,
        loading: false,
      };
    case 'CLEAR_ERROR':
      return {
        ...state,
        error: null,
      };
    case 'OAUTH_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'OAUTH_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

// Typy pro kontext
interface AuthContextType extends AuthState {
  login: (credentials: LoginCredentials) => Promise<void>;
  register: (userData: RegisterData) => Promise<void>;
  logout: () => void;
  clearError: () => void;
  oauthLogin: (provider: string) => Promise<void>;
}

// Vytvoření kontextu
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Provider komponenta
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (token && savedUser) {
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: JSON.parse(savedUser),
          token
        }
      });
    }
  }, []);

  const login = async (credentials: LoginCredentials) => {
    dispatch({ type: 'LOGIN_REQUEST' });
    
    try {
      // Pro testování použijeme mock data
      const mockUser = {
        id: 1,
        username: credentials.username,
        email: `${credentials.username}@example.com`,
        isActive: true,
        isVerified: true,
        createdAt: new Date().toISOString(),
        roles: [{ id: 1, name: 'user', description: 'Běžný uživatel' }]
      };
      
      const mockToken = 'mock-jwt-token';
      
      // Uložíme data do localStorage
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(mockUser));
      
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { user: mockUser, token: mockToken }
      });
    } catch (error: any) {
      dispatch({
        type: 'LOGIN_FAILURE',
        payload: error.message || 'Přihlášení se nezdařilo'
      });
    }
  };

  // Registrace
  const register = async (data: RegisterData) => {
    dispatch({ type: 'REGISTER_REQUEST' });
    try {
      const response = await apiRequest<User>({
        url: '/auth/register',
        method: 'POST',
        data,
      });

      if (response.data) {
        dispatch({ type: 'REGISTER_SUCCESS', payload: { user: response.data, token: response.data.token } });
      } else {
        dispatch({
          type: 'REGISTER_FAILURE',
          payload: response.error || 'Registrace se nezdařila',
        });
      }
    } catch (error: any) {
      dispatch({
        type: 'REGISTER_FAILURE',
        payload: error.message || 'Registrace se nezdařila',
      });
    }
  };

  // Odhlášení
  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');
    dispatch({ type: 'LOGOUT' });
  };

  // Vyčištění chyby
  const clearError = () => {
    dispatch({ type: 'CLEAR_ERROR' });
  };

  // Metoda pro OAuth přihlášení
  const oauthLogin = async (provider: string) => {
    dispatch({ type: 'OAUTH_REQUEST' });
    
    try {
      // V produkčním prostředí bychom zde volali API pro získání URL pro přesměrování
      // Pro testovací účely simulujeme úspěšné přihlášení
      if (provider === 'google') {
        // Simulace úspěšného přihlášení přes Google
        const mockUser: User = {
          id: 2,
          username: 'google_user',
          email: 'google_user@example.com',
          fullName: 'Google User',
          isActive: true,
          isVerified: true,
          createdAt: new Date().toISOString(),
          roles: [{ id: 2, name: 'user', description: 'Běžný uživatel' }]
        };
        
        const mockToken = 'mock-google-jwt-token';
        
        // Uložení tokenu do localStorage
        localStorage.setItem('token', mockToken);
        
        dispatch({
          type: 'LOGIN_SUCCESS',
          payload: { user: mockUser, token: mockToken }
        });
        
        return;
      }
      
      // Pokud se dostaneme sem, provider není podporován
      dispatch({
        type: 'OAUTH_FAILURE',
        payload: 'Nepodporovaný poskytovatel přihlášení'
      });
    } catch (error: any) {
      dispatch({
        type: 'OAUTH_FAILURE',
        payload: error.message || 'Přihlášení pomocí OAuth se nezdařilo'
      });
    }
  };

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login,
        register,
        logout,
        clearError,
        oauthLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// Hook pro použití kontextu
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth musí být použit uvnitř AuthProvider');
  }
  return context;
}; 