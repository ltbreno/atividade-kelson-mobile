import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Linking, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CartaoApresentacao = () => {


    const openLink = (url) => {
        Linking.openURL(url).catch((err) => console.error("Não foi possível abrir o link", err));
      };

  return (
<View style={styles.card}>
      <Image
        source={{ uri: 'https://media.licdn.com/dms/image/v2/D4D03AQHN1deu7nIf5g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1696898937428?e=1746057600&v=beta&t=Fn7YhJLTqbCxGItwvYzIkyTMulK3glKjqzvx7UZb7yM' }}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Júlio César</Text>
      <Text style={styles.description}>Desenvolvedor Full Stack | Apaixonado por tecnologia</Text>
      <View style={styles.contactButtons}>
        <TouchableOpacity style={[styles.button, {backgroundColor: 'black'}]} onPress={() => openLink('https://github.com/JulioCAC')}>
          <Ionicons name="logo-github" size={24} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, {backgroundColor: '#1e90ff'}]} onPress={() => openLink('https://www.linkedin.com/in/julio-cesar-alexandrino-costa-202100269/')}>
          <Ionicons name="logo-linkedin" size={24} color="white" />
        </TouchableOpacity>
      </View>
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
    description: {
      fontSize: 14,
      color: '#ccc',
      textAlign: 'center',
      marginBottom: 15,
    },
    contactButtons: {
      flexDirection: 'row',
      gap: 10,
    },
    button: {
      padding: 10,
      borderRadius: 10,
    },
  });

export default CartaoApresentacao