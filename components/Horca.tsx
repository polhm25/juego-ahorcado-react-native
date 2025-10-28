import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Image } from 'expo-image'

export default function Horca({ vidas }) {

  const imagenes = [
    require('../assets/ahorcado_0.png'),
    require('../assets/ahorcado_1.png'),
    require('../assets/ahorcado_2.png'),
    require('../assets/ahorcado_3.png'),
    require('../assets/ahorcado_4.png'),
    require('../assets/ahorcado_5.png'),
    require('../assets/ahorcado_6.png'),
  ]

  return (
    <View style={styles.contenedor}>
      <Image 
        source={imagenes[vidas]} 
        contentFit='contain' 
        style={styles.imagen} 
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    alignItems: 'center',
  },
  imagen: {
    width: '70%',
    aspectRatio: 1,
  },
})
