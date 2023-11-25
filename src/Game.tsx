import { useContext, useEffect, useState } from 'react';
import { GameScreen } from './components/screens/GameScreen';
import { IntroScreen } from './components/screens/IntroScreen';
import { ResultObj, ResultScreen } from './components/screens/ResultScreen';
import { GameBoardType } from './components/GameBoard';
import { GameAudioContext } from './designSystem/context/audio/GameAudioContext';
import { AudioAssets } from './designSystem/assets/audio';
import { GameWrapper } from './designSystem/layout/containers/GameWrapper';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);
  const [gameBoardType, setGameBoardType] = useState(null);

  const { playMusic, playSound } = useContext(GameAudioContext);

  const startGrid = () => {
    playSound(AudioAssets.effects.effect1);
    setGameBoardType(GameBoardType.GRID);
    setGameStarted(true);
  };

  const startParallax = () => {
    playSound(AudioAssets.effects.effect1);
    setGameBoardType(GameBoardType.PARALLAX);
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

  useEffect(() => {
    if (gameStarted) {
      if (gameBoardType === GameBoardType.GRID) {
        playMusic(AudioAssets.music.grid);
      } else {
        playMusic(AudioAssets.music.parallax);
      }
    } else {
      playMusic(AudioAssets.music.intro);
    }
  }, [gameStarted, gameBoardType]);

  return (
    <GameWrapper>
      {!gameStarted ? (
        <IntroScreen startGrid={startGrid} startParallax={startParallax} />
      ) : (
        <GameScreen gameBoardType={gameBoardType} win={win} lose={lose} />
      )}
      {gameWon !== null && !gameStarted && (
        <ResultScreen
          result={{ win: gameWon, score: scores[0].score }}
          scores={scores as [ResultObj]}
        />
      )}
    </GameWrapper>
  );
};
