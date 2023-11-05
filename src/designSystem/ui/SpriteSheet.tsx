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
      //  Ugly, but temporary until i can figure out how to loop though async functions
      imgs.push(await parseData(newImage, data[0]))
      imgs.push(await parseData(newImage, data[1]))
      imgs.push(await parseData(newImage, data[2]))
      imgs.push(await parseData(newImage, data[3]))
      imgs.push(await parseData(newImage, data[4]))
      imgs.push(await parseData(newImage, data[5]))
      imgs.push(await parseData(newImage, data[6]))
      imgs.push(await parseData(newImage, data[7]))
      imgs.push(await parseData(newImage, data[8]))
      imgs.push(await parseData(newImage, data[9]))
      imgs.push(await parseData(newImage, data[10]))
      imgs.push(await parseData(newImage, data[11]))
      imgs.push(await parseData(newImage, data[12]))
      imgs.push(await parseData(newImage, data[13]))
      imgs.push(await parseData(newImage, data[14]))
      imgs.push(await parseData(newImage, data[15]))
      imgs.push(await parseData(newImage, data[16]))
      imgs.push(await parseData(newImage, data[17]))
      imgs.push(await parseData(newImage, data[18]))
      imgs.push(await parseData(newImage, data[19]))
      imgs.push(await parseData(newImage, data[20]))
      imgs.push(await parseData(newImage, data[21]))
      imgs.push(await parseData(newImage, data[22]))
      imgs.push(await parseData(newImage, data[23]))
      imgs.push(await parseData(newImage, data[24]))
      imgs.push(await parseData(newImage, data[25]))
      imgs.push(await parseData(newImage, data[26]))
      imgs.push(await parseData(newImage, data[27]))
      imgs.push(await parseData(newImage, data[28]))
      imgs.push(await parseData(newImage, data[29]))
      setImages(imgs);
    })();
  }, []);

  useEffect(() => {
    const interval = setTimeout(setFrame, 33);
    return () => clearTimeout(interval);
  }, [setFrame]);
  
  const source = images[currentFrame];
  //console.log(source)
  return <Image style={{ width: 50, height: 50 }} source={source} />;
};
