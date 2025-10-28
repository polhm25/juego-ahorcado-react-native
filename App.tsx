import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Horca from './components/Horca'
import Teclado from './components/Teclado'
import Marcador from './components/Marcador'
import { generarPalabraAleatoria, generarDisplayInicial, realizarIntento } from './helpers/Funciones'

export default function App() {
  const [vidas, setVidas] = useState(6)
  const [display, setDisplay] = useState('')
  const [categoria, setCategoria] = useState('')
  const [palabra, setPalabra] = useState('')
  const [letrasUsadas, setLetrasUsadas] = useState('')
  const [victorias, setVictorias] = useState(0)
  const [derrotas, setDerrotas] = useState(0)

  useEffect(() => {
    inicializarPartida()
  }, [])

  function inicializarPartida() {
    const palabraObj = generarPalabraAleatoria()
    setPalabra(palabraObj.palabra)
    setCategoria(palabraObj.categoria)
    setVidas(6)
    setDisplay(generarDisplayInicial(palabraObj.palabra))
    setLetrasUsadas('')
  }

  function victoria() {
    setVictorias(victorias + 1)
    Alert.alert('¡Ganaste!', 'Felicidades, adivinaste la palabra', [
      { text: 'Nueva partida', onPress: inicializarPartida }
    ])
  }

  function derrota() {
    setDerrotas(derrotas + 1)
    Alert.alert('¡Perdiste!', 'La palabra era: ' + palabra, [
      { text: 'Nueva partida', onPress: inicializarPartida }
    ])
  }

  function pulsarLetra(letra) {
    setLetrasUsadas(letrasUsadas + letra)

    const resultado = realizarIntento(palabra, display, letra)

    if (resultado.actualizado) {
      setDisplay(resultado.display)

      if (resultado.display === palabra) {
        victoria()
      }
    } else {
      const nuevasVidas = vidas - 1
      setVidas(nuevasVidas)

      if (nuevasVidas === 0) {
        derrota()
      }
    }
  }

  return (
    <SafeAreaView style={styles.contenedor}>
      <Text style={styles.titulo}>{categoria}</Text>

      <Horca vidas={vidas} />

      <Text style={styles.ejemplo}>{display}</Text>

      <Teclado
        pulsarLetra={pulsarLetra}
        letrasUsadas={letrasUsadas}
      />

      <Marcador victorias={victorias} derrotas={derrotas} />
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
    fontSize: 42,
    letterSpacing: 10,
    marginVertical: 14,
    color: '#1A1A1A',
    fontWeight: 'bold',
  },
})
