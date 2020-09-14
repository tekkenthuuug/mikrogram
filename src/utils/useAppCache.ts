import { useRef, useCallback } from 'react';
import { AppCache } from '../types';

export interface IUseAppCache {
  cache: AppCache;
  setCache: <K extends 'posts'>(key: K, data: AppCache[K]) => void;
}

const useAppCache = (): IUseAppCache => {
  const cache = useRef<AppCache>({
    posts: [],
  });

  const setCache = useCallback(function setCache<K extends keyof AppCache>(
    key: K,
    data: AppCache[K]
  ) {
    cache.current[key] = data;
  },
  []);

  return { cache: cache.current, setCache };
};

export default useAppCache;
