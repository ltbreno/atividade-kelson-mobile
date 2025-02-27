import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import LayoutResponsivo from './src/components/LayoutResponsivo'
import CartaoApresentacao from './src/components/CartaoApresentacao'
import CartaoPerfil from './src/components/CartaoPerfil'

const App = () => {
  return (
    <View style={styles.container}>
      {/*<LayoutResponsivo/>*/}
      <CartaoApresentacao/>
      <CartaoPerfil/>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centraliza verticalmente
    alignItems: 'center',      // Centraliza horizontalmente
    backgroundColor: '#6B6B6B', // Cor de fundo opcional
  },
});

export default App;
