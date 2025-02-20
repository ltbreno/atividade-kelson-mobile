import { View, ScrollView, StyleSheet } from 'react-native';
import React from 'react';


import Exercicio2 from './src/components/Exercicio2';
import Exercicio3 from './src/components/Exercicio3';
import Exercicio4 from './src/components/Exercicio4';
import Exercicio1 from './src/components/Exercicio1';

const App = () => {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
      <View style={styles.exercicio}>
          <Exercicio1 nome="Julio"/>
        </View>
        <View style={styles.exercicio}>
          <Exercicio2 />
        </View>
        <View style={styles.exercicio}>
          <Exercicio3 />
        </View>
        <View style={styles.exercicio}>
          <Exercicio4 />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    width: '100%', 
  },
  exercicio: {
    width: '100%',
    borderBottomWidth: 1, 
    borderBottomColor: '#ccc',
    paddingBottom: 20,
    marginBottom: 10,
  },
});

export default App;