import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const BackgroundImage = require("../../assets/footer.jpg");

const Footer = () => {
    return (
        <View style={styles.container}>
            <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
                <View>
                <Text style={styles.text}>Contact Us</Text>
                <Text style={styles.text}>Email: info@mynurse.tn</Text>
                <Text style={styles.text}>Phone number: +216 46395570</Text>
                </View>
            </ImageBackground>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        opacity: 0.7,
        width: '100%',
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backgroundImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        opacity: 1,
        color: 'black',
        fontSize: 15,
        fontWeight: 'bold',
    },
});

export default Footer;
