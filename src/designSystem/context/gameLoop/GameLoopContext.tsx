import { createContext } from 'react';

export const GameLoopContext = createContext({
  update: (callback) => {}
});

