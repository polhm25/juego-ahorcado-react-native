import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Horca from './components/Horca'
import Teclado from './components/Teclado'
import Marcador from './components/Marcador'

export default function App() {
  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>Juego del Ahorcado</Text>

      
      <Horca vidas={3} />

      
      <Text style={styles.ejemplo}>_ _ _ _ _</Text>

      
      <Teclado 
        pulsarLetra={(letra) => console.log('Letra pulsada:', letra)} 
        letrasUsadas={'AEIOU'} 
      />

      
      <Marcador victorias={2} derrotas={1} />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  titulo: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  ejemplo: {
    fontSize: 24,
    letterSpacing: 2,
    marginVertical: 10,
  },
})
