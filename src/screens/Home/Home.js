import React ,{Component} from "react"
import {View,Text} from "react-native"
import styles from "./../../styling/ViewStyle"



class Home extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            title: 'My new App'
        }
    }

    render()
    {
        return (<View style={{flex:1,flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:15,fontWeight: 'bold',}}  > {this.state.title}</Text>
                </View>)
    }


}


export default Home;