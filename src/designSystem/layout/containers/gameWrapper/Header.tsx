import { StyleSheet, View } from 'react-native';
import { Button } from '../../../ui/Button';
import { useContext } from 'react';
import { GameAudioContext } from '../../../context/audio/GameAudioContext';

export const Header = () => {
  const { musicMuted, muteMusic } = useContext(GameAudioContext);
  return (
    <View style={styles.container}>
      <Button title={musicMuted ? 'Mute' : 'UnMute'} onPress={muteMusic} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
