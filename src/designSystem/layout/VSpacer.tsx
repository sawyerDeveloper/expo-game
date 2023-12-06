import { View } from 'react-native';

interface VSpacerProps {
  height: number;
}

export const VSpacer = ({ height }: VSpacerProps) => {
  return <View style={{ height }} />;
};
