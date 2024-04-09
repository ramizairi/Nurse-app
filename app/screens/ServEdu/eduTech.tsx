import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Modal } from 'react-native';
const BackgroundImage = require("../../../assets/insideBackground.png");

const img1 = require("../../../assets/eduTech-img1.jpg")
const img2 = require("../../../assets/eduTech-img2.jpg")
const img3 = require("../../../assets/eduTech-img3.jpg")
const img4 = require("../../../assets/eduTech-img4.jpg")

const eduTech = () => {

    const [selectedImage, setSelectedImage] = useState(null);

    const handleImageClick = (image) => {
        setSelectedImage(image);
    };

    const handleCloseModal = () => {
        setSelectedImage(null);
    };

    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => handleImageClick(img1)} style={styles.imageContainer}>
                        <Image source={img1} style={styles.image} />
                    </TouchableOpacity>

                    <Text></Text>

                    <TouchableOpacity onPress={() => handleImageClick(img2)} style={styles.imageContainer}>
                        <Image source={img2} style={styles.image} />
                    </TouchableOpacity>

                    <Text></Text>

                    <TouchableOpacity onPress={() => handleImageClick(img3)} style={styles.imageContainer}>
                        <Image source={img3} style={styles.image} />
                    </TouchableOpacity>

                    <Text></Text>

                    <TouchableOpacity onPress={() => handleImageClick(img3)} style={styles.imageContainer}>
                        <Image source={img4} style={styles.image} />
                    </TouchableOpacity>

                </View>
            </ScrollView>
            <Modal visible={selectedImage !== null} transparent={true}>
                <View style={styles.modalContainer}>
                    <TouchableOpacity style={styles.closeButton} onPress={handleCloseModal}>
                        <Text style={styles.closeButtonText}>Fermer</Text>
                    </TouchableOpacity>
                    <Image source={selectedImage} style={styles.modalImage} resizeMode="contain" />
                </View>
            </Modal>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        padding: 20,
        width: "100%"
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    description: {
        fontSize: 16,
        marginBottom: 20,
        lineHeight: 24,
        color: '#bdc3c7',
    },
    description2: {
        fontSize: 12,
        lineHeight: 24,
        color: '#bdc3c7',
    },
    imageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: "100%",
        height: 200,
        borderRadius: 20,
    },
    modalContainer: {
        marginTop: "15%",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    modalImage: {
        width: '80%',
        height: '80%',
        borderRadius: 20,
    },
    closeButton: {
        position: 'absolute',
        top: 40,
        right: 20,
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
});

export default eduTech;
