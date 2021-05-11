import React, {Component, useState} from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';
import ProductList from './screens/ProductList';
import Header from './screens/header';
import MainMenu from './screens/MainMenu';

export default function App() {
  
  return (
    <View style={styles.container}>
      <Header/>
      <MainMenu/>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: 'white',
  },
  header: {
    
    width: 300, height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
    padding:20,
  },
  
});
