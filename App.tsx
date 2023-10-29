import { useState } from 'react';
import { GameView } from './src/components/screens/GameView';
import { ResultView } from './src/components/screens/ResultView';
import { IntroView } from './src/components/screens/IntroView';
import { AppContainer } from './src/designSystem/layout/AppContainer';

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
    <AppContainer>
      {!gameStarted ? (
        <IntroView start={start} />
      ) : (
        <GameView win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && (
        <ResultView gameWon={gameWon} scores={scores} />
      )}
    </AppContainer>
  );
}
