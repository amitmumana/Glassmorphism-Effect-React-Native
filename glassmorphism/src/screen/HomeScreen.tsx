import React from "react"
import {View,Text,StyleSheet,ImageBackground} from "react-native"
import { BlurView } from "@react-native-community/blur"

function HomeScreen(){
    return(
       <ImageBackground style={Styles.BackgroundImg} source={require("../../assets/img/BgImg.jpg")}>

        <View style={Styles.rootContainer}>

            <View style={Styles.blurContainer_one}>
               <Text style={Styles.txt}> blur with opacity</Text>
            </View>

                 <BlurView blurType="light">
                    <View style={Styles.blurContainer_three}>
                       <Text style={Styles.txt}>this is Blur View package</Text>
                    </View>
                 </BlurView>

        </View>
       </ImageBackground>
    )
    
}

export default HomeScreen


const Styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        alignItems:"center",
        justifyContent:"center",
    },
    blurContainer_one:{
        height:150,
        width:250,
        margin:10,
        borderRadius:20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba( 0, 0, 0, 0.7 )',
    },
    BackgroundImg:{
        height:"100%",
        width:"100%",
     },
     blurContainer_two:{
    },
    blurContainer_three:{
        height:150,
        width:250,
        justifyContent:"center",
        alignItems:"center",
    },
    txt:{
        fontSize: 25,
        fontWeight:"bold",
        color:"#fff",
    },
})