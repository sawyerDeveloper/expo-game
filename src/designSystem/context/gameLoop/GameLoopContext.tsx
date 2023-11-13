import { createContext } from 'react';

export const GameLoopContext = createContext({
  subscribe: (callback) : number => 0,
  cleanup: (id) => {}
});

