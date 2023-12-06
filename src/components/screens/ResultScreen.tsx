import { Button, Label, VSpacer } from '../../designSystem/';
import { LastResults } from './resultScreen/LastResults';
import { Modal, StyleSheet, useWindowDimensions, View } from 'react-native';
import { useState } from 'react';

export type ResultObj = {
  score: number;
  win: Boolean;
};

interface ResultScreenProps {
  result: ResultObj;
  scores: [ResultObj];
}

export const ResultScreen = ({ result, scores }: ResultScreenProps) => {
  const { height } = useWindowDimensions();
  const { win } = result;
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View style={styles.container}>
      <Modal
        presentationStyle='overFullScreen'
        animationType='slide'
        transparent={true}
        visible={modalVisible}
      >
        <View style={[styles.modal, { marginTop: height / 2 - 80 }]}>
          <Label
            color='#fb9'
            fontFamily='neuroBold'
            text={win ? 'You Won!' : 'You Lost!'}
          />
          <VSpacer height={10} />
          <Label
            color='#fb9'
            fontFamily='neuroBold'
            text={'Your score was: ' + scores.reverse()[0].score}
          />
          <Button
            title='OK'
            fontFamily='neuroBold'
            onPress={() => setModalVisible(false)}
          />
        </View>
      </Modal>
      <VSpacer height={10} />
      {scores && <LastResults results={scores.reverse()} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 300,
    margin: 40,
    backgroundColor: '#333',
    borderRadius: 25,
    padding: 50,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});
