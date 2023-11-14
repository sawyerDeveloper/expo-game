import { VSpacer } from '../../designSystem/layout/VSpacer';
import { Button } from '../../designSystem/ui/Button';
import { Label } from '../../designSystem/ui/Label';

export const IntroScreen = ({ start }) => {
  return (
    <>
      <Label
        color='#fb9'
        fontFamily='neuroBold'
        text='This is going to be a fun game!'
      />
      <Label
        color='#fff'
        fontFamily='neuroBold'
        text='Press Start Button'
        size={18}
      />
      <VSpacer height={50} />
      <Button title='Start' fontFamily='neuroBold' onPress={start} />
    </>
  );
};
