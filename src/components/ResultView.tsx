import { StyleSheet, Text, View } from 'react-native';

export const ResultView = ({ gameWon }) => {
  return (
    <View>
      <Text style={styles.label}>You {gameWon ? 'Won!' : 'Lost!'}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#fb9',
  },
});
