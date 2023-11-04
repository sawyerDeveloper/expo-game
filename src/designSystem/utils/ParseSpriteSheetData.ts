import { manipulateAsync } from 'expo-image-manipulator';
export const parseData = (image, data) => {

  const images = data.map((imageData) => {
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
            }
          },
        ],
        { base64: true }
      );
      return manipResult;
    };
    extractImage(imageData)
  });

  return images;
};