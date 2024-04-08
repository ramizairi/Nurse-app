import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { collection, getDocs } from "firebase/firestore";
import { FIREBASE_DB } from '../../FirebaseConfig';

const BackgroundImage = require("../../assets/background.jpg");

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

interface Nurse {
    id: string;
    fname: string;
    lname: string;
    specialisation: string;
    experience: string;
    cin: string;
    email: string;
    phone: string;
}

const ShowNurse = ({ navigation }: RouterProps) => {
    const [nurses, setNurses] = useState<Nurse[]>([]);

    useEffect(() => {
        const fetchNurses = async () => {
            const nurseCollection = collection(FIREBASE_DB, 'nurse');
            const snapshot = await getDocs(nurseCollection);
            const nurseData: Nurse[] = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Nurse));
            setNurses(nurseData);
        };

        fetchNurses();
    }, []);

    const renderNurseItem = ({ item }: { item: Nurse }) => (
        <TouchableOpacity style={styles.itemContainer} onPress={() => handleNurseDetails(item)}>
            <View style={styles.row}>
                <Text style={styles.label}>First Name:</Text>
                <Text style={styles.value}>{item.fname}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Last Name:</Text>
                <Text style={styles.value}>{item.lname}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Specialisation:</Text>
                <Text style={styles.value}>{item.specialisation}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Experience:</Text>
                <Text style={styles.value}>{item.experience}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>CIN:</Text>
                <Text style={styles.value}>{item.cin}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Email:</Text>
                <Text style={styles.value}>{item.email}</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Phone:</Text>
                <Text style={styles.value}>{item.phone}</Text>
            </View>
        </TouchableOpacity>
    );

    const handleNurseDetails = (nurse: Nurse) => {
        // Navigate to nurse details screen
        // You can define your own navigation logic here
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <View style={styles.container}>
                <Text style={styles.title}>Liste des Infirmières</Text>
                <FlatList
                    data={nurses}
                    renderItem={renderNurseItem}
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
        color: "green",
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
        fontSize: 18,
    }, 
    row: {
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    label: {
        fontWeight: 'bold',
        marginRight: 10,
    },
    value: {
        flex: 1,
    },
});

export default ShowNurse;
