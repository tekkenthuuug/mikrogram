import { createContext } from 'react';
import { User } from '../types';

export const UserContext = createContext<{
  currentUser: null | User;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  setFetchingUser: React.Dispatch<React.SetStateAction<boolean>>;
} | null>(null);
