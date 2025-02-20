import { View, Text, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Exercicio2 = () => {
  const [contador, setContador] = useState(0);

  function incrementar() {
    setContador(contador + 1);
  }

  function decrementar() {
    setContador(contador - 1);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.contador}>{contador}</Text>
      <View style={styles.botoesContainer}>
        <View style={styles.botao}>
          <Button title="Decrementar" onPress={decrementar} color="#DC3545" />
        </View>
        <View style={styles.botao}>
          <Button title="Incrementar" onPress={incrementar} color="#007BFF" />
        </View>
      </View>
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
  },
  contador: {
    fontSize: 35,
    fontWeight: 'bold',
    color: '#333',
    margin: 20,
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
  botao: {
    flex: 1,
    marginHorizontal: 5,
  },
});

export default Exercicio2;