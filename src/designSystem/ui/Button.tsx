import { ColorValue, Pressable, StyleSheet, View } from 'react-native';
import { Label } from './Label';

type ButtonProps = {
  title: string;
  onPress: () => void;
  titleColor?: ColorValue;
};

export const Button = ({ title, onPress, titleColor }: ButtonProps) => {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Label text={title} color={titleColor ? titleColor : '#b2b'} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    minWidth: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fdd',
  },
});
