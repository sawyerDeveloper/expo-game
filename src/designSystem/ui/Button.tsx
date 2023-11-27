import { ColorValue, Pressable, StyleSheet, View } from 'react-native';
import { Label } from './Label';

interface ButtonProps {
  title: string;
  onPress: () => void;
  titleColor?: ColorValue;
  fontFamily?: string;
  fontSize?: number;
}

export const Button = ({
  title,
  onPress,
  titleColor,
  fontFamily,
  fontSize,
}: ButtonProps) => {
  const color = titleColor ? titleColor : '#b2b';
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Label
          size={fontSize}
          fontFamily={fontFamily}
          text={title}
          color={color}
        />
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
    padding: 10
  },
});
