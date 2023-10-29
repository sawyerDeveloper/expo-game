import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const AppContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      {children}
      <StatusBar style='dark' />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
