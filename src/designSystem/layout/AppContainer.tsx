import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

SplashScreen.preventAutoHideAsync();

export const AppContainer = ({ children }) => {
  const [fontsLoaded, fontError] = useFonts({
    neuroLight: require('../assets/fonts/neuropol-x-light.otf'),
    neuroLightItalic: require('../assets/fonts/neuropol-x-light-italic.otf'),
    neuro: require('../assets/fonts/neuropol-x-regular.otf'),
    neuroItalic: require('../assets/fonts/neuropol-x-regular-italic.otf'),
    neuroBold: require('../assets/fonts/neuropol-x-bold.otf'),
    neuroBoldItalic: require('../assets/fonts/neuropol-x-bold-italic.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView onLayout={onLayoutRootView} style={styles.container}>
      {children}
      <StatusBar style='dark' />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
  },
});
