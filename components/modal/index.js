import { Text, View, StyleSheet, TouchableOpacity, Pressable, Alert } from 'react-native'

import useStorage from '../../hooks/useStorage'
import * as Clipboard from 'expo-clipboard'

export function ModalPassword({password, handleClose}) {
  const {getItem, setItem, removeItem} = useStorage()
    // const [passwordLabel, setPasswordLabel] = useState('') updates futuros
    const copyClipboard= async () =>{
      await Clipboard.setStringAsync(password);
      Alert.alert("Aviso","Senha copiada para a area de transferencia")[{
        text: "ok"
      }]
    }
    const handleSave = async() =>{
      await setItem('@pass', password)
      alert("senha salva")
      handleClose()
    }


    return (
      <View style={styles.container}>
        <View style={styles.modal}>
          <Text style={{fontSize: 26, fontWeight:"bold", marginTop:10, marginBottom:20}}>Senha gerada</Text>
          {/* <Pressable style={styles.displaySenha} onPress={navigator.clipboard.writeText(password)}>web */}
          <Pressable style={styles.displaySenha} onPress={copyClipboard}>
            <Text style={styles.text}>{password}</Text>
          </Pressable >
            <View style={{flexDirection:"row", justifyContent:"space-between", width:"90%", marginTop:10, marginBottom:10}}>
              <TouchableOpacity style={styles.backButton} onPress={handleClose}>
                <Text style={{fontSize: 16, fontWeight:"bold", color:"#0E0E0E", marginBottom:4}}>Voltar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.saveButton}>
                <Text style={styles.text} onPress={handleSave}>Salvar senha</Text>
              </TouchableOpacity>
            </View>
        </View>
      </View>
    )
};

export default ModalPassword


const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"rgba(24, 24, 24, 0.6)",
      alignItems:"center",
      justifyContent: "center"
    }, modal:{
      alignItems:"center",
      padding: 15,
      backgroundColor: "#F3F3FF",
      width: "80%",
      height:200,
      borderRadius: 8
    }, displaySenha:{
      backgroundColor:"#0E0E0E",
      width:"90%",
      height: 40,
      borderRadius: 8,
      alignItems:"center",
      justifyContent:"center",
      marginBottom:10
    }, backButton:{
      width:"50%", 
      color:"#0E0E0E", 
      alignItems:"center",
      justifyContent: "center"
    }, saveButton:{
      width:"50%", 
      backgroundColor:"#392DE9",
      height: 40,
      alignItems:"center",
      justifyContent: "center",
      borderRadius:8
    }, text:{
      fontSize: 16, 
      fontWeight:"500", 
      color:"white", 
      marginBottom:4}
})