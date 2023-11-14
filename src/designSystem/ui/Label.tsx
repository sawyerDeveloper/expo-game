import { ColorValue, Text } from 'react-native';

interface LabelProps {
  text: string | number;
  color?: ColorValue;
  size?: number;
  fontFamily?: string;
}

export const Label = ({ text, color, size, fontFamily }: LabelProps) => {
  return (
    <Text
      selectable={false}
      style={{ color: color, fontSize: size, fontFamily: fontFamily }}
    >
      {text}
    </Text>
  );
};
