import { Image } from 'expo-image';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import { background } from '../../designSystem/assets/sprites/background';
import { useContext, useEffect, useRef, useState } from 'react';
import { GameLoopContext } from '../../designSystem/';

export const Parallax = ({ children = null }) => {
  const { width } = useWindowDimensions();
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  const [x, setX] = useState(0);
  const goLeft = useRef(false);

  const moveBackground = () => {
    const newValue = goLeft.current ? -1 : 1;
    setX((left) => left - newValue);
  };

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.subscribe(moveBackground));
    }
    return () => gameLoop.cleanup(animationID);
  }, []);

  const pointerDown = (event) => {
    //  Multiplatform
    const newX = event.changedTouches
    ? event.changedTouches[0].clientX
    : event.nativeEvent.pageX;
    goLeft.current = newX > width / 2;
  };

  return (
    <View
      style={styles.container}
      onPointerDown={pointerDown}
      onTouchStart={pointerDown}
    >
      <Image
        contentPosition={{ left: x, top: 0 }}
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
