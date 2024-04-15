import React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet, ImageBackground, Image, Pressable } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
const logo = require("../../assets/logo.png")

const BackgroundImage = require("../../assets/background.jpg")
const profile = require("../../assets/profile-white.png")

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const AdminInterface = ({ navigation }: RouterProps) => {
  const handleLogout = () => {
    FIREBASE_AUTH.signOut();
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>

      <TouchableOpacity style={styles.buttonP} onPress={() => navigation.navigate('PatientManagement')}>
        <Text style={styles.buttonProfileText}>Profile</Text>
      </TouchableOpacity>
      <Image source={logo} style={styles.image} resizeMode='contain' />
      <View style={styles.container}>
        <Text style={styles.title} >Welcome to Admin Interface</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('PatientManagement')}>
          <Text style={styles.buttonText}>Ajouter patient</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShowPatients')}>
          <Text style={styles.buttonText}>Afficher la liste des patients</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NurseManagement')}>
          <Text style={styles.buttonText}>Ajouter infermier</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ShowNurse')}>
          <Text style={styles.buttonText}>Afficher la liste des infermiers</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleLogout}>
          <Text style={styles.buttonText}>Logout</Text>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: "#0087c5",
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
  buttonP: {
    backgroundColor: "#0087c5",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 20,
    position: 'absolute',
    top: 50,
    right: 40,
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: "100%",
  },
  buttonProfileText: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: "20%",
  },
});

export default AdminInterface;
