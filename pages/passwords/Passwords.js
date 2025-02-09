import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import {useState, useEffect} from 'react'
import {useIsFocused, userIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
import {Ionicons} from  '@expo/vector-icons'
import { Icon } from './components/Icons'
export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem, removeItem} = useStorage()
    useEffect(() =>{
      async function loadPasswords(){
        const passwords = await getItem("@pass")
        
        setListPasswords(passwords)
      }
      loadPasswords()
    },[focused])
    async function handleRemoveItem(value){
      console.log(value)
      const pswrds = await removeItem("@pass", value)
      setListPasswords(pswrds)
    }

    return (
      <>
      <SafeAreaView style={{height:150}}>
        <View style={styles.header}>
          <Text style={{color:"white", fontSize:20, fontWeight:"bold"}}>Minhas senhas</Text>
        </View>
      </SafeAreaView>
      <View style={styles.container}>
            {listPasswords.length === 0? (<View><Text style={{fontSize:18, fontWeight:"500"}}>Não há senhas salvas</Text></View>) : (listPasswords.map((p) => (
              <Pressable style={styles.password} key={Math.random()} onLongPress={() => handleRemoveItem(p)}>
                <Icon item={p} setListPasswords={() => setListPasswords}/>
              </Pressable>
            )))}
        </View>
      </>
    )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor:"#392de9",
    paddingTop:58,
    paddingBottom:14,
    paddingLeft:18,
    paddingRight:14
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