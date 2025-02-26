import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

// Základní URL pro API
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8000/api';

// Typy pro odpověď API
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  status: number;
}

// Funkce pro volání API
export async function apiRequest<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
  try {
    // Přidání tokenu do hlavičky, pokud existuje
    const token = localStorage.getItem('token');
    const headers = {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...config.headers,
    };

    // Vytvoření plné URL
    const url = config.url?.startsWith('http')
      ? config.url
      : `${API_BASE_URL}${config.url}`;

    // Volání API
    const response: AxiosResponse<T> = await axios({
      ...config,
      url,
      headers,
    });

    return {
      data: response.data,
      status: response.status,
    };
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    
    return {
      error: axiosError.response?.data?.message || axiosError.message || 'Neznámá chyba',
      status: axiosError.response?.status || 500,
    };
  }
} 