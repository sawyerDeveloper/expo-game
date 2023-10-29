import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button } from './src/designSystem/ui/Button';
import { GameView } from './src/components/screens/GameView';
import { ResultView } from './src/components/screens/ResultView';
import { Label } from './src/designSystem/ui/Label';
import { VSpacer } from './src/designSystem/layout/VSpacer';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);

  const start = () => {
    setGameStarted(true);
  };

  const win = (score: number) => {
    scores.push(score);
    setScores(scores);
    setGameStarted(false);
    setGameWon(true);
  };

  const lose = (score: number) => {
    scores.push(score);
    setScores(scores);
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <>
          <Label color='#fb9' text='This is going to be a fun game!' />
          <VSpacer height={50} />
          <Button title='Start' onPress={start} />
        </>
      ) : (
        <GameView win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && (
        <>
          <VSpacer height={20} />
          <ResultView gameWon={gameWon} scores={scores} />
        </>
      )}
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
});
