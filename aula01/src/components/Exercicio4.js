import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import React, { useState } from 'react';

const Exercicio3 = () => {
  const [inputText, setInputText] = useState('');
  const [itens, setItens] = useState([]);

  const handleInputChange = (text) => {
    setInputText(text);
    const novosItens = text.split(',').map(item => item.trim()).filter(item => item.length > 0);
    setItens(novosItens);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite os itens separados por vírgulas"
        value={inputText}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={itens}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%', // Define uma largura fixa para o container
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    margin: 20,
    width: '100%', 
  },
  item: {
    padding: 10,
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Exercicio3;