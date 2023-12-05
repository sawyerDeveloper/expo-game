import { GameLoopContextProvider } from '../../designSystem/';
import { GameBoard } from '../GameBoard';
import { GameUI } from './gameScreen/GameUI';

export const GameScreen = ({ gameBoardType, win, lose }) => {
  return (
    <GameLoopContextProvider>
      <GameBoard type={gameBoardType} />
      <GameUI win={win} lose={lose} />
    </GameLoopContextProvider>
  );
};
