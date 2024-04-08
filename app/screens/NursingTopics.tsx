import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import Footer from './footer';
const BackgroundImage = require("../../assets/insideBackground.png");

const img1 = require("../../assets/traitment-img1.jpg")
const img2 = require("../../assets/traitment-img2.jpg")
const img3 = require("../../assets/traitment-img3.jpg")

const NursingTopics = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Administration de Médicaments</Text>
          <Text style={styles.description}>
            L'administration de médicaments est une tâche cruciale pour les infirmières. Cela comprend la préparation des médicaments, leur administration sécuritaire selon les prescriptions médicales, et la surveillance des effets secondaires.
          </Text>
          <View style={styles.imageContainer}>
            <Image source={img1} style={styles.image} />
          </View>

          <Text style={styles.title}>Surveillance des Signes Vitaux</Text>
          <Text style={styles.description}>
            La surveillance des signes vitaux est essentielle pour évaluer l'état de santé d'un patient. Les infirmières doivent être compétentes dans la prise de la pression artérielle, la mesure de la fréquence cardiaque, la surveillance de la température et l'évaluation de la respiration.

            Une surveillance régulière des signes vitaux permet aux infirmières de détecter rapidement les changements dans l'état de santé d'un patient et de prendre les mesures nécessaires. Elles doivent également être capables d'interpréter les résultats des signes vitaux et de les documenter de manière précise.
          </Text>
          <View style={styles.imageContainer}>
            <Image source={img2} style={styles.image} />
          </View>

          <Text style={styles.title}>Gestion de la Douleur</Text>
          <Text style={styles.description}>
            La gestion de la douleur est un aspect important des soins infirmiers. Les infirmières doivent évaluer la douleur des patients, mettre en œuvre des plans de traitement efficaces et fournir un soutien émotionnel aux patients souffrant de douleur.
          </Text>
          <View style={styles.imageContainer}>
            <Image source={img3} style={styles.image} />
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

export default NursingTopics;
