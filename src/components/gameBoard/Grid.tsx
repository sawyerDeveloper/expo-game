import { StyleSheet, View } from 'react-native';
import { Label } from '../../designSystem/ui/Label';
import { GridElement } from '../../designSystem/utils/CreateGridData';
import { ViewContainerAbsolute } from '../../designSystem/layout/containers/ViewContainerAbsolute';

export interface GridDataProps {
  gridData: GridElement[];
}

export const Grid = ({ gridData }: GridDataProps) => {
  return (
    <ViewContainerAbsolute>
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
    </ViewContainerAbsolute>
  );
};
