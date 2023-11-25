import { useState } from 'react';
import { Audio } from 'expo-av';
import { GameAudioContext } from './GameAudioContext';

export const GameAudioContextProvider = ({ children }) => {
  const [loadedAudio, setLoadedAudio] = useState(new Array<Audio.Sound>());
  const [currentMusic, setCurrentMusic] = useState();
  const [musicMuted, setMusicMuted] = useState(true);

  async function playSound(soundAsset, loop = false, loadMuted = false) {
    if (!loadedAudio[soundAsset]) {
      const { sound } = await Audio.Sound.createAsync(soundAsset);
      sound.setIsLoopingAsync(loop);
      loadedAudio[soundAsset] = sound;
      sound.setIsMutedAsync(loadMuted)
      setLoadedAudio(loadedAudio);
    }
    await loadedAudio[soundAsset].playAsync();
  }

  const playMusic = (soundAsset) => {
      pauseSound(currentMusic);
      setCurrentMusic(soundAsset);
      playSound(soundAsset, true, musicMuted);
  };

  const pauseSound = (soundAsset) => {
    loadedAudio[soundAsset]?.pauseAsync();
  };

  const muteMusic = () => {
    setMusicMuted(!musicMuted);
    console.log(currentMusic);
  };

  return (
    <GameAudioContext.Provider
      value={{ playSound, pauseSound, playMusic, muteMusic, musicMuted }}
    >
      {children}
    </GameAudioContext.Provider>
  );
};
