import { createContext } from 'react';
import { User } from '../types';

export const UserContext = createContext<null | User>(null);
