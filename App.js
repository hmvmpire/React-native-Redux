/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux'
import MainNavigator from "./src/navigation/mainNavigator"
import store from "./src/store"

const Root = createAppContainer(MainNavigator);


class App  {

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