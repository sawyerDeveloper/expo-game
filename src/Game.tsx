import { useState } from 'react';
import { GameScreen } from './components/screens/GameScreen';
import { IntroScreen } from './components/screens/IntroScreen';
import { ResultObj, ResultScreen } from './components/screens/ResultScreen';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);

  const start = () => {
    setGameStarted(true);
  };

  const win = (score: number) => {
      const resultObj: ResultObj = { win: true, score: score };
      scores.push(resultObj);
      setScores(scores);
      setGameStarted(false);
      setGameWon(true);
  };

  const lose = (score: number) => {
    const resultObj: ResultObj = { win: false, score: score };
    scores.push(resultObj);
    setScores(scores);
    setGameStarted(false);
    setGameWon(false);
  };

  return (
    <>
      {!gameStarted ? (
        <IntroScreen start={start} />
      ) : (
        <GameScreen win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && (
        <ResultScreen
          result={{ win: gameWon, score: scores[0].score }}
          scores={scores as [ResultObj]}
        />
      )}
    </>
  );
};
