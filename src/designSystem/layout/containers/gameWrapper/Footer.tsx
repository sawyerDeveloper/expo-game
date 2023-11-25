import { StyleSheet, View } from 'react-native';
import { Button } from '../../../ui/Button';
import { useContext } from 'react';
import { GameSettingsContext } from '../../../context/settings/GameSettingsContext';

export const Footer = () => {
  const { openSettings } = useContext(GameSettingsContext);
  return (
    <View style={styles.container}>
      <Button fontFamily='neuroBold' title='Settings' onPress={openSettings} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 100,
    width: '100%',
  },
});
