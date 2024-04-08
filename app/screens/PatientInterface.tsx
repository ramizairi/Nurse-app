import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


import Footer from './footer';
const logo = require("../../assets/logo.png")
const BackgroundImage = require("../../assets/background.jpg")

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const PatientInterface = ({ navigation }: RouterProps) => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <View style={styles.container}>
        <Text style={styles.title} >Welcome back!</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NursingTopics')}>
          <Text style={styles.buttonText}>Services éducationnels</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NursingTopics')}>
          <Text style={styles.buttonText}>Traitement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Glycemie')}>
          <Text style={styles.buttonText}>Glycémie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NursingTopics')}>
          <Text style={styles.buttonText}>Contactez nous!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <Footer />
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
  },
  image: {
    marginTop: "35%",
    height: 160,
    width: 170
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 40,
    width: "100%",
  },
  button: {
    backgroundColor: '#4CAF50',
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

export default PatientInterface;
