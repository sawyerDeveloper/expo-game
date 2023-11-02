import { Label } from '../../designSystem/ui/Label';
import { VSpacer } from '../../designSystem/layout/VSpacer';
import { LastResults } from './resultScreen/LastResults';

export type ResultObj = {
  score: number;
  win: Boolean;
};

type ResultScreenProps = {
  result: ResultObj;
  scores: [ResultObj];
};

export const ResultScreen = ({ result, scores }: ResultScreenProps) => {
  const { win, score } = result;
  return (
    <>
      <VSpacer height={20} />
      <Label color='#fb9' text={win ? 'You Won!' : 'You Lost!'} />
      <VSpacer height={10} />
      <Label color='#fb9' text={'Your score was: ' + score} />
      <VSpacer height={10} />
      {scores.length > 1 && <LastResults results={scores.reverse()} />}
    </>
  );
};
