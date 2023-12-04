import { Label } from '../designSystem/ui/Label';
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import {
  GameLoopContext,
  MAX_FPS,
} from '../designSystem/context/gameLoop/GameLoopContext';
import { ViewContainer } from '../designSystem/layout/containers/ViewContainer';

const CLOCK_TIME: number = 1000;
const FPS: number = 1;

export const Clock = forwardRef((_props, ref) => {
  const [currentTime, setCurrentTime] = useState(0);
  const startTime = useRef<number>(Date.now());
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  //  fpsTick = 1
  const fpsTick = MAX_FPS / (MAX_FPS / FPS);

  useImperativeHandle(ref, () => ({
    currentTime,
  }));

  const setTime = (tick) => {
    if (tick === fpsTick) {
      setCurrentTime(Math.floor((Date.now() - startTime.current) / CLOCK_TIME));
    }
  };

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.subscribe(setTime));
    }
    return () => gameLoop.cleanup(animationID);
  }, []);

  return (
    <ViewContainer height={100}>
      <Label fontFamily='neuro' color='#fff' size={26} text={currentTime} />
    </ViewContainer>
  );
});
