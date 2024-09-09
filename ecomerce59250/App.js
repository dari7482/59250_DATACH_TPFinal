import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/color';

import { useState } from 'react';
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigatorr';

export default function App() {
  const [fontLoaded] = useFonts(fonts)


  if (!fontLoaded) {
    return null


  }



  return (
    <>
      <Navigator />
      <StatusBar style="light" backgroundColor={colors.green1} />
    </>

  );
}


