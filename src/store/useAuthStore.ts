import { create } from 'zustand';
import { User, seedUsers } from '@/data/seedData';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  initAuth: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  
  login: (email: string, password: string) => {
    const user = seedUsers.find(
      (u) => u.email === email && u.password === password
    );
    
    if (user) {
      localStorage.setItem('auth_user', JSON.stringify(user));
      set({ user, isAuthenticated: true });
      return true;
    }
    return false;
  },
  
  logout: () => {
    localStorage.removeItem('auth_user');
    set({ user: null, isAuthenticated: false });
  },
  
  initAuth: () => {
    const storedUser = localStorage.getItem('auth_user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      set({ user, isAuthenticated: true });
    }
  },
}));
