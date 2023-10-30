import { StyleSheet, View } from 'react-native';
import { Label } from '../designSystem/ui/Label';
import { forwardRef, useEffect, useImperativeHandle, useState } from 'react';

const CLOCK_TIME: number = 1000;

export const Clock = forwardRef((_props, ref) => {
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime] = useState(Date.now());

  useImperativeHandle(ref, () => ({
    currentTime,
  }));

  const setTime = () => {
    setCurrentTime(Math.floor((Date.now() - startTime) / 1000));
  };

  useEffect(() => {
    const interval = setInterval(setTime, CLOCK_TIME);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Label color='#fff' size={26} text={currentTime} />
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
