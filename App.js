

import React, {Component} from 'react';
import { createAppContainer} from 'react-navigation';
import { Provider } from 'react-redux'
import MainNavigator from "./src/navigation/mainNavigator"
import store from "./src/store"
import NavigationService from "./src/internal/services/navigationService"

const Root = createAppContainer(MainNavigator);


class App extends Component  {

   render(){
    
     const prefix = 'YourAppName://';
       return   <Provider store={store}>
                      <Root
                           uriPrefix={prefix}
                           ref={navigatorRef => { NavigationService.setTopLevelNavigator(navigatorRef)}} />
                </Provider> 
                    
   }
 }
 
   export default App;
   