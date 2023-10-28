import { StyleSheet, View } from 'react-native';
import { Label } from '../designSystem/ui/Label';
import { useEffect, useState } from 'react';

const CLOCK_TIME: number = 1000;

export const Clock = () => {
  const [currentTime, setCurrentTime] = useState(0);
  const [startTime] = useState(Date.now());

  const setTime = () => {
    setCurrentTime(Math.floor((Date.now() - startTime) / 1000));
  };

  useEffect(() => {
    const interval = setInterval(setTime, CLOCK_TIME);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <Label color='#fff' size={16} text={currentTime} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
});
