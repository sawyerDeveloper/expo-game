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

export const Clock = forwardRef((_props, ref) => {
  const [currentTime, setCurrentTime] = useState(0);
  const startTime = useRef(Date.now());
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  useImperativeHandle(ref, () => ({
    currentTime,
  }));

  const setTime = () => {
    if (
      Math.floor((Date.now() - startTime.current) / CLOCK_TIME) > currentTime
    ) {
      setCurrentTime(Math.floor((Date.now() - startTime.current) / CLOCK_TIME));
    }
  };

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.update(setTime));
    }
    return () => gameLoop.cleanup(animationID);
  }, [startTime]);

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
