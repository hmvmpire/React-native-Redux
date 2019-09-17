/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux'


const Root = createAppContainer(MainNavigator);


class App extends Component {

   render(){
     const prefix = 'YourAppName://';
       return   <Provider store={store}>
                     <LoadingScreen />
                      <Root
                           uriPrefix={prefix}
                           ref={navigatorRef => {
                                     NavigationService.setTopLevelNavigator(navigatorRef);
                                 }} />
                </Provider> 
                    
   }
 }
 
   export default App;
   store.dispatch(Actions.login.checkUser());