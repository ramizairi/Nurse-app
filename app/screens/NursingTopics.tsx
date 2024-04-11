import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
const BackgroundImage = require("../../assets/insideBackground.png");

const img1 = require("../../assets/traitment-img1.jpg")
const img2 = require("../../assets/traitment-img2.jpg")
const img3 = require("../../assets/traitment-img3.jpg")

const NursingTopics = () => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>Insulinosensibilisateurs</Text>
          <Text style={styles.description}>
            Biguanides.
          </Text>
          <Text style={styles.description}>
            Glitazones.
          </Text>

          <Text style={styles.title}>Insulinosecréteurs</Text>
          <Text style={styles.description}>
            Sulfamides hypoglycémiants.
          </Text>
          <Text style={styles.description}>
            Glinides.
          </Text>
          <Text style={styles.description}>
          Inhibiteurs de l’alpha-glucosidase.
          </Text>

          <Text style={styles.title}>Incrétines</Text>
          <Text style={styles.description}>
          Inhibiteurs DPP4.   
          </Text>
          <Text style={styles.description}>
          Analogues GLP1.
          </Text>
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