import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [ gameStarted, setGameStarted ] = useState(false)

  const start = () => {
    setGameStarted(true)
  }

  const win = () => {
    setGameStarted(false)
  }

  const lose = () => {
    setGameStarted(false)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>
        This is{!gameStarted && ' going to be'} a fun game!
      </Text>
      {!gameStarted ? <Button title='Start' onPress={start} /> : 
      <View>
        <Button title='Win' onPress={win} />
        <Button title='Lose' onPress={lose} />
      </View>
      }
      <StatusBar style="dark" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    color: '#fb9'
  }
});
