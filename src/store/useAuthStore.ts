import { create } from 'zustand'; // Correct import

interface AuthState {
  role: 'mentor' | 'mentee' | null;
  setRole: (role: 'mentor' | 'mentee') => void;
}

const useAuthStore = create<AuthState>((set) => ({
  role: null,
  setRole: (role) => set({ role }),
}));

export default useAuthStore;