import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const Exercicio1 = ({ nome }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Olá, {nome}!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 1,
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
});

export default Exercicio1;