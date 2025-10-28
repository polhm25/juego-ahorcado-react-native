import React from 'react'
import { Pressable, StyleSheet, Text } from 'react-native'

export default function Tecla({ letra, pulsarLetra, usada }) {

    return (
        <Pressable
            onPress={() => {
                if (!usada) {
                    pulsarLetra(letra)
                }
            }}
            style={[styles.contenedor, usada ? styles.contenedorDeshabilitado : styles.contenedor]}
            disabled={usada}
        >
            <Text style={[styles.texto, usada ? styles.textoDeshabilitado : styles.texto]}>{letra}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        width: 40,
        height: 40,
        borderWidth: 1,
        padding: 5,
        borderRadius: 6,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 2,
    },
    contenedorDeshabilitado: {
        borderColor: '#999',
        backgroundColor: '#d3d3d3',
    },
    texto: {
        fontSize: 22,
        color: '#333',
        fontWeight: '600',
    },
    textoDeshabilitado: {
        color: '#999',
    },
})
