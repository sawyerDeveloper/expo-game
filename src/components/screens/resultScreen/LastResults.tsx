import { StyleSheet, View } from 'react-native';
import { Label } from '../../../designSystem/ui/Label';

export const LastResults = ({ results }) => {
  return (
    <>
      <Label color='#fb9' text='Previous games' />
      <View style={styles.container}>
        {results.map((resultObj) => {
          return (
            <Label
              color={resultObj.win ? 'green' : 'red'}
              text={resultObj.score}
              key={resultObj.score + Math.random()}
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
