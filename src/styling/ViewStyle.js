 import {StyleSheet} from "react-native"
 
 const styles = StyleSheet.create({
    flex1:{
        flex:1
    },
    centerItems:{
        justifyContent: "center",
         alignItems: "center"
    },
    startFlexItems:{
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    endFlexItems:{
        justifyContent: "flex-end",
        alignItems: "flex-end"
    },
    rowDirection:{
        flexDirection: 'row',
    },
    columnDirection:{
        flexDirection: 'column',
    },
    
    
  });



  export default styles;