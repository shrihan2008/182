import React from "react";
import {Text,View,Button,StyleSheet,SafeAreaView,Image} from 'react-native'
import { LearnMoreLinks } from "react-native/Libraries/NewAppScreen";

const Filter1=({
    face:{
        bounds:{
            size:{
                width:faceWidth,
                height:faceHeight,
            }
        },

        leftEyePosition,rightEyePosition,noseBasePosition
    }
})=>{
    const glassWidth=faceWidth
    const glassHeight=faceHeight/3
    const transformAngle=(
        angleRad=Math.atan((rightEyePosition.y-leftEyePosition.y)/(rightEyePosition.x-leftEyePosition.x))
    )=>angleRad*180/Math.PI

    return(
        <View  style={{position:"absolute",
    left:leftEyePosition.x-glassWidth*0.675,
    top:leftEyePosition.y-glassHeight*0.5,
    }}>
        <Image source={require("../assets/spectacle.png")} style={{width:glassWidth,height:glassHeight,resizeMode:"contain",transform:[{rotate:`${transformAngle()}deg`}]}}></Image>

        </View>

    )
}

export default Filter1