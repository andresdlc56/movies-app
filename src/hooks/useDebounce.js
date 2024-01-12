import { useEffect, useState } from 'react';

export const useDebounce = ( value, delay ) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
      const timer = setTimeout(() => {
          //console.log('Hola');
          setDebouncedValue(value);
      }, delay || 500);

      return () => {
        clearTimeout(timer)
      }
  }, [value, delay]);

  return debouncedValue
}