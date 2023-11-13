import { StyleSheet, View } from 'react-native';
import { Label } from '../designSystem/ui/Label';
import {
  forwardRef,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import { GameLoopContext } from '../designSystem/context/gameLoop/GameLoopContext';

const CLOCK_TIME: number = 1000;
const FPS = 1;
export const Clock = forwardRef((_props, ref) => {
  const [currentTime, setCurrentTime] = useState(0);
  const startTime = useRef(Date.now());
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  useImperativeHandle(ref, () => ({
    currentTime,
  }));

  const setTime = (tick) => {
    //TODO convert fps to exact frame to act upon out of 60
    if (tick == FPS) {
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
    <View style={styles.container}>
      <Label fontFamily='neuro' color='#fff' size={26} text={currentTime} />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
});
