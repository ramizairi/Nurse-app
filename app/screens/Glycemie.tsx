import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
const BackgroundImage = require("../../assets/insideBackground.png");

const img1 = require("../../assets/gly-img1.jpg")
const img2 = require("../../assets/gly-img2.jpg")
const img3 = require("../../assets/gly-img3.jpg")
const img4 = require("../../assets/gly-img4.jpg")
const img5 = require("../../assets/gly-img5.jpg")

const Glycemie = () => {
    return (
        <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <View style={styles.container}>
                    <Text style={styles.title}>
                        Définition et Importance
                    </Text>
                    <Text style={styles.description}>
                        La glycémie désigne la concentration de glucose dans le sang. Il est crucial de surveiller la glycémie chez les patients atteints de diabète pour éviter les complications liées à une glycémie trop élevée ou trop faible.
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image source={img1} style={styles.image} />
                    </View>
                    <Text style={styles.description}>
                        Les infirmières jouent un rôle essentiel dans la surveillance de la glycémie, l'éducation des patients sur la gestion de leur glycémie et l'administration d'insuline ou d'autres médicaments pour contrôler la glycémie.
                    </Text>



                    <Text style={styles.title}>
                        Mesure de la Glycémie
                    </Text>
                    <Text style={styles.description}>
                        La mesure de la glycémie est effectuée à l'aide d'un glucomètre, qui prélève un échantillon de sang et affiche la concentration de glucose. Les infirmières doivent être formées sur l'utilisation appropriée du glucomètre et l'interprétation des résultats.
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image source={img2} style={styles.image} />
                    </View>
                    <Text style={styles.description}>
                        Il est important d'expliquer aux patients comment surveiller leur propre glycémie et de les encourager à tenir un journal de leurs résultats.
                    </Text>



                    <Text style={styles.title}>
                        Symptômes de Déséquilibre Glycémique
                    </Text>
                    <Text style={styles.description}>
                        Les symptômes d'un déséquilibre glycémique varient selon qu'il s'agit d'une glycémie trop élevée (hyperglycémie) ou trop faible (hypoglycémie).
                    </Text>
                    <Text style={styles.description2}>
                        <Text style={styles.description}>🚩Hyperglycémie : </Text>soif excessive, urination fréquente, vision floue, fatigue, peau sèche, faim accrue, irritabilité.
                    </Text>
                    <Text style={styles.description2}>
                        <Text style={styles.description}>🚩Hypoglycémie : </Text>tremblements, sueurs, faim intense, confusion, vertiges, palpitations, faiblesse.
                    </Text>
                    <Text>{"\n"}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={img3} style={styles.image} />
                    </View>                    
                    <Text>{"\n"}</Text>
                    <View style={styles.imageContainer}>
                        <Image source={img4} style={styles.image} />
                    </View>
                    <Text style={styles.description}>
                        Les infirmières doivent être en mesure de reconnaître ces symptômes et de prendre des mesures appropriées pour corriger le déséquilibre glycémique.
                    </Text>

                    <Text style={styles.title}>
                        Gestion de la Glycémie
                    </Text>
                    <Text style={styles.description}>
                        La gestion de la glycémie implique un équilibre entre l'administration d'insuline ou d'autres médicaments hypoglycémiants et l'alimentation pour maintenir des niveaux de glucose dans le sang dans une plage cible.
                    </Text>
                    <View style={styles.imageContainer}>
                        <Image source={img5} style={styles.image} />
                    </View>
                </View>
            </ScrollView>
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
    }, description2: {
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
});

export default Glycemie;
