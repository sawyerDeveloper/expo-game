import { VSpacer } from '../../designSystem/layout/VSpacer';
import { Button } from '../../designSystem/ui/Button';
import { Label } from '../../designSystem/ui/Label';

export const IntroScreen = ({ startGrid, startParallax }) => {
  return (
    <>
      <Label
        color='#fb9'
        size={16}
        fontFamily='neuroBold'
        text='This is going to be a fun game!'
      />
      <VSpacer height={10} />
      <Label
        color='#fff'
        fontFamily='neuroBold'
        text='Press Start Button'
        size={18}
      />
      <VSpacer height={40} />
      <Button
        fontSize={22}
        title='Start Grid'
        fontFamily='neuroBold'
        onPress={startGrid}
      />
      <VSpacer height={30} />
      <Button
        fontSize={22}
        title='Start Parallax'
        fontFamily='neuroBold'
        onPress={startParallax}
      />
      <VSpacer height={20} />
    </>
  );
};
