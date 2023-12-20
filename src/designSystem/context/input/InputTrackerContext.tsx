import { createContext } from 'react';
export interface PointerPosition {
  x: number
  y: number
}
export const InputTrackerContext = createContext({
  x: 0,
  y: 0
});
