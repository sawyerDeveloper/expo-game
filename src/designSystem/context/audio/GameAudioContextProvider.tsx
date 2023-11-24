import { useState } from 'react';
import { Audio } from 'expo-av';
import { GameAudioContext } from './GameAudioContext';

export const GameAudioContextProvider = ({ children }) => {
  const [loadedAudio, setLoadedAudio] = useState(new Array<Audio.Sound>());
  const [currentMusic, setCurrentMusic] = useState();

  async function playSound(soundAsset, loop = false) {
    if (!loadedAudio[soundAsset]) {
      const { sound } = await Audio.Sound.createAsync(soundAsset);
      sound.setIsLoopingAsync(loop);
      loadedAudio[soundAsset] = sound;
      setLoadedAudio(loadedAudio);
    }
    await loadedAudio[soundAsset].playAsync();
  }

  const playMusic = (soundAsset) => {
    pauseSound(currentMusic);
    setCurrentMusic(soundAsset);
    playSound(soundAsset, true);
  };

  const pauseSound = (soundAsset) => {
    loadedAudio[soundAsset]?.pauseAsync();
  };

  return (
    <GameAudioContext.Provider value={{ playSound, pauseSound, playMusic }}>
      {children}
    </GameAudioContext.Provider>
  );
};
