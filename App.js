/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {Provider} from 'react-redux'
import store from './src/shared/store/store'
import AppStack from './src/shared/navigation/AppStack';

const App: () => React$Node = () => {
  return (
    <Provider store={store}>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={{height:'100%',backgroundColor:'#f2f2f2'}}>
         <AppStack/>
      </SafeAreaView>
    </Provider>
  );
};


export default App;
