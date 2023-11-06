import { Image } from 'expo-image';
import { Asset } from 'expo-asset';
import { parseData } from '../utils/ParseSpriteSheetData';
import { useEffect, useState } from 'react';

export const SpriteSheet = ({ image, data, fps }) => {
  
  const [currentFrame, setCurrentFrame] = useState(0);

  const [images, setImages] = useState([]);

  const setFrame = () => {
    let newFrame = currentFrame + 1;
    if (currentFrame >= data.length - 1) {
      newFrame = 0;
    }
    setCurrentFrame(newFrame);
  };


  useEffect(() => {
    (async () => {
      const newImage = Asset.fromModule(require('../../../assets/sprites/flames/flames.png'));
      await newImage.downloadAsync();
      let imgs = []
      for(var i = 0 ; i < data.length - 1 ; i++){
        imgs.push(await parseData(newImage, data[i]))
      }
      setImages(imgs)
    })();
  }, []);

  useEffect(() => {
    const interval = setTimeout(setFrame, 60);
    return () => clearTimeout(interval);
  }, [setFrame]);
  
  return <Image style={{ width: 50, height: 50 }} source={images[currentFrame]} />;
};
