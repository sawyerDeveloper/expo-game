import { useEffect, useRef } from 'react';
import { GameLoopContext, MAX_FPS } from './GameLoopContext';

export const GameLoopContextProvider = ({ children }) => {
  const previousTimeTick = useRef(0);
  const currentFpsTick = useRef(0);
  const callbacks = useRef([]);

  const subscribe = (callback): number => {
    const id = Date.now();
    const obj = { id: id, callback: callback };
    callbacks.current.push(obj);
    return id;
  };

  const update = () => {
    requestAnimationFrame(update);
    let now = Math.round((MAX_FPS * Date.now()) / 1000);
    if (now == previousTimeTick.current) return;
    previousTimeTick.current = now;
    currentFpsTick.current++;
    for (var i = 0; i < callbacks.current.length; i++) {
      callbacks.current[i].callback(currentFpsTick.current);
    }

    if (currentFpsTick.current == 60) {
      currentFpsTick.current = 0;
    }
  };

  const cleanup = (id) => {
    callbacks.current.splice(
      callbacks.current.findIndex((callback) => callback.id === id),
      1
    );
  };

  useEffect(() => {
    const req = requestAnimationFrame(update);
    return () => cancelAnimationFrame(req);
  }, [update]);

  return (
    <GameLoopContext.Provider value={{ subscribe, cleanup }}>
      {children}
    </GameLoopContext.Provider>
  );
};
