import { AppContainer } from './src/designSystem/layout/AppContainer';
import { Game } from './src/Game';
import { AudioContextProvider } from './src/designSystem/context/audio/AudioContextProvider';

export default function App() {
  return (
    <AppContainer>
      <AudioContextProvider>
        <Game />
      </AudioContextProvider>
    </AppContainer>
  );
}
