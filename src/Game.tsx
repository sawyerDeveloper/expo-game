import { useContext, useEffect, useState } from 'react';
import { GameScreen } from './components/screens/GameScreen';
import { IntroScreen } from './components/screens/IntroScreen';
import { ResultObj, ResultScreen } from './components/screens/ResultScreen';
import { GameBoardType } from './components/GameBoard';
import { AudioContext } from './designSystem/context/audio/AudioContext';
import { AudioAssets } from './designSystem/assets/audio';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);
  const [gameBoardType, setGameBoardType] = useState(null);
  const audio = useContext(AudioContext);

  const startGrid = () => {
    audio.playSound(AudioAssets.effects.effect1);
    setGameBoardType(GameBoardType.GRID);
    setGameStarted(true);
  };

  const startParallax = () => {
    audio.playSound(AudioAssets.effects.effect1);
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
        audio.playMusic(AudioAssets.music.grid);
      } else {
        audio.playMusic(AudioAssets.music.parallax);
      }
    } else {
      audio.playMusic(AudioAssets.music.intro);
    }
  }, [gameStarted, gameBoardType]);

  return (
    <>
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
    </>
  );
};
