import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Marcador({ victorias, derrotas }) {

    const total = victorias + derrotas
    let porcentajeVictorias = 0
    let porcentajeDerrotas = 0

    if (total > 0) {
        porcentajeVictorias = (victorias * 100) / total
        porcentajeDerrotas = (derrotas * 100) / total
    }

    return (
        <View style={styles.contenedor}>
            <Text style={styles.texto}>Victorias: {victorias} ({porcentajeVictorias}%)</Text>
            <Text style={styles.texto}>Derrotas: {derrotas} ({porcentajeDerrotas}%)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginTop: 10,
    },
    texto: {
        fontSize: 18,
    },
})
