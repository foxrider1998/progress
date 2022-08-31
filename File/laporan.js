import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Alert,
  Image,
  ImageBackground
} from 'react-native';
import { dataRef } from './References';
export default function DataCost({ navigation, route }) {
  const [dskill, setDskill] = useState([]);
  
  const [dbarang,setDbarang] = useState([]);
  const [key, setKey] = useState('');
  const [id, setId] = useState('');
  const [nama, setNama] = useState('');
  const [alamat, setAlamat] = useState('');
  const [notel, setNotel] = useState('');


  useEffect(() => {
    const dataFocus = navigation.addListener('focus', () => {
      const listener = dataRef.child('cost').on('value', (snapshot) => {
        let data = snapshot.val();
        let dskill = Object.values(data);
        setDskill(dskill);
      });
    });

    const dataFocusbarang = navigation.addListener('focus', () => {
      const listener = dataRef.child('barang').on('value', (snapshot) => {
        let data = snapshot.val();
        let dbarang = Object.values(data);
        setDbarang(dbarang);
      });
    });

  });

  return ( <ImageBackground source={require("../assets/login.jpg")} style={styles.bg} >
    <View style={styles.container}>
      <View style={styles.posTitle}>
        <Text style={styles.title}>Data Costumer</Text>
      </View>
      <View style={styles.contData}>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Id</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Nama </Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Alamat</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Telp</Text>
        </View>
      </View>
      <View style={styles.contFlat}>
        <FlatList
          data={dskill}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.contData1}>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.id} </Text>
                </View>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.nama}</Text>
                </View>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.alamat}</Text>
                </View>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.notel}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>


      <View style={styles.space}>

      </View>
      

      <View style={styles.posTitle}>
        <Text style={styles.title}>Data Barang</Text>
      </View>
      <View style={styles.contData}>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Id</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Nama Barang</Text>
        </View>
        <View style={styles.contentTitle}>
          <Text style={styles.textContentTitle}>Quantity</Text>
        </View>
      </View>
      <View style={styles.contFlat}>
        <FlatList
          data={dbarang}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => {
            return (
              <View style={styles.contData1}>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.id} </Text>
                </View>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.nama}</Text>
                </View>
                <View style={styles.contentTitle1}>
                  <Text style={styles.textContentTitle1}> {item.quantity}</Text>
                </View>
              </View>
            );
          }}
        />
      </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  posTitle: {
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0066ff',
  },
  contData: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#0066ff',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
  },
  contFlat: {
    backgroundColor: '#ccffff',
    paddingTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  contData1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 5,
  },
  contentTitle: {
    marginTop: 5,
  },
  contentTitle1: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  textContentTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 10,
  },
  textContentTitle1: {
    fontWeight: 'bold',
    fontSize: 10,
  },
  bg:{width :'100%',
        height:'100%'

    },
  space: {borderTopWidth:4,
  marginTop:25,
  marginBottom:20
  },
});
