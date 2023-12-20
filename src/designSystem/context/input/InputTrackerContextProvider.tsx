import { useRef } from 'react';
import { InputTrackerContext } from './InputTrackerContext';
import { View } from 'react-native';

export const InputTrackerContextProvider = ({ children }) => {
  const inputX = useRef(0);
  const inputY = useRef(0);

  const onInputStart = (x, y) => {
    inputX.current = x;
    inputY.current = y;
  };

  const onInputMove = (x, y) => {
    inputX.current = x;
    inputY.current = y;
  };

  const onInputEnd = (x, y) => {
    inputX.current = x;
    inputY.current = y;
  };

  const onPointerDown = (event) => {
    onInputStart(event.nativeEvent.x, event.nativeEvent.y);
  };
  const onPointerMove = (event) => {
    onInputMove(event.nativeEvent.x, event.nativeEvent.y);
  };
  const onTouchStart = (event) => {
    onInputStart(event.nativeEvent.pageX, event.nativeEvent.pageY);
  };
  const onTouchMove = (event) => {
    onInputMove(event.nativeEvent.pageX, event.nativeEvent.pageY);
  };
  return (
    <View
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
      }}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
    >
      <InputTrackerContext.Provider
        value={{ x: inputX.current, y: inputY.current }}
      >
        {children}
      </InputTrackerContext.Provider>
    </View>
  );
};
