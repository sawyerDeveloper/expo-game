import { useState } from 'react';
import { Audio } from 'expo-av';
import { AudioContext } from './AudioContext';

export const AudioContextProvider = ({ children }) => {
  const [loadedAudio, setLoadedAudio] = useState(
    new Array<Audio.Sound>()
  );
  const [currentMusic, setCurrentMusic] = useState()

  async function playSound(soundAsset, loop = false) {
    if (!loadedAudio[soundAsset]) {
      const { sound } = await Audio.Sound.createAsync(soundAsset);
      sound.setIsLoopingAsync(loop)
      loadedAudio[soundAsset] = sound;
      setLoadedAudio(loadedAudio);
    }
    await loadedAudio[soundAsset].playAsync();
  }

  const playMusic = (soundAsset) => {
    pauseSound(currentMusic)
    setCurrentMusic(soundAsset)
    playSound(soundAsset, true)
  }

  const pauseSound = (soundAsset) => {
    loadedAudio[soundAsset]?.pauseAsync();
  };

  return (
    <AudioContext.Provider value={{ playSound, pauseSound, playMusic }}>
      {children}
    </AudioContext.Provider>
  );
};
