import { Image } from 'expo-image';
import { manipulateAsync } from 'expo-image-manipulator';

import { parseData } from '../utils/ParseSpriteSheetData';
import { useEffect, useState } from 'react';

export const SpriteSheet = ({ image, data, fps }) => {
  
  const [currentFrame, setCurrentFrame] = useState(0);

  const [images, setImages] = useState([]);

  const setFrame = () => {
    let newFrame = currentFrame + 1;
    if (currentFrame >= data.length) {
      newFrame = 0;
    }
    setCurrentFrame(newFrame);
  };


  useEffect(() => {
    (async () => {
      const newImages = data.map((imageData) => {
        parseData(image, imageData).then(boo => {
          console.log(boo)
          return boo.uri
        })
      })
      const images = await parseData(image, data[0])
      setImages([images]);
    })();
  }, []);

  useEffect(() => {
    const interval = setTimeout(setFrame, 1000);
    return () => clearTimeout(interval);
  }, [setFrame]);
  
  const source = images[currentFrame];
  console.log(source);
  return <Image style={{ width: 100, height: 100 }} source={source} />;
};
