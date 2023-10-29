import { View } from 'react-native';

type VSpacerProps = {
  height: number;
};

export const VSpacer = ({ height }: VSpacerProps) => {
  return <View style={{ height }} />;
};
