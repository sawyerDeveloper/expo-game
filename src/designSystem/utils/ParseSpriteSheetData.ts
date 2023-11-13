import { SaveFormat, manipulateAsync } from 'expo-image-manipulator';
export const parseData = async (image, imageData) => {
  const newImage =  await manipulateAsync(
    image.localUri,
    [
      {
        crop: {
          originX: imageData.frame.x,
          originY: imageData.frame.y,
          width: imageData.frame.w,
          height: imageData.frame.h,
        },
      },
    ],
    { base64: true, format: SaveFormat.PNG }
  );
  return newImage
};
