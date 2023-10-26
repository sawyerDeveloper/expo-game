import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from './src/designSystem/Button';
import { GameView } from './src/components/GameView';
import { ResultView } from './src/components/ResultView';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);

  const start = () => {
    setGameStarted(true);
  };

  const win = () => {
    setGameStarted(false);
    setGameWon(true);
  };

  const lose = () => {
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        This is{!gameStarted && ' going to be'} a fun game!
      </Text>
      {!gameStarted ? (
        <Button title='Start' onPress={start} />
      ) : (
        <GameView win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && <ResultView gameWon={gameWon} />}
      <StatusBar style='dark' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
  label: {
    color: '#fb9',
  },
});
