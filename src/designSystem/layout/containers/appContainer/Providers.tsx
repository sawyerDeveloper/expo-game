import { GameAudioContextProvider } from '../../../context/audio/GameAudioContextProvider';
import { GameSettingsContextProvider } from '../../../context/settings/GameSettingsContextProvider';

export const Providers = ({ children }) => {
  return (
    <GameAudioContextProvider>
      <GameSettingsContextProvider>{children}</GameSettingsContextProvider>
    </GameAudioContextProvider>
  );
};
