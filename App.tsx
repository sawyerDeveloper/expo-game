import { AppContainer } from './src/designSystem/layout/AppContainer';
import { Game } from './src/Game';
import { GameAudioContextProvider } from './src/designSystem/context/audio/GameAudioContextProvider';

export default function App() {
  return (
    <AppContainer>
      <GameAudioContextProvider>
        <Game />
      </GameAudioContextProvider>
    </AppContainer>
  );
}
