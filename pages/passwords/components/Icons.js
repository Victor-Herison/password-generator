import {Ionicons} from  '@expo/vector-icons'
import { useState } from 'react'
import { View, Pressable, Text, StyleSheet } from 'react-native'



export function Icon({item, setListPasswords}){
    const [isHide, setIsHide] = useState(false)

    if(!isHide){
        return (
        <>
        
            <Text style={{color:"white"}}>{item}</Text>
            <Ionicons color={"#F3F3FF"} size={22} name="eye" onPress={() => setIsHide(true)}/>
        
        </>

)
    }else{
        return (
            <>
                            <View style={styles.hide}></View>
                            <Ionicons color={"#F3F3FF"} size={22} name="eye-off" onPress={() => setIsHide(false)}/>
            </>
            )
    }
    
}

const styles = StyleSheet.create({
    hide:{
        width:"40%",
        backgroundColor:"#F3F3FF",
        height:11,
        borderRadius:8
      }
})