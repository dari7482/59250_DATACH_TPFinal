import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/color';




import { useState } from 'react';
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import Navigator from './src/navigation/Navigatorr';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Login from './src/screens/Login';
export default function App() {
  const [fontLoaded] = useFonts(fonts)


  if (!fontLoaded) {
    return null


  }



  return (
    <>
      <Provider store={store}>
        {/*<Navigator />*/}
        <Login />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green1} />
    </>

  );
}


