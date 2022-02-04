import React from 'react';
import { StatusBar } from 'react-native';
import { Initial } from './src/screens/Initial';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  BigShouldersDisplay_100Thin,
  BigShouldersDisplay_300Light,
  BigShouldersDisplay_400Regular,
  BigShouldersDisplay_500Medium,
  BigShouldersDisplay_600SemiBold,
  BigShouldersDisplay_700Bold,
  BigShouldersDisplay_800ExtraBold,
  BigShouldersDisplay_900Black,
} from '@expo-google-fonts/big-shoulders-display';

export default function App() {

  let [fontsLoaded] = useFonts({
    BigShouldersDisplay_100Thin,
    BigShouldersDisplay_300Light,
    BigShouldersDisplay_400Regular,
    BigShouldersDisplay_500Medium,
    BigShouldersDisplay_600SemiBold,
    BigShouldersDisplay_700Bold,
    BigShouldersDisplay_800ExtraBold,
    BigShouldersDisplay_900Black,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <>
      <StatusBar backgroundColor='transparent' translucent={true} barStyle='light-content' />
      <Initial />
    </>
  );
}