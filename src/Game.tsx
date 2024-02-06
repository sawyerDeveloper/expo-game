import { useContext, useEffect, useState } from 'react';
import { AudioAssets, GameAudioContext, GameWrapper } from './designSystem/';
import { GameScreen } from './components/screens/GameScreen';
import { IntroScreen } from './components/screens/IntroScreen';
import { ResultObj, ResultScreen } from './components/screens/ResultScreen';
import { GameBoardEnum } from './components/GameBoard';

export const Game = () => {
  const [gameStarted, setGameStarted] = useState(false);
  const [gameWon, setGameWon] = useState(null);
  const [scores, setScores] = useState([]);
  const [gameBoardType, setGameBoardType] = useState(null);

  const { playMusic, playSound } = useContext(GameAudioContext);

  const startGrid = () => {
    playSound(AudioAssets.effects.effect1);
    setGameBoardType(GameBoardEnum.GRID);
    setGameStarted(true);
  };

  const startParallax = () => {
    playSound(AudioAssets.effects.effect2);
    setGameBoardType(GameBoardEnum.PARALLAX);
    setGameStarted(true);
  };

  const win = (score: number) => {
    playSound(AudioAssets.effects.effect1);
    const resultObj: ResultObj = { win: true, score: score };
    scores.push(resultObj);
    setScores(scores);
    setGameStarted(false);
    setGameWon(true);
  };

  const lose = (score: number) => {
    playSound(AudioAssets.effects.effect2);
    const resultObj: ResultObj = { win: false, score: score };
    scores.push(resultObj);
    setScores(scores);
    setGameStarted(false);
    setGameWon(false);
  };

  useEffect(() => {
    if (gameStarted) {
      if (gameBoardType === GameBoardEnum.GRID) {
        playMusic(AudioAssets.music.grid);
      } else {
        playMusic(AudioAssets.music.parallax);
      }
    } else {
      playMusic(AudioAssets.music.intro);
    }
  }, [gameStarted, gameBoardType]);

  return (
    <>
      {!gameStarted ? (
        <GameWrapper>
          <IntroScreen startGrid={startGrid} startParallax={startParallax} />
          {gameWon !== null && (
            <ResultScreen
              result={{ win: gameWon, score: scores[0].score }}
              scores={scores as [ResultObj]}
            />
          )}
        </GameWrapper>
      ) : (
        <GameScreen gameBoardType={gameBoardType} win={win} lose={lose} />
      )}
    </>
  );
};
