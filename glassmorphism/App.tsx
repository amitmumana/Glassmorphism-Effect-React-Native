import React from "react";
import {View,Text,StyleSheet,StatusBar} from "react-native"
import HomeScreen from "./src/screen/HomeScreen";


function App(){
  return(
    <>
     <StatusBar translucent={true} backgroundColor="transparent" />
          <View style={Styles.rootContainer}>
        <HomeScreen/>
      </View>
    </>

  )
}

export default App

const Styles = StyleSheet.create({
   rootContainer:{
      flex:1,
      alignItems:"center",
      justifyContent:"center",
   }
})
