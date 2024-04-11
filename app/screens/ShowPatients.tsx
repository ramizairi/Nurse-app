import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from '../../FirebaseConfig';

const BackgroundImage = require("../../assets/background.jpg");

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

interface Patient {
    id: string;
    fname: string;
    lname: string;
    allergies: string;
    problems: string;
    email: string;
    phone: string;
}

const ShowPatients = ({ navigation }: RouterProps) => {
    const [patients, setPatients] = useState<Patient[]>([]);
    useEffect(() => {
        const fetchPatients = async () => {
            const patientCollection = collection(FIREBASE_DB, 'patient');
            const snapshot = await getDocs(patientCollection);
            const patientData: Patient[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Patient));
            setPatients(patientData);
        };

        fetchPatients();
    }, []);

    const renderPatientItem = ({ item }: { item: Patient }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handlePatientDetails(item)}>
            <Text style={styles.itemText}>Nom :</Text>
            <Text style={styles.itemDetails}>{item.fname} {item.lname}</Text>
            <Text style={styles.itemText}>Email :</Text>
            <Text style={styles.itemDetails}>{item.email}</Text>
            <Text style={styles.itemText}>Numéro de télephone :</Text>
            <Text style={styles.itemDetails}>{item.phone}</Text>
        </TouchableOpacity>
    );

    const handlePatientDetails = (patient: Patient) => {
        navigation.navigate('Détails du Patient', { patient: patient });
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Liste des Patients</Text>
                <FlatList
                    data={patients}
                    renderItem={renderPatientItem}
                    keyExtractor={item => item.id}
                    style={styles.list}
                />
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
        alignItems: 'center',
        justifyContent: 'center',
        width: "100%"
    },
    title: {
        color: "#0087c5",
        paddingTop: "20%",
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    list: {
        width: '80%',
    },
    itemContainer: {
        backgroundColor: '#f9f9f9',
        padding: 20,
        marginBottom: 10,
        borderRadius: 8,
    },
    itemText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    itemDetails: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default ShowPatients;
