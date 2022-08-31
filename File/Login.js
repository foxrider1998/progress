import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet,Alert, Image, ImageBackground } from "react-native";
import {auth} from './References';

export default function Login({navigation}){
        const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 


    const submit=()=>{
      if(email =="" || password=="" ){
        Alert.alert("email dan password harus diisi!")
      }
      else{
        auth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log("Login berhasil")
        navigation.navigate("MyDrawer")
      })
      .catch(()=>{
        console.log("Register gagal")
      })
    }
  }
     const regis=()=>{
        navigation.navigate('Registrasi');
    };
    return (
      <View style={styles.container}>
      <ImageBackground source={require("../assets/loginbg.jpg")} style={styles.bg} > 
        <View style={styles.posTitle1}>
          
        </View>
        <View style={styles.posTitle}>
          
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Username"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setEmail(value)}
                  value={email}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor="white"
                  onChangeText={(value)=>setPassword(value)}
                  value={password} 
                />
            </View> 
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>submit()}
                >
                  <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </View>

             <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button} onPress={()=>regis()} 

                >
                  <Text style={styles.textButton}>Register</Text>
                </TouchableOpacity>
            </View>
          </View>
      </ImageBackground> 
      </View>
    )
}

const styles = StyleSheet.create({
   bg:{width :'100%',
        height:'100%'

    }, container:{width :'100%',
        height:'100%',
    },
    posTitle:{
      alignItems: 'center'
    },
    posTitle1:{
      alignItems: 'center',
      margin : 20
    },
    contInput:
      {width :'70%',
        height:'70%',
        marginBottom: "40%",
      marginTop: "60%",
      margin: 60,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      borderRadius: 30,
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
      borderRadius: 35,
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: 'white'
    },
    posButton:{
      margin: 20,
      alignItems:'center'
    },
    button:{
      borderRadius: 5,
      width: 180,
      height: 30,
      alignItems:'center',
      backgroundColor : '#ccffff', 
      justifyContent : 'center'
    },
    textButton:{
      fontWeight: 'bold',
      color: '#0066ff'
    },
});
