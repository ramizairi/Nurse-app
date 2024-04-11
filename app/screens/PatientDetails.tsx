import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../FirebaseConfig';
import { addDoc, collection, doc, setDoc, getDocs, onSnapshot } from "firebase/firestore";
const PatientDetailsScreen = ({ route }) => {


    const { patient } = route.params;

    const [doseName1, setDoseName1] = useState('');
    const [doseName2, setDoseName2] = useState('');
    const [doseName3, setDoseName3] = useState('');
    const [doseName4, setDoseName4] = useState('');
    const [Comment, setComment] = useState('');

    const handleAddDose = async () => {
        try {
            const patientRef = doc(FIREBASE_DB, 'patient', patient.id);
            const motifsAdmissionRef = collection(patientRef, 'motifs_admission');

            
            const motifsAdmissionSnapshot = await getDocs(motifsAdmissionRef);
            const index = motifsAdmissionSnapshot.size;

            const currentTime = new Date().toLocaleString();


            if (doseName1 === '' && doseName2 === '' && doseName3 === '' && doseName4 === '') {
                throw Error("Please fill in all fields");
            } else {
                await addDoc(motifsAdmissionRef, {
                    index: index,
                    dose1: doseName1,
                    dose2: doseName2,
                    dose3: doseName3,
                    dose4: doseName4,
                    Comment: Comment,
                    time: currentTime,
                });
            }


            setDoseName1('');
            setDoseName2('');
            setDoseName3('');
            setDoseName4('');
            setComment('');

            alert('Dose added successfully!');
        } catch (error) {
            console.error('Error adding dose: ', error);
            alert('Failed to add dose. Please try again.');
        }
    };

    const [motifsAdmission, setMotifsAdmission] = useState([]);
    // Fetches the list of motifs admission data for the patient from Firebase and sets it to our local state.
    useEffect(() => {
        // Function to fetch motifs admission data and set up real-time listener
        const fetchMotifsAdmission = () => {
            // Get a reference to the 'motifs_admission' collection for the patient
            const motifsAdmissionRef = collection(doc(FIREBASE_DB, 'patient', patient.id), 'motifs_admission');
            
            // Set up real-time listener using onSnapshot
            const unsubscribe = onSnapshot(motifsAdmissionRef, (motifsAdmissionSnapshot) => {
                // Map the documents to an array of objects

                const motifsAdmissionData = motifsAdmissionSnapshot.docs.map(doc => ({
                    id: doc.id,
                    index: doc.data().index,
                    dose1: doc.data().dose1,
                    dose2: doc.data().dose2,
                    dose3: doc.data().dose3,
                    dose4: doc.data().dose4,
                    Comment: doc.data().Comment,
                    time: doc.data().time,
                }));

                // Sort the data based on the 'index' field in ascending order
                motifsAdmissionData.sort((a, b) => a.index - b.index);
                
                // Update the state with the sorted data
                setMotifsAdmission(motifsAdmissionData);
            });
            
            // Return a cleanup function to remove the listener when the component unmounts
            return () => unsubscribe();
        };
    
        // Call the function to set up the listener
        fetchMotifsAdmission();
    }, [patient.id]); // Re-run effect if patient ID changes
    

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>

                <Text style={styles.title}>Détails du Patient</Text>
                <View style={styles.detailsContainer}>
                    {/* Patient details */}
                    <Text style={styles.label}>Nom :</Text>
                    <Text style={styles.detail}>{patient.fname} {patient.lname}</Text>
                    <Text style={styles.label}>Les Problèmes :</Text>
                    <Text style={styles.detail}>{patient.problems}</Text>
                    <Text style={styles.label}>Email :</Text>
                    <Text style={styles.detail}>{patient.email}</Text>
                    <Text style={styles.label}>Numéro de téléphone :</Text>
                    <Text style={styles.detail}>{patient.phone}</Text>


                    <View style={styles.TableContainer}>
                        <View style={styles.headerTopBar}>
                            <Text style={styles.headerTopBarTxt}>Motifs Admission</Text>
                        </View>
                        <View style={styles.header}>
                            <Text style={styles.heading}>Per</Text>
                            <Text style={styles.heading}>Med</Text>
                            <Text style={styles.heading}>Alim</Text>
                            <Text style={styles.heading}>Sur</Text>
                            <Text style={styles.heading}>Date</Text>
                        </View>

                        <FlatList
                            data={motifsAdmission}
                            renderItem={({ item }) => (
                                <>
                                    <View style={styles.tableRow}>
                                        <Text style={styles.cell}>{item.dose1}</Text>
                                        <Text style={styles.cell}>{item.dose2}</Text>
                                        <Text style={styles.cell}>{item.dose3}</Text>
                                        <Text style={styles.cell}>{item.dose4}</Text>
                                        <Text style={styles.cell}>{item.time}</Text>
                                    </View>
                                    <View>
                                        <Text style={styles.cell}>{"↳"}{item.Comment}</Text>
                                    </View>
                                </>
                            )}
                            keyExtractor={(item) => item.id}
                        />

                    </View>

                    {/* Dose schedule table */}
                    <Text style={styles.tableTitle}>Ajouter les motifs admission</Text>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Perfusions</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="M1"
                            value={doseName1}
                            onChangeText={text => setDoseName1(text)}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Medications</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="M2"
                            value={doseName2}
                            onChangeText={text => setDoseName2(text)}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Alimentation</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="M3"
                            value={doseName3}
                            onChangeText={text => setDoseName3(text)}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Surveillance</Text>
                    </View>
                    <View style={styles.inputRow}>
                        <TextInput
                            style={styles.input}
                            placeholder="M4"
                            value={doseName4}
                            onChangeText={text => setDoseName4(text)}
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.tableRow}>
                        <Text style={styles.tableHeader}>Commentaire</Text>
                    </View>
                    <View style={styles.inputCommentRow}>
                        <TextInput
                            style={styles.textArea}
                            placeholder="Commentaire"
                            value={Comment}
                            onChangeText={text => setComment(text)}
                            multiline={true}
                        />
                    </View>
                    <Text></Text>
                    <TouchableOpacity style={styles.addButton} onPress={handleAddDose}>
                        <Text style={styles.addButtonText}>Ajouter</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        width: "100%",
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingVertical: 50,
        backgroundColor: '#fff',
    },
    container: {
        width: "100%",
        paddingLeft: 20,
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    detailsContainer: {
        width: '100%',
        backgroundColor: '#f9f9f9',
        padding: 20,
        borderRadius: 8,
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    detail: {
        fontSize: 16,
        marginBottom: 10,
    },
    tableTitle: {
        borderTopWidth: 1,
        borderColor: '#0185c6',
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 10,
    },
    tableRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 8,
        marginHorizontal: 2,
        elevation: 1,
        borderRadius: 3,
        borderColor: '#fff',
        padding: 10,
        backgroundColor: '#fff',
    },
    tableHeader: {
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    inputRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    inputCommentRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    textArea: {
        flex: 1,
        height: 80,
        borderColor: 'gray',
        borderWidth: 1,
        marginRight: 10,
        paddingLeft: 10,
    },
    input: {
        flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 10,
    },
    addButton: {
        backgroundColor: '#0185c6',
        padding: 10,
        borderRadius: 5,
        width: '100%',
    },
    addButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
    TableContainer: {
        width: '100%',
        backgroundColor: '#fff',
    },
    headerTopBar: {
        backgroundColor: '#0185c6',
        paddingHorizontal: 12,
        paddingVertical: 10,
        borderRadius: 5,
        elevation: 2,

    },
    headerTopBarTxt: {
        color: '#fff',
        fontSize: 13,
        fontWeight: 'bold',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    heading: {
        fontWeight: 'bold',
        flex: 1,
        fontSize: 15,
    },
    cell: {
        fontSize: 12,
        flex: 1,
        textAlign: 'left',
    },
}
);

export default PatientDetailsScreen;
