import { useContext, useEffect, useRef, useState } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { Image } from 'expo-image';
import { GameLoopContext } from '../../designSystem/';
import { background } from '../../designSystem/assets/sprites/background';
import { InputTrackerContext } from '../../designSystem/context/input/InputTrackerContext';

export const Parallax = ({ children = null }) => {
  const { width } = useWindowDimensions();
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  const [newX, setNewX] = useState(0);
  const goLeft = useRef(false);

  const moveBackground = () => {
    const newValue = goLeft.current ? -1 : 1;
    setNewX((left) => left - newValue);
  };

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.subscribe(moveBackground));
    }
    return () => gameLoop.cleanup(animationID);
  }, []);

  const pointerDown = (event) => {
    //  Multiplatform
    const newerX = event.changedTouches
      ? event.changedTouches[0].clientX
      : event.nativeEvent.pageX;
    goLeft.current = newerX > width / 2;
  };
const { x } = useContext(InputTrackerContext)
console.log(x)
  return (
    <View
      style={styles.container}
      onPointerDown={pointerDown}
      onTouchStart={pointerDown}
    >
      <Image
        contentPosition={{ left: newX, top: 0 }}
        style={styles.background}
        source={background}
      />
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  background: {
    height: 700,
    width: 1649,
  },
});
