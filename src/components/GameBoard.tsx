import { useRef } from 'react';
import { Platform, StyleSheet, View, useWindowDimensions } from 'react-native';
import {
  GridDimensions,
  GridElement,
  createGridData,
} from '../designSystem/utils/CreateGridData';
import { Grid } from './gameBoard/Grid';

//  Value that reflects the number of grid elements
export const GRID_SIZE: GridDimensions = { horizontal: 9, vertical: 16 };

export const GameBoard = () => {
  const { width, height } = useWindowDimensions();
  const yOffSet = Platform.OS === 'web' ? 0 : 78;
  const gridData = useRef<Array<GridElement>>(
    createGridData(width, height - yOffSet, GRID_SIZE)
  );

  return (
    <View style={styles.container}>
      <Grid gridData={gridData.current} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
