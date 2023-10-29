import { StyleSheet, Text, View } from 'react-native';
import { Label } from '../../designSystem/ui/Label';
import { VSpacer } from '../../designSystem/layout/VSpacer';

export const ResultView = ({ gameWon, scores }) => {
  return (
    <View>
      <Text style={styles.label}>You {gameWon ? 'Won!' : 'Lost!'}</Text>
      <VSpacer height={10} />
      <View style={styles.scoreContainer}>
        {scores &&
          scores.map((score) => {
            return <Label color='white' key={score * score} text={score} />;
          })}
      </View>
    </View>
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
