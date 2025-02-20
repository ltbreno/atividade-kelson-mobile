import { View, Text, TextInput, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Exercicio3 = () => {
  const [texto, setTexto] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{texto}</Text>
      <TextInput
        style={styles.input}
        placeholder="Digite algo..."
        value={texto}
        onChangeText={setTexto}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%', 
    margin: 20,
    alignItems: 'center',
    marginBottom: 1,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    width: '100%', 
  },
  text: {
    fontSize: 18,
    marginBottom: 20,
    color: '#333',
  },
});

export default Exercicio3;