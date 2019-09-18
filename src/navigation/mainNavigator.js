import HomeStack from "./HomeStack/HomeStack"
import { createStackNavigator } from 'react-navigation-stack';




const MainNavigator = createStackNavigator({
    home: {screen: HomeStack}
   // Profile: {screen: ProfileScreen},
  },{
    headerMode: 'none'
  });



  export default MainNavigator