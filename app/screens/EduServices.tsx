import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


const logo = require("../../assets/logo.png")
const BackgroundImage = require("../../assets/eduservice.jpg")

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const EduServices = ({ navigation }: RouterProps) => {

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <View style={styles.container}>
        <Text style={styles.title} >Services éducationnels</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Physiologie')}>
          <Text style={styles.buttonText}>Physiologie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Education technique')}>
          <Text style={styles.buttonText}>Education technique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Education nutritionnelle')}>
          <Text style={styles.buttonText}>Education nutritionnelle</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Activite  physique')}>
          <Text style={styles.buttonText}>Activite  physique</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Complilation')}>
          <Text style={styles.buttonText}>Complilation</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Education d'hygiène")}>
          <Text style={styles.buttonText}>Education d'hygiène</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
  },
  image: {
    height: 160,
    width: 170
  },
  title: {
    marginTop: 0,
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
    opacity: 0.7,
    textAlign: 'center',
    marginBottom: 40,
    width: "100%",
  },
  button: {
    backgroundColor: "#0087c5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    width: "100%",
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: "100%",
  },
});

export default EduServices;
