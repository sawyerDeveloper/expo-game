import { useEffect } from 'react';
import { GameLoopContext } from './GameLoopContext';

const MAX_FPS = 60;
export const GameLoopContextProvider = ({ children }) => {
  let prevTick = 0;
  let callbacks = [];
  const update = (callback) => {
    console.log('update in provider', callback);
    callbacks.push(callback);
  };
  const callUpdates = () => {
    requestAnimationFrame(callUpdates);
    let now = Math.round((MAX_FPS * Date.now()) / 1000);
    if (now == prevTick) return;
    prevTick = now;
    for (var i = 0; i < callbacks.length - 1; i++) {
      callbacks[i]();
    }
  };

  useEffect(() => {
    const req = requestAnimationFrame(callUpdates);
    return () => cancelAnimationFrame(req);
  }, [callUpdates]);

  return (
    <GameLoopContext.Provider value={{ update }}>
      {children}
    </GameLoopContext.Provider>
  );
};
