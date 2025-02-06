import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider';
import {ModalPassword} from './components/modal'

const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
const charsArray = chars.split('');

export default function App() {
  const [size, setSize] = useState(8)
  const [passwordValue, setPasswordValue] = useState("")
  const [modalVisible, setModalVisible] = useState(false)


  const generate = () =>{
    let password = new Array(size).fill("")
    password = (password.map(char => char = charsArray[Math.floor(Math.random() * chars.length)])).join('')
    setPasswordValue(password)
    setModalVisible(true)
  }

  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/logo.png")}
        style={styles.logo}
      />

      <Text style = {{fontSize: 26, fontWeight:"bold"}}>
        {size} caracteres
      </Text>
      <View style={{backgroundColor:"#fff", width:"80%", alignItems:"center", borderRadius:"8px", padding:"3px", marginTop:14, marginBottom:14}}>
        <Slider  style={{width:"80%", height: 40}}
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#FF2626"
          maximumTrackTintColor="#BBBBBB"
          thumbTintColor = "#392DE9"
          value={size}
          step={1}
          onValueChange={(value) =>setSize(value)}
          />
          
      </View>
      <TouchableOpacity style={styles.button} onPress={generate}>
        <Text style={styles.buttonText}>Gerar Senha</Text> 
      </TouchableOpacity>

      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <ModalPassword password={passwordValue} handleClose={() => setModalVisible(false)}/>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F3FF',
    alignItems: 'center',
    justifyContent: 'center',
  }, logo:{
    marginBottom: 50,
  },button:{
    width:"80%",
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "#392DE9",
    height: 44,
    borderRadius: 8
  }, buttonText:{
    color:"#fff",
    fontSize:20,
    fontWeight: "500"
  }
});
