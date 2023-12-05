import { StyleSheet, View } from 'react-native';
import { Label } from '../../../designSystem/';

export const LastResults = ({ results }) => {
  return (
    <>
      <Label color='#fb9' fontFamily='neuroBoldItalic' text='Previous games' />
      <View style={styles.container}>
        {results.map((resultObj) => {
          return (
            <Label
              fontFamily='neuro'
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
