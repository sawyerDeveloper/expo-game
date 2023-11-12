import { StyleSheet, View } from 'react-native';
import { Label } from '../designSystem/ui/Label';
import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';

const CLOCK_TIME: number = 1000;

export const Clock = forwardRef((_props, ref) => {
  const [currentTime, setCurrentTime] = useState(0);
  const startTime = useRef(Date.now());

  useImperativeHandle(ref, () => ({
    currentTime,
  }));

  const setTime = () => {
    setCurrentTime(Math.floor((Date.now() - startTime.current) / 1000));
  };

  useEffect(() => {
    const interval = setInterval(setTime, CLOCK_TIME);
    return () => clearInterval(interval);
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
