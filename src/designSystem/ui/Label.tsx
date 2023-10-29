import { ColorValue, Text } from 'react-native';

type LabelProps = {
  text: string | number;
  color?: ColorValue;
  size?: number;
};

export const Label = ({ text, color, size }: LabelProps) => {
  return (
    <>
      <Text style={{ color: color, fontSize: size }}>{text}</Text>
    </>
  );
};
