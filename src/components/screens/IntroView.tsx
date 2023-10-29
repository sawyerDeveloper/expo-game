import { VSpacer } from '../../designSystem/layout/VSpacer';
import { Button } from '../../designSystem/ui/Button';
import { Label } from '../../designSystem/ui/Label';

export const IntroView = ({ start }) => {
  return (
    <>
      <Label color='#fb9' text='This is going to be a fun game!' />
      <VSpacer height={50} />
      <Button title='Start' onPress={start} />
    </>
  );
};
