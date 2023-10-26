import { View } from 'react-native';
import { Button } from '../designSystem/Button';

export const GameView = ({ win, lose }) => {
  return (
    <View>
      <Button title='Win' onPress={win} />
      <Button title='Lose' onPress={lose} />
    </View>
  );
};
