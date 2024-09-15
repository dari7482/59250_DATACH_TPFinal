import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { colors } from './src/global/color';




import { useState } from 'react';
import { useFonts } from 'expo-font'
import { fonts } from './src/global/fonts'
import MainNavigator from './src/navigation/MainNavigatorr';
import AuthStack from './src/navigation/AuthStack';

import { Provider } from 'react-redux';
import { store } from './src/app/store';
import Login from './src/screens/Login';
import Register from './src/screens/Register';
export default function App() {
  const [fontLoaded] = useFonts(fonts)


  if (!fontLoaded) {
    return null


  }



  return (
    <>
      <Provider store={store}>
        {/*<Navigator />*/}
        <MainNavigator />
      </Provider>
      <StatusBar style="light" backgroundColor={colors.green1} />
    </>

  );
}


