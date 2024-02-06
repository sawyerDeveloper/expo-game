import { useRef } from 'react';
import {
  Button,
  VSpacer,
  SpriteSheet,
  ViewContainer,
} from '../../../designSystem/';
import {
  flamesSheet,
  flamesData,
} from '../../../designSystem/assets/sprites/flames';
import { Clock } from '../../Clock';

interface GameUIProps {
  win: (score: number) => void;
  lose: (score: number) => void;
}
export const GameUI = ({ win, lose }: GameUIProps) => {
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
      <ViewContainer
        width={85}
        height={75}
        backgroundColor='#666'
        cornerRadius={15}
      >
        <Clock ref={clock} />
      </ViewContainer>

      <SpriteSheet fps={30} data={flamesData} image={flamesSheet} />
    </>
  );
};
