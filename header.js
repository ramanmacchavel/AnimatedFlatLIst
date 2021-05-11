import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity, TextInput, Image,  } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header(){
    return(
        <View style={styles.header}>
            <TouchableOpacity style={{flex:1, marginTop: -10}}>
                <MaterialIcons name="menu" size={40} color="white" />
                </TouchableOpacity>
                <Image style={{ height: 50, width: 50, paddingHorizontal: 40, marginTop: -15}} source={require('../assets/favicon.png')} />
                <Text style={styles.title}> Home</Text>
                <TouchableOpacity style={{flex:1}}>
                    <MaterialIcons name="account-balance-wallet" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{flex:1}}>
                    <MaterialIcons  name="add-shopping-cart" size={24} color="white" />
                </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    header:{
        height:80,
        paddingTop:38,
        paddingLeft:10,
        flexDirection:'row',
        backgroundColor:'#31C6FF'
        
    },
    title:{
        color:'white',
        flex:6,
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:10
        
    }
})