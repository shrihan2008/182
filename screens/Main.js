import React, { Component } from "react"
import {Text,StyleSheet,Image,View,Button,SafeAreaView,StatusBar,Platform} from 'react-native'
import {Camera} from 'expo-camera'
import * as Permissions from 'expo-permissions'
import * as FaceDetector from "expo-face-detector"
import Filter1 from '../screens/Filter1'
import Filter2 from '../screens/Filter2'
export default class Main extends React.Component{
    constructor(props){
    super(props)
    this.state={
        hasCameraPermission:null,
        faces:[]
    }
    }
    componentDidMount(){
        Permissions
           .askAsync(Permissions.CAMERA)
           .then(this.onCameraPermission)
    }

    onCameraPermission = (status) => {
        this.setState({
            hasCameraPermission:status.status==='granted'
        })
    }


    onFacesDetected=(faces)=>{

        this.setState({
            faces:faces
        })
    }

    onFacesDetectionError=(error)=>{
console.log(error)

    }
    render(){
       const{hasCameraPermission}=this.state
       if(hasCameraPermission===null){
        return <View/>
       }

       if(hasCameraPermission===false){
        return (
            <View style={styles.container}><Text>Please give access to camera</Text></View>
        )
       }
       console.log(this.state.faces)

       return(
        <View style={styles.container}>
            <SafeAreaView style={styles.safearea}/>
            <View style={styles.headingContainer}>
                <Text style={styles.titleText}>FRAPP</Text>
            </View>
        
        <View style={styles.cameraStyle}>
            <Camera style={{flex:1}}
            type={Camera.Constants.Type.front}
            FaceDetectorSettings={{
                mode:FaceDetector.Constants.Mode.fast,
                detectLandmarks:FaceDetector.Constants.Landmarks.all,
                runClassifications:FaceDetector.Constants.all
            }}
            
            onFacesDetected={this.onFacesDetected}
            
            onFacesDetectionError={this.onFacesDetectionError}
            
         
            />

{  this.state.faces.map(face=>{
                return <Filter1 key={face.faceID} face={face} />
            })}






{  this.state.faces.map(face=>{
                return <Filter2 key={face.faceID} face={face} />
            })}
        </View>


        <View style={styles.filterContainer}>

        </View>

        <View style={styles.actionContainer}>

        </View>
        </View>
        )
    }

   

}

const styles=StyleSheet.create({
    container:{
        flex:1
    }
})