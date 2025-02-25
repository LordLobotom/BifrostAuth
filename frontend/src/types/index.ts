// Základní typy pro celou aplikaci

// Uživatelské typy
export interface User {
  id: number;
  username: string;
  email: string;
  fullName?: string;
  isActive: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt?: string;
  roles?: Role[];
}

export interface Role {
  id: number;
  name: string;
  description?: string;
}

// Autentizační typy
export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

export interface LoginCredentials {
  username: string;
  password: string;
}

export interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

// API typy
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
  status: number;
}

// Pagination typy
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// Typy pro formuláře
export interface FormError {
  field: string;
  message: string;
} 