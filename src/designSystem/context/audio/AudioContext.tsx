import { createContext } from 'react';
export const AudioContext = createContext({
  playSound: (name: string, loop: boolean = false) => {},
  pauseSound: (name: string) => {},
});
