import React, { useState } from 'react';
import { View, Text, Button, TouchableOpacity, TextInput, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
//import DateTimePicker from '@react-native-community/datetimepicker';

const BackgroundImage = require("../../assets/background.jpg");

interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const PatientInterface = ({ navigation }: RouterProps) => {
  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [allergies, setAllergies] = useState('');
  const [problems, setProblems] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAddPatient = async () => {
    try {
      await addDoc(collection(FIREBASE_DB, 'patient'), {
        fname: fname,
        lname: lname,
        allergies: allergies,
        problems: problems,
        email: email,
        phone: phone,
      });
      alert(`${fname} ${lname} added successfully`);
      navigation.navigate('PatientManagement');
    } catch (error) {
      console.error('Error adding patient: ', error);
    } finally {
      setFname('');
      setLname('');
      setAllergies('');
      setProblems('');
      setEmail('');
      setPhone('');
    }
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <Text style={styles.title}>Patient Form</Text>

        <View style={styles.inputContainer}>
          <KeyboardAvoidingView behavior='padding'>
            <TextInput
              style={styles.input}
              placeholder="Nom"
              value={fname}
              onChangeText={setFname}
            />
            <TextInput
              style={styles.input}
              placeholder="Prénom"
              value={lname}
              onChangeText={setLname}
            />
            <TextInput
              style={styles.input}
              placeholder="Allergies"
              value={allergies}
              onChangeText={setAllergies}
            />
            <TextInput
              style={styles.input}
              placeholder="Problèmes de santé actuels"
              value={problems}
              onChangeText={setProblems}
            />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={styles.input}
              placeholder="Téléphone"
              keyboardType="numeric"
              value={phone}
              onChangeText={setPhone}
            />
          </KeyboardAvoidingView>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleAddPatient}>
          <Text style={styles.buttonText}>Add Patient</Text>
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 40,
  },
  inputContainer: {
    width: '100%',
  },
  input: {
    backgroundColor: 'white',
    marginBottom: 20,
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  button: {
    backgroundColor: '#4CAF50',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    width: '100%',
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    width: '100%',
  },
});

export default PatientInterface;
