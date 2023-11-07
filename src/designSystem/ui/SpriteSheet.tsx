import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { parseData } from '../utils/ParseSpriteSheetData';
import { useEffect, useState } from 'react';

export const SpriteSheet = ({ image, data, fps }) => {
  const { frames } = data;
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState([]);
  const frameRate = Math.floor(1000 / fps);
  const dimensions = {
    width: frames[0].sourceSize.w,
    height: frames[0].sourceSize.h,
  };

  const setFrame = () => {
    let newFrame = currentFrame + 1;
    if (currentFrame >= frames.length - 1) {
      newFrame = 0;
    }
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
    const interval = setTimeout(setFrame, frameRate);
    return () => clearTimeout(interval);
  }, [setFrame, frameRate]);

  return (
    <Image
      style={{ width: dimensions.width, height: dimensions.height }}
      source={images[currentFrame]}
    />
  );
};
