import { StyleSheet, Text, View } from 'react-native';
import { Label } from '../../designSystem/ui/Label';
import { VSpacer } from '../../designSystem/layout/VSpacer';

export type ResultObj = {
  score: number;
  win: Boolean;
};

type ResultScreenProps = {
  gameWon: Boolean;
  score: number;
  scores: [ResultObj];
};

export const ResultScreen = ({ gameWon, score, scores }: ResultScreenProps) => {
  return (
    <>
      <VSpacer height={20} />
      <Text style={styles.label}>You {gameWon ? 'Won!' : 'Lost!'}</Text>
      <VSpacer height={10} />
      <Text style={styles.label}>Your score was: {score}</Text>
      <VSpacer height={10} />
      {scores && <Label text={'Last games'} />}
      <View style={styles.scoreContainer}>
        {scores &&
          scores.slice(1).map((scoreObj) => {
            return (
              <Label
                color={scoreObj.win ? 'green' : 'red'}
                key={scoreObj.score + Math.random()}
                text={scoreObj.score}
              />
            );
          })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fb9',
  },
  scoreContainer: {
    alignItems: 'center',
  },
});
