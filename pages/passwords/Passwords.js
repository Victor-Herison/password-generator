import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import {useIsFocused, userIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import {Ionicons} from  '@expo/vector-icons'
export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem} = useStorage()
    useEffect(() =>{
      async function loadPasswords(){
        const passwords = await getItem("@pass")
        
        setListPasswords(passwords)
        console.log(listPasswords)
      }
      loadPasswords()
    },[focused])
    return (
      <>
      <SafeAreaView style={{height:150}}>
        <View style={styles.header}>
          <Text style={{color:"white", fontSize:20, fontWeight:500}}>Minhas senhas</Text>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
            {listPasswords.map((p) => (
              <View style={styles.password} key={Math.random()} onT>
                <Text style={{color:"white"}}>{p}</Text>
                <Ionicons color={"#392DE9"} size={22} name="eye"/>
              </View>
            ))}
        </View>
      </>
    )
}


const styles = StyleSheet.create({
  header: {
      flex:1,
      height:150,
      backgroundColor:"#392DE9",
      alignItems:"center",
      justifyContent: "center",
    },container:{
     flex:1,
     alignItems:"center"
    }, password:{
      marginTop:10,
      backgroundColor:"#0E0E0E",
      width:"90%",
      height:40,
      borderRadius:8,
      color:"white",
      alignItems:"center",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingLeft:10,
      paddingRight:10
    }
})