import { View } from 'react-native';
import { Label, ViewContainerAbsolute, GridElement } from '../../designSystem/';
import { useContext } from 'react';
import { InputTrackerContext } from '../../designSystem/context/input/InputTrackerContext';

export interface GridDataProps {
  gridData: GridElement[];
}

export const Grid = ({ gridData }: GridDataProps) => {
  const { x, y } = useContext(InputTrackerContext);
  console.log(x,y)
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
