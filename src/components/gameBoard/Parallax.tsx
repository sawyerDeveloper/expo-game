import { Image } from 'expo-image';
import { StyleSheet, View } from 'react-native';
import { background } from '../../designSystem/assets/sprites/background';
import { useContext, useEffect, useRef, useState } from 'react';
import { GameLoopContext } from '../../designSystem/context/gameLoop/GameLoopContext';

export const Parallax = ({ children = null }) => {
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);
  const [left, setLeft] = useState(0);
  const betterLeft = useRef(0)
  const moveBackground = useRef(() => {
    setLeft(betterLeft.current--);
  });

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.subscribe(moveBackground.current));
    }
    return () => gameLoop.cleanup(animationID);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        contentPosition={{ left: left, top: 0 }}
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
    width:1649
  },
});
