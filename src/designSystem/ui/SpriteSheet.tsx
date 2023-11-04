import { Image } from 'expo-image';
import { manipulateAsync } from 'expo-image-manipulator';

import { parseData } from '../utils/ParseSpriteSheetData';
import { useEffect, useState } from 'react';

export const SpriteSheet = ({ image, data, fps }) => {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [images, setImages] = useState([]);
  const [frameRate] = useState(fps);
  const tempImages = data.map((imageData) => {
    const extractImage = async (newData) => {
      const manipResult = await manipulateAsync(
        image,
        [
          {
            crop: {
              originX: newData.frame.x,
              originY: newData.frame.y,
              width: newData.frame.w,
              height: newData.frame.h,
            },
          },
        ],
        { base64: true }
      );
      return manipResult;
    };
    extractImage(imageData);
  });

  const setFrame = () => {
    let newFrame = currentFrame + 1;
    if (currentFrame >= images.length) {
      newFrame = 0;
    }
    setCurrentFrame(newFrame);
  };

  useEffect(() => {
    const interval = setInterval(setFrame, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image style={{ width: 100, height: 100 }} source={images[currentFrame]} />
  );
};
