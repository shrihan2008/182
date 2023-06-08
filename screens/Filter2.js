import React from 'react'
import {Button,Image,View} from 'react-native'

const Filter2=({
    faces:{
        bounds:{
            size:{
                height:faceHeight,
                width:faceWidth
            }
        },

        lefteyePosition,righttteyePosition,noseBasePosition
    }
})=>{
    const glassHeight=faceHeight
    const glassWidth=faceWidth

    const transformAngle=(
        angleRad=Math.atan((righttteyePosition.y-lefteyePosition.y)/(righttteyePosition.x-lefteyePosition.x))
        )=>angleRad*180/Math.PI
        return(
            <View  style={{position:"absolute",
        left:lefteyePosition.x-glassWidth*0.675,
        top:lefteyePosition.y-glassHeight*0.5,
        }}>
            <Image source={require("../assets/pl.png")} style={{width:glassWidth,height:glassHeight,resizeMode:"contain",transform:[{rotate:`${transformAngle()}deg`}]}}></Image>
    
            </View>
        )
}

export default Filter2