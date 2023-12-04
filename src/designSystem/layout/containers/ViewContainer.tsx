import { ReactElement } from 'react';
import { DimensionValue, StyleSheet, View } from 'react-native';

export type ViewContainerPropTypes = {
  children: null | ReactElement | ReactElement[];
  height?: number | DimensionValue;
  width?: number | DimensionValue;
};

export const ViewContainer = ({
  children,
  height = '100%',
  width = '100%',
}: ViewContainerPropTypes) => {
  return (
    <View style={[styles.container, { height: height, width: width }]}>
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
