import { useContext } from 'react';
import { Button } from '../ui/Button';
import { GameAudioContext } from '../context/audio/GameAudioContext';
import { View } from 'react-native';
import { GameSettingsContext } from '../context/settings/GameSettingsContext';

export const GameWrapper = ({ children }) => {
  const audio = useContext(GameAudioContext);
  const settings = useContext(GameSettingsContext)
  return (
    <>
      <View>
        <Button
          title={audio.musicMuted ? 'UnMute' : 'Mute'}
          onPress={audio.muteMusic}
        />
      </View>
      {children}
      <View>
        <Button
        title="Settings"
        onPress={settings.openSettings}
        />
      </View>
    </>
  );
};
