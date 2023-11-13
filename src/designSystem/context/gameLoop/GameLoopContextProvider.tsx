import { GameLoopContext } from './GameLoopContext';

export const GameLoopContextProvider = ({ children }) => {


    const FPS = 60;
    let prevTick = 0;    


    const callbacks = []
    const update = (callback) => {
        console.log('update in provider')
        callbacks.push(callback);
    };
    const callUpdates = () => {
        requestAnimationFrame(callUpdates)
        let now = Math.round(FPS * Date.now() / 1000);
        if (now == prevTick) return;
        prevTick = now;
        for(var i = 0 ; i < callbacks.length - 1 ; i++){
            callbacks[i]()
        }
    }
    requestAnimationFrame(callUpdates)

  return (
    <GameLoopContext.Provider value={{update}}>
      {children}
    </GameLoopContext.Provider>
  );
};
