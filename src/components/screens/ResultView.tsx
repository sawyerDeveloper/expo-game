import { StyleSheet, Text, View } from 'react-native';
import { Label } from '../../designSystem/ui/Label';
import { VSpacer } from '../../designSystem/layout/VSpacer';

export const ResultView = ({ gameWon, scores }) => {
  return (
    <>
      <VSpacer height={20} />
      <Text style={styles.label}>You {gameWon ? 'Won!' : 'Lost!'}</Text>
      <VSpacer height={10} />
      <View style={styles.scoreContainer}>
        {scores &&
          scores.map((score) => {
            return (
              <Label color='white' key={score + Math.random()} text={score} />
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
