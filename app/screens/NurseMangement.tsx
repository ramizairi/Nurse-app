import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { addDoc, collection } from "firebase/firestore";
import { FIREBASE_DB } from '../../FirebaseConfig';

const BackgroundImage = require("../../assets/background.jpg");

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const NurseManagement = ({ navigation }: RouterProps) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [specialisations, setSpecialisations] = useState('');
    const [experiences, setExperiences] = useState('');
    const [cin, setCin] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleAddNurse = async () => {
        try {
            await addDoc(collection(FIREBASE_DB, 'nurse'), {
                fname: fname,
                lname: lname,
                specialisation: specialisations,
                experience: experiences,
                cin: cin,
                email: email,
                phone: phone,
            });
            alert(`${fname} ${lname} added successfully`);
            navigation.navigate('NurseManagement');
        } catch (error) {
            console.error('Error adding nurse: ', error);
        } finally {
            // Reset the form fields to their initial values.
            setFname('');
            setLname('');
            setSpecialisations('');
            setExperiences('');
            setCin('');
            setEmail('');
            setPhone('');
        }
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Nurse Form</Text>

                <View style={styles.inputContainer}>
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
                        placeholder="Spécialisations"
                        value={specialisations}
                        onChangeText={setSpecialisations}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Expériences (en années)"
                        keyboardType="numeric"
                        value={experiences}
                        onChangeText={setExperiences}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CIN"
                        keyboardType="numeric"
                        value={cin}
                        onChangeText={setCin}
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
                        value={phone}
                        onChangeText={setPhone}
                    />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleAddNurse}>
                    <Text style={styles.buttonText}>Ajouter Infirmière</Text>
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
        width: '80%',
        alignItems: 'stretch',
    },
    input: {
        backgroundColor: 'white',
        marginBottom: 20,
        padding: 10,
        borderRadius: 8
    },
    button: {
        backgroundColor: '#4CAF50',
        borderRadius: 8,
        paddingVertical: 12,
        paddingHorizontal: 24,
        marginBottom: 20,
        width: '80%',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        width: '100%',
    },
});


export default NurseManagement;
