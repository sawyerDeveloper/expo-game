import { ColorValue, Pressable, StyleSheet, View } from 'react-native';
import { Label } from './Label';

interface ButtonProps {
  title: string;
  onPress: () => void;
  titleColor?: ColorValue;
  fontFamily?: string;
}

export const Button = ({
  title,
  onPress,
  titleColor,
  fontFamily,
}: ButtonProps) => {
  const color = titleColor ? titleColor : '#b2b';
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Label fontFamily={fontFamily} text={title} color={color} />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 30,
    minWidth: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    borderRadius: 10,
  },
});
