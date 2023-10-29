import { Text, View } from 'react-native';

export const Label = ({ text, color, size }) => {
  return (
    <>
      <Text style={{ color: color, fontSize: size }}>{text}</Text>
    </>
  );
};
