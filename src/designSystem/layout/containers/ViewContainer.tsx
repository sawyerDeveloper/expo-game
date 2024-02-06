import { ReactElement } from 'react';
import { ColorValue, DimensionValue, StyleSheet, View } from 'react-native';

type ViewContainerPropTypes = {
  children: ReactElement | ReactElement[];
  height?: number | DimensionValue;
  width?: number | DimensionValue;
  absolute?: boolean;
  flex?: boolean;
  backgroundColor?: ColorValue;
  cornerRadius?: number;
};

export const ViewContainer = ({
  children,
  height = '100%',
  width = '100%',
  absolute = false,
  flex = false,
  backgroundColor,
  cornerRadius,
}: ViewContainerPropTypes) => {
  return (
    <View
      style={[
        flex ? styles.flex : null,
        styles.container,
        {
          height: height,
          width: width,
          position: absolute ? 'absolute' : 'relative',
          backgroundColor: backgroundColor,
          borderRadius: cornerRadius,
        },
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  flex: {
    flex: 1,
  },
});
