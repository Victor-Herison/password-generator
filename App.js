import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require("./assets/logo.png")}
        style={styles.logo}
      />

      <Text style = {{fontSize: 26, fontWeight:"bold"}}>
        16 caracteres
      </Text>
      <View style={{backgroundColor:"#fff", width:"80%", alignItems:"center", borderRadius:"8px", padding:"3px", marginTop:14, marginBottom:14}}>
        <Slider  style={{width:"80%", height: 40}}
          minimumValue={6}
          maximumValue={26}
          minimumTrackTintColor="#FF2626"
          maximumTrackTintColor="#BBBBBB"
          thumbTintColor = "#392DE9"/>
          
      </View>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Gerar Senha</Text> 
      </TouchableOpacity>

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
