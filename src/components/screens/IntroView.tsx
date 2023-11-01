import { VSpacer } from '../../designSystem/layout/VSpacer';
import { Button } from '../../designSystem/ui/Button';
import { Label } from '../../designSystem/ui/Label';

export const IntroView = ({ start }) => {
  return (
    <>
      <Label color='#fb9' text='This is going to be a fun game!' />
      <Label color='#fff' text='Press Start' size={18} />
      <VSpacer height={50} />
      <Button title='Start' onPress={start} />
    </>
  );
};
