export interface AuthState {
    isAuthenticated: boolean;
    user: string | null;
    login: (username: string) => void;
    logout: () => void;
  }