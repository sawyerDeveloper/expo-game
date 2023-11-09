import { useRef } from 'react';
import { StyleSheet, View, useWindowDimensions } from 'react-native';
import {
  GridDimensions,
  GridElement,
  createGridData,
} from '../designSystem/utils/CreateGridData';
import { Label } from '../designSystem/ui/Label';

//  Value that reflects the number of grid elements
export const GRID_SIZE: GridDimensions = { width: 24, height: 18 };
export const GameBoard = () => {
  const { width, height } = useWindowDimensions();
  const gridData = useRef<Array<GridElement>>(
    createGridData(width, height, GRID_SIZE)
  );
  const board = useRef(null);
  return (
    <View style={styles.container}>
      <View ref={board} style={styles.board}>
        {gridData.current.map((element) => {
          return (
            <View
              key={element.id}
              style={{
                position: 'absolute',
                top: element.y,
                left: element.x,
                width: element.width,
                height: element.height,
                justifyContent: 'center',
                alignItems: 'center',
                borderColor: '#ffc',
                borderWidth: .5
              }}
            >
              <Label color='#fff' text={element.id} />
            </View>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    backgroundColor: 'red',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  board: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
