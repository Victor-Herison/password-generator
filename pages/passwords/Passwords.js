import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View, StyleSheet } from 'react-native'
import {useState, useEffect} from 'react'
import {useIsFocused, userIsFocused} from '@react-navigation/native'
import useStorage from '../../hooks/useStorage'
export function Passwords(){
    const [listPasswords, setListPasswords] = useState([])
    const focused = useIsFocused()
    const {getItem} = useStorage()
    useEffect(() =>{
      async function loadPasswords(){
        const passwords = await getItem("@pass")
        console.log(passwords)
      }
      loadPasswords()
    },[focused])
    return (
      <SafeAreaView>
        <View>
          <Text>minhas senhas</Text>
        </View>
      </SafeAreaView>
    )
}
