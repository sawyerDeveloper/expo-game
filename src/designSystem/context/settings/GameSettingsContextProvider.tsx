import { useState } from 'react';
import { GameSettingsContext } from './GameSettingsContext';
import { Modal, StyleSheet, View, useWindowDimensions } from 'react-native';
import { Button } from '../../ui/Button';
import { Label } from '../../ui/Label';
import { VSpacer } from '../../layout/VSpacer';

export const GameSettingsContextProvider = ({ children }) => {
  const { height } = useWindowDimensions();
  const [showSettings, setShowSettings] = useState(false);

  const openSettings = () => {
    setShowSettings(!showSettings);
  };

  const clearData = () => {
    console.log('clearData');
  };

  return (
    <GameSettingsContext.Provider value={{ openSettings }}>
      <Modal
        presentationStyle='overFullScreen'
        animationType='slide'
        transparent={true}
        visible={showSettings}
      >
        <View style={[styles.container, { marginTop: height / 2 - 80 }]}>
          <Label text='Settings' fontFamily='neuroBold' color='#fff' />
          <VSpacer height={30} />
          <Button
            fontFamily='neuroBold'
            title='Close'
            onPress={() => setShowSettings(false)}
          />
          <VSpacer height={30} />
          <Button
            fontFamily='neuroBold'
            title='Clear Data'
            onPress={clearData}
          />
        </View>
      </Modal>
      {children}
    </GameSettingsContext.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    margin: 40,
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 50,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});
