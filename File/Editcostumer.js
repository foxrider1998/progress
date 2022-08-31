import React, { useState } from "react";
import { View, Text, TextInput, Picker, TouchableOpacity, StyleSheet } from "react-native";
import {dataRef} from './References';

export default function EditCostumer({navigation, route}){
    const {key, id, nama, alamat,notel} = route.params;
    const [keyCost, setKey] = useState(key);
    const [bid, setId] = useState(id);
    const [bnama, setNama] = useState(nama);
    const [balamat, setAlamat] = useState(alamat);
    const [bnotel, setNotel] = useState(notel);
 console.log(key)
   const ubahDataCost = (keyCost) => {
     
        dataRef.child('cost').child(key).update({'id': bid,
                                       'nama' : bnama,
                                       'alamat': balamat,
                                       'notel': bnotel});
        navigation.navigate('Biodata');
    };

    const hapusData = (key) =>{
        dataRef.child("cost").child(key).remove();
        navigation.navigate('Biodata');
    
     }

    return (
      <View style={styles.container}>
        <View style={styles.posTitle}>
          <Text style={styles.title}>Ubah costumer</Text>
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
                  onChangeText={(value)=>setAlamat(value)}
                  value={balamat}
                />
            </View>
            <View style={styles.posInput}>
                <TextInput 
                  style={styles.input}
                  placeholderTextColor="#ffffff"
                  onChangeText={(value)=>setNotel(value)}
                  value={bnotel}
                />
            </View>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                 
                  onPress={()=>ubahDataCost(key)}
                > 
                  <Text style={styles.textButton}>Ubah</Text>
                </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttonView1}>
            <View style={styles.posButton}>
                <TouchableOpacity
                  style={styles.button}
                  onPress={()=>hapusData(key)}
                >
                  <Text style={styles.textButton}>Hapus</Text>
                </TouchableOpacity>
            </View>
          </View>
      </View>
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
