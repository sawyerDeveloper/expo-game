import { Button } from '../../designSystem/ui/Button';
import { Clock } from '../Clock';
import { VSpacer } from '../../designSystem/layout/VSpacer';
import { useRef } from 'react';
import { SpriteSheet } from '../../designSystem/ui/SpriteSheet';
import flamesData from '../../../assets/sprites/flames/flames.json';
import { flamesSheet } from '../../../assets/sprites/flames';
import { GameBoard } from '../GameBoard';
export const GameScreen = ({ win, lose }) => {
  const clock = useRef(null);

  return (
    <>
      <GameBoard />
      <Button title='Win' onPress={() => win(clock.current.currentTime)} />
      <VSpacer height={20} />
      <Button title='Lose' onPress={() => lose(clock.current.currentTime)} />
      <VSpacer height={10} />
      <Clock ref={clock} />
      <SpriteSheet fps={30} data={flamesData} image={flamesSheet} />
    </>
  );
};
