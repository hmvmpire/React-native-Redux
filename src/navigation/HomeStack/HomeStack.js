
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import {Home} from "./../../screens"


export default HomeStack = createStackNavigator({
    Home: {
        screen: Home,
        navigationOptions: ({navigation}) => ({
            header: null
        })
    },

},{
    initialRouteName: 'Home',
    gesturesEnabled: true,
    headerMode: 'none'
    
})


