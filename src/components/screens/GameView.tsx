import { View } from 'react-native';
import { Button } from '../../designSystem/ui/Button';
import { Clock } from '../Clock';

export const GameView = ({ win, lose }) => {
  return (
    <View>
      <Button title='Win' onPress={win} />
      <Button title='Lose' onPress={lose} />
      <Clock />
    </View>
  );
};
