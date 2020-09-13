import { createContext } from 'react';
import { IUseAppCache } from '../utils/useAppCache';

export const CacheContext = createContext<null | IUseAppCache>(null);
