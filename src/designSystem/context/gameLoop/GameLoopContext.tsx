import { createContext } from 'react';
export const MAX_FPS: number = 60;
export const GameLoopContext = createContext({
  subscribe: (callback) : number => 0,
  cleanup: (id) => {}
});

