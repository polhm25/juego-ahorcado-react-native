import PALABRAS from '../data/palabras.json'

export function getCategorias() {
  return Object.keys(PALABRAS)
}

export function generarPalabraAleatoria() {
  const categorias = getCategorias()
  const categoriaAleatoria = categorias[Math.floor(Math.random() * categorias.length)]
  const palabrasDeCategoria = PALABRAS[categoriaAleatoria]
  const palabraAleatoria = palabrasDeCategoria[Math.floor(Math.random() * palabrasDeCategoria.length)]

  return {
    categoria: categoriaAleatoria,
    palabra: palabraAleatoria.toUpperCase()
  }
}

export function generarDisplayInicial(palabra) {
  let display = ''
  for (let i = 0; i < palabra.length; i++) {
    display = display + '-'
  }
  return display
}

export function realizarIntento(palabra, display, letra) {
  let nuevoDisplay = ''
  let actualizado = false

  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === letra) {
      nuevoDisplay = nuevoDisplay + letra
      actualizado = true
    } else {
      nuevoDisplay = nuevoDisplay + display[i]
    }
  }

  return {
    actualizado: actualizado,
    display: nuevoDisplay
  }
}
