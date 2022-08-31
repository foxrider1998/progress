import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function About(){
    return(
      <View style={styles.container}>
          <View style={styles.header}>
              <View style={styles.nama}>
                      <Text style={styles.namaText}>TakeMeApp</Text>
                      <Text style={styles.asText}>Aplikasi ini menyimpan informasi portofolio dari setiap user.</Text>
              </View>
          </View>
		    </View>
    )
  }

const styles = StyleSheet.create({
	container:{
		flex:1,
        backgroundColor: 'white',
        flexDirection:'column'
	},
	header:{
		backgroundColor:'white',
		marginTop:200,
    flexDirection: 'column',
	},
    nama:{
        justifyContent:'center',
        alignItems: 'center',
        marginTop:10,
        marginBottom :15,
        padding:20
    },
    namaText:{
        color:'#2991FF', 
        fontSize:25, 
        fontWeight: 'bold',
        marginLeft:30,
        marginRight:30,
        marginBottom : 10
    },
    asText:{
        color:'#2991FF', 
        fontSize:20,
        textAlign:'center' 
    }
})