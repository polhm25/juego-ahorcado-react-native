import React from 'react'
import { StyleSheet, View } from 'react-native'
import Tecla from './Tecla'

export default function Teclado({ pulsarLetra, letrasUsadas }) {

    const letras = [
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
        'N', 'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
    ]

    return (
        <View style={styles.contenedor}>
            {letras.map((letra) => (
                <Tecla
                    key={letra}
                    letra={letra}
                    pulsarLetra={pulsarLetra}
                    usada={letrasUsadas.includes(letra)}
                />
            ))}
        </View>
    )
}

const styles = StyleSheet.create({
    contenedor: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        paddingHorizontal: 20,
    },
})
