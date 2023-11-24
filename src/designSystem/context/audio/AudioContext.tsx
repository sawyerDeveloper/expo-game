import { createContext } from 'react';
export const AudioContext = createContext({
  playSound: (name: string, loop: boolean = false) => {},
  playMusic: (name: string) => {},
  pauseSound: (name: string) => {},
});
