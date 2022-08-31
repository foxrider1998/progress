import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet,ImageBackground } from "react-native";
import {dataRef} from './References';

export default function Edit({navigation, route}){
    const {key, id, nama, quantity} = route.params;
    const [keyUbah, setKey] = useState(key);
    const [bid, setId] = useState(id);
    const [bnama, setNama] = useState(nama);
    const [bquantity, setQuantity] = useState(quantity);

   const ubahData = (keyUbah) => {
        console.log(bquantity)
        dataRef.child('barang').child(key).update({'id': bid,
                                       'nama' : bnama,
                                       'quantity': bquantity});
        navigation.navigate('Biodata');
    };

    const hapusData = (keyUbah) =>{
        dataRef.child("barang").child(key).remove();
        navigation.navigate('Biodata');
    
     }

    return ( <ImageBackground source={require("../assets/login.jpg")} style={styles.bg} >
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Ubah barang</Text>
        </View>

          <View style={styles.contInput}>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setId(value)}
                  value={bid}
                />
            </View>
            <View style={styles.posInput}>
                  <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setNama(value)}
                  value={bnama}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setQuantity(value)}
                  value={bquantity}
                />
            </View>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                 
                  onPress={()=>ubahData(keyUbah)}
                > 
                  <Text style={styles.textButton}>Ubah</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView1}>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>hapusData(keyUbah)}
                >
                  <Text style={styles.textButton}>Hapus</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
      </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
      marginTop: 40
    },bg:{width :'100%',
        height:'100%'

    },
    posTitle:{
      alignItems: 'center'
    },
    title:{
      fontSize : 18,
      fontWeight : 'bold',
      color:'#0066ff'
    },
    contInput:{
      backgroundColor:'#0066ff',
      margin: 20,
      padding: 15,
      borderRadius: 15
    },
    posInput:{
      marginLeft : 20,
      marginRight : 20,
      marginBottom : 10,
      paddingLeft : 10,
      paddingRight: 10,
      backgroundColor:'#0066ff'
    },
    input:{
      height : 30,
      borderBottomWidth:1,
      borderBottomColor : '#ffffff',
      backgroundColor: '#0066ff',
      color: "white"
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
    buttonView1:{
        marginLeft:20,
        marginRight:20
    },
});
