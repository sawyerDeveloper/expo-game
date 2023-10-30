import { Button } from '../../designSystem/ui/Button';
import { Clock } from '../Clock';
import { VSpacer } from '../../designSystem/layout/VSpacer';
import { useRef } from 'react';

export const GameView = ({ win, lose }) => {
  const clock = useRef(null);
  
  return (
    <>
      <Button title='Win' onPress={() => win(clock.current.currentTime)} />
      <VSpacer height={20} />
      <Button title='Lose' onPress={() => lose(clock.current.currentTime)} />
      <Clock ref={clock} />
    </>
  );
};
