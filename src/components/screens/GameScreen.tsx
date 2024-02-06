import { GameLoopContextProvider } from '../../designSystem/';
import { GameBoard, GameBoardEnum } from '../GameBoard';
import { GameUI } from './gameScreen/GameUI';

interface GameScreenProps {
  gameBoardType: GameBoardEnum;
  win: (score: number) => void;
  lose: (score: number) => void;
}

export const GameScreen = ({ gameBoardType, win, lose }: GameScreenProps) => {
  return (
    <GameLoopContextProvider>
      <GameBoard type={gameBoardType} />
      <GameUI win={win} lose={lose} />
    </GameLoopContextProvider>
  );
};
