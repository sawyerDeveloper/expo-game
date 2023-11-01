import { useState } from 'react';
import { GameScreen } from './src/components/screens/GameScreen';
import { ResultScreen, ResultObj } from './src/components/screens/ResultScreen';
import { IntroScreen } from './src/components/screens/IntroScreen';
import { AppContainer } from './src/designSystem/layout/AppContainer';

export default function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);

  const start = () => {
    setGameStarted(true);
  };

  const win = (score: number) => {
    const scoreObj = { win: true, score: score };
    scores.push(scoreObj);
    setScores(scores);
    setGameStarted(false);
    setGameWon(true);
  };

  const lose = (score: number) => {
    const scoreObj = { win: false, score: score };
    scores.push(scoreObj);
    setScores(scores);
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <AppContainer>
      {!gameStarted ? (
        <IntroScreen start={start} />
      ) : (
        <GameScreen win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && (
        <ResultScreen
          gameWon={gameWon}
          score={scores[0].score}
          scores={scores as [ResultObj]}
        />
      )}
    </AppContainer>
  );
}
