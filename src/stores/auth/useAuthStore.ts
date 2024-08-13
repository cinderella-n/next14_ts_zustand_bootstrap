import create from 'zustand';
import {AuthState} from './authTypes'
export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  user: null,
  login: (username) => set({ isAuthenticated: true, user: username }),
  logout: () => set({ isAuthenticated: false, user: null }),
}));
