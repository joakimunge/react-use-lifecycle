import { useEffect } from 'react';

export const useComponentDidMount = (effect) => {
  return useEffect(() => {
    effect();
  }, []);
};

export const useComponentDidUpdate = (effect, guards) => {
  return useEffect(() => {
    effect();
  }, guards);
};

export const useComponentWillUnmount = (effect) => {
  return useEffect(() => {
    return effect;
  });
};
