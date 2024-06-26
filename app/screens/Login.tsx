import { View, Text, StyleSheet, TextInput, ActivityIndicator, KeyboardAvoidingView, Alert, Pressable, SafeAreaView, Switch, Image, Button, TouchableOpacity } from 'react-native';
import { FIREBASE_AUTH } from '../../FirebaseConfig';
import { NavigationProp } from '@react-navigation/native';
const logo = require("../../assets/logo.png")
import React, { useState } from 'react';
import {signInWithEmailAndPassword } from 'firebase/auth';



interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Login = ({ navigation }: RouterProps) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH;

    const SignIn = async () => {
        if (!email || !password) {
            Alert.alert('Erreur', 'Veuillez entrer un email et un mot de passe');
            return;
        }
    
        setLoading(true);
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
    
            if (!user.emailVerified) {
                Alert.alert('Erreur', 'Veuillez vérifier votre email avant de vous connecter.');
                return;
            }
    
            if (user.email === 'mynurseteam@gmail.com') {
                navigation.navigate('Inside', { screen: 'Admin Panel' })
            } else {
                navigation.navigate('Inside', { screen: 'Nurse Panel' })
            }
        } catch (error) {
            console.error('Erreur de connexion:', error);
            Alert.alert('Erreur', 'Erreur de connexion. Veuillez réessayer.');
        } finally {
            setLoading(false);
        }
    };
    


    return (
        <SafeAreaView style={styles.container}>

            <Image source={logo} style={styles.image} resizeMode='contain' />
            <Text style={styles.title}>Se connecter...</Text>
            <View style={styles.inputView}>
                <TextInput value={email} style={styles.input} placeholder='Email' autoCapitalize='none' onChangeText={(text) => setEmail(text)} />
                <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder='Mot de passe' autoCapitalize='none' onChangeText={(text) => setPassword(text)} />
            </View>
            <View style={styles.rememberView}>
                <View>
                </View>
                <View>
                    <TouchableOpacity onPress={() => navigation.navigate('Réinitialisation de mot de passe')}>
                        <Text style={styles.forgetText}>Mot de passe oublié?</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <View style={styles.buttonView}>
                {loading ? (
                    <ActivityIndicator color="white" size='large' />
                ) : (
                    <TouchableOpacity style={styles.loginButton} onPress={SignIn}>
                        <Text style={styles.buttonText}>Se connecter</Text>
                    </TouchableOpacity>
                )}
                <Text></Text>
            </View>


            <Text style={styles.footerText}>Nouveau ?<Text style={styles.signup} onPress={() => navigation.navigate('Crée un compte')}>  Créer un compte</Text></Text>


        </SafeAreaView>
    )

};

export default Login;

const styles = StyleSheet.create({
    loginButton: {
        backgroundColor: "#0087c5",
        borderRadius: 7,
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: 'center',
        width: "100%"
    },
    container: {
        alignItems: "center",
        paddingTop: 70,
    },
    image: {
        height: 200,
        width: 200
    },
    title: {
        fontSize: 30,
        fontWeight: "bold",
        textTransform: "uppercase",
        textAlign: "center",
        paddingVertical: 40,
        color: "#0087c5"
    },
    inputView: {
        gap: 15,
        width: "100%",
        paddingHorizontal: 40,
        marginBottom: 5
    },
    input: {
        height: 50,
        paddingHorizontal: 20,
        borderColor: "#0087c5",
        borderWidth: 1,
        borderRadius: 7
    },
    rememberView: {
        width: "100%",
        paddingHorizontal: 50,
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 8
    },
    switch: {
        flexDirection: "row",
        gap: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    rememberText: {
        fontSize: 13
    },
    forgetText: {
        fontSize: 11,
        color: "#0087c5"
    },
    button: {
        backgroundColor: "#0087c5",
        height: 45,
        borderColor: "gray",
        borderWidth: 1,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    },
    buttonView: {
        width: "100%",
        paddingHorizontal: 50
    },
    optionsText: {
        textAlign: "center",
        paddingVertical: 10,
        color: "gray",
        fontSize: 13,
        marginBottom: 6
    },
    mediaIcons: {
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 23
    },
    icons: {
        width: 40,
        height: 40,
    },
    footerText: {
        textAlign: "center",
        color: "gray",
    },
    signup: {
        color: "#0087c5",
        fontSize: 13
    }
})