import { useState } from 'react';
import { Audio } from 'expo-av';
import { AudioContext } from './AudioContext';

export const AudioContextProvider = ({ children }) => {
  const [loadedAudio, setLoadedAudio] = useState(
    new Array<Audio.Sound>()
  );

  async function playSound(soundAsset, loop = false) {
    if (!loadedAudio[soundAsset]) {
      const { sound } = await Audio.Sound.createAsync(soundAsset);
      sound.setIsLoopingAsync(loop)
      loadedAudio[soundAsset] = sound;
      setLoadedAudio(loadedAudio);
    }
    await loadedAudio[soundAsset].playAsync();
  }

  const pauseSound = (soundAsset) => {
    loadedAudio[soundAsset].pauseAsync();
  };

  return (
    <AudioContext.Provider value={{ playSound, pauseSound }}>
      {children}
    </AudioContext.Provider>
  );
};
