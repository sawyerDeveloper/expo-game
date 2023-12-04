import { ReactElement } from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

export type ViewContainerPropTypes = {
  children: ReactElement | ReactElement[];
  height?: number | DimensionValue;
  width?: number | DimensionValue;
  absolute?: boolean;
};

export const ViewContainer = ({
  children,
  height = '100%',
  width = '100%',
  absolute = false,
}: ViewContainerPropTypes) => {
  return (
    <View
      style={[
        styles.container,
        {
          height: height,
          width: width,
          position: absolute ? 'absolute' : 'relative',
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
});
