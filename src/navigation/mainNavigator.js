import HomeStack from "./HomeStack/HomeStack"
import {createStackNavigator} from "react-navigation";




export default const MainNavigator = createStackNavigator({
    home: {screen: HomeStack}
   // Profile: {screen: ProfileScreen},
  },{
    headerMode: 'none'
  });