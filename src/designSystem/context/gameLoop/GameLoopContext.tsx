import { createContext } from 'react';

export const GameLoopContext = createContext({
  update: (callback) : number => 0,
  cleanup: (id) => {}
});

