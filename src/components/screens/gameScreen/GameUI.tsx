import { useRef } from 'react';
import { Button, VSpacer, SpriteSheet } from '../../../designSystem/';
import {
  flamesSheet,
  flamesData,
} from '../../../designSystem/assets/sprites/flames';
import { Clock } from '../../Clock';

export const GameUI = ({ win, lose }) => {
  const clock = useRef(null);

  return (
    <>
      <Button
        title='Win'
        fontFamily='neuroBold'
        onPress={() => win(clock.current.currentTime)}
      />
      <VSpacer height={20} />
      <Button
        title='Lose'
        fontFamily='neuroBold'
        onPress={() => lose(clock.current.currentTime)}
      />
      <VSpacer height={10} />
      <Clock ref={clock} />
      <SpriteSheet fps={30} data={flamesData} image={flamesSheet} />
    </>
  );
};
