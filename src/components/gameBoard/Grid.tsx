import { StyleSheet, View } from 'react-native';
import { Label } from '../../designSystem/ui/Label';
import { GridElement } from '../../designSystem/utils/CreateGridData';

export interface GridDataProps {
  gridData: GridElement[];
}

export const Grid = ({ gridData }: GridDataProps) => {
  return (
    <View style={styles.container}>
      {gridData.map((element: GridElement) => {
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
              borderWidth: 0.5,
            }}
          >
            <Label text={element.id} color='#fff' fontFamily='neuroBold' />
          </View>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
});
