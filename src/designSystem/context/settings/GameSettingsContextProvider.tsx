import { useState } from 'react';
import { GameSettingsContext } from './GameSettingsContext';
import { Modal, View } from 'react-native';
import { Button } from '../../ui/Button';

export const GameSettingsContextProvider = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);

  const openSettings = () => {
    setShowSettings(!showSettings);
  };
  const clearData = () => {
    console.log('clearData');
  };
  return (
    <GameSettingsContext.Provider value={{ openSettings }}>
      <Modal visible={showSettings}>
        <View>
            <Button title='Close' onPress={() => setShowSettings(false)} />
          <Button title='Clear Data' onPress={clearData} />
        </View>
      </Modal>

      {children}
    </GameSettingsContext.Provider>
  );
};
