import { View, Text, StyleSheet, TextInput, Button, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import React from 'react';

const LoginScreen = ({ navigation }) => {
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🔐Login</Text>
      <TextInput style={styles.input} placeholder='Digite seu nome' value={userName} onChangeText={setUserName}/>
      <TextInput style={styles.input} placeholder='Digite sua senha' secureTextEntry value={password} onChangeText={setPassword} />
      <Button title='Entrar' onPress={() => navigation.replace('Main')} />
      <Text style={styles.orText}>ou entre com</Text>
      <TouchableOpacity style={styles.socialButton}>
        <AntDesign name='google' size={24} color='white'/>
        <Text style={styles.socialText}>Entrar com Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={[styles.socialButton,styles.githubButton]}>
        <Ionicons name='logo-github' size={24} color='white'></Ionicons>
        <Text style={styles.socialText}>Entrar com Github</Text>
      </TouchableOpacity>


    </View>
  )
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20},
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
    input: { width: '100%', borderBottomWidth: 1, marginBottom: 20, padding: 8 },
    orText: { marginVertical: 20, fontSize: 16, color: '#555' },
    socialButton: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', padding: 10, backgroundColor: '#DB4437', borderRadius: 5, marginVertical: 5 },
    socialText: { color: 'white', fontSize: 16, marginLeft: 10 },
    githubButton: { backgroundColor: '#333' }
    })

export default LoginScreen