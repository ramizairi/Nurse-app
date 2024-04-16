import React, { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ImageBackground, Image, Linking  } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';


const logo = require("../../assets/logo.png")
const BackgroundImage = require("../../assets/background.jpg")

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const NurseInterface = ({ navigation }: RouterProps) => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <View style={styles.container}>
        <Text style={styles.title} >Bon retour infirmière !</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShowPatients')}>
          <Text style={styles.buttonText}>Listes des patients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShowNurse')}>
          <Text style={styles.buttonText}>Listes des inférmiers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Services éducationnels')}>
          <Text style={styles.buttonText}>Services éducationnels ⏭️</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Traitement')}>
          <Text style={styles.buttonText}>Traitement</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Glycemie')}>
          <Text style={styles.buttonText}>Glycémie</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleEmail}>
          <Text style={styles.buttonText}>Contactez nous!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const handleEmail = () => {
  Linking.openURL('mailto:mynurseteam@gmail.com');
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
    marginTop: "10%",
    height: 160,
    width: 170
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: "black",
    opacity: 0.7,
    textAlign: 'center',
    borderRadius: 10,
    padding: 10,
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

export default NurseInterface;
