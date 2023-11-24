import { createContext } from 'react';
export const GameAudioContext = createContext({
  playSound: (name: string, loop: boolean = false) => {},
  playMusic: (name: string) => {},
  pauseSound: (name: string) => {},
});
