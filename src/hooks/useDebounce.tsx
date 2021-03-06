import { useRef } from 'react';

const useDebounce = (fn: any, delay: number) => {
  const timeoutRef = useRef(null);

  const debouncedFn = (...args: any[]) => {
    window.clearTimeout(timeoutRef.current);
    timeoutRef.current = window.setTimeout(() => {
      fn(...args);
    }, delay);
  };

  return debouncedFn;
};

export default useDebounce;
