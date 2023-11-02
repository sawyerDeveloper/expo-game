import { StyleSheet, View } from 'react-native';
import { Label } from '../../../designSystem/ui/Label';

export const LastResults = ({ results }) => {
  return (
    <>
      <Label color='#fb9' text={'Previous games'} />
      <View style={styles.container}>
        {results.map((scoreObj) => {
          return (
            <Label
              color={scoreObj.win ? 'green' : 'red'}
              text={scoreObj.score}
              key={scoreObj.score + Math.random()}
            />
          );
        })}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
});
