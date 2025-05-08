import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Animated, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartaoPerfil = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [animation] = useState(new Animated.Value(0));

  const toggleDetails = () => {
    setShowDetails(!showDetails);

    Animated.timing(animation, {
      toValue: showDetails ? 0 : 1,
      duration: 500, 
      useNativeDriver: false,
    }).start();
  };

  const animatedHeight = animation.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 140],
  });

  const openLink = (url) => {
    Linking.openURL(url).catch((err) => console.error("Não foi possível abrir o link", err));
  };

  return (
    <View style={styles.card}>
      <Image
        source={{ uri: '' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Breno Lopes</Text>
      <Text style={styles.occupation}>Desenvolvedor Full Stack</Text>

      <TouchableOpacity style={styles.button} onPress={toggleDetails}>
        <Ionicons name={showDetails ? "chevron-up" : "chevron-down"} size={18} color="white" />
        <Text style={styles.buttonText}>{showDetails ? 'Ver Menos' : 'Ver Mais'}</Text>
      </TouchableOpacity>

      <Animated.View style={[styles.details, { height: animatedHeight }]}>
        {showDetails && (
          <View style={styles.detailsContent}>
            <Text style={styles.detailText}>Idade: 22 anos</Text>
            <Text style={styles.detailText}>Localização: João Pessoa - PB</Text>
            <Text style={styles.detailText}>Habilidades: GoLang, NestJS, Typescript</Text>
            <View style={styles.socialButtonsContainer}>
              <TouchableOpacity style={[styles.socialButton, {backgroundColor: 'black'}]} onPress={() => openLink('https://github.com/ltbreno')}>
                <Ionicons name="logo-github" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={[styles.socialButton, {backgroundColor: '#1e90ff'}]} onPress={() => openLink('https://www.linkedin.com/in/breno-tolentino/')}>
                <Ionicons name="logo-linkedin" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    alignItems: 'center',
    backgroundColor: '#2a2a2a',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: 300,
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 5,
  },
  occupation: {
    fontSize: 14,
    color: '#ccc',
    textAlign: 'center',
    marginBottom: 15,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
  details: {
    overflow: 'hidden',
    width: '100%',
  },
  detailsContent: {
    paddingHorizontal: 10,
  },
  detailText: {
    color: '#ccc',
    fontSize: 14,
    marginBottom: 5,
  },
  socialButtonsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center',
    gap: 30, 
    marginTop: 10, 
  },
  socialButton: {
    width: 70,         
    height: 40,        
    borderRadius: 10,  
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CartaoPerfil;
