import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { parseData } from '../utils/ParseSpriteSheetData';
import { useContext, useEffect, useState } from 'react';
import { GameLoopContext } from '../context/gameLoop/GameLoopContext';

export const SpriteSheet = ({ image, data, fps }) => {
  const { frames } = data;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState([]);
  const frameRate = Math.floor(1000 / fps);
  const dimensions = {
    width: frames[0].sourceSize.w,
    height: frames[0].sourceSize.h,
  };
  const [animationID, setAnimationID] = useState(null);
  const gameLoop = useContext(GameLoopContext);

  const setFrame = (tick) => {
    const newFrame = (tick - 1) / 2;
    if (!Number.isInteger(newFrame)) return;
    setCurrentFrame(newFrame);
  };

  useEffect(() => {
    (async () => {
      const spriteSheetImage = Asset.fromModule(image);
      await spriteSheetImage.downloadAsync();
      let imgs = [];
      for (var i = 0; i < frames.length - 1; i++) {
        imgs.push(await parseData(spriteSheetImage, frames[i]));
      }
      setImages(imgs);
    })();
  }, []);

  useEffect(() => {
    if (!animationID) {
      setAnimationID(gameLoop.subscribe(setFrame));
    }
    return () => gameLoop.cleanup(animationID);
  }, []);

  return (
    <Image
      style={{ width: dimensions.width, height: dimensions.height }}
      source={images[currentFrame]}
    />
  );
};
