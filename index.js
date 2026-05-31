// EJERCICIO 1
// Fibonacci entre 0 y 1000

function generarFibonacciHasta(limite) {
    let serie = [0, 1];
    let siguiente = 1;

    while (siguiente <= limite) {
        serie.push(siguiente);

        siguiente =
            serie[serie.length - 1] +
            serie[serie.length - 2];
    }

    return serie;
}

const fibonacci = generarFibonacciHasta(1000);

console.log("===== EJERCICIO 1 =====");

// a) Secuencia completa
console.log("Secuencia Fibonacci:");
console.log(fibonacci);

// b) Números pares
const pares = fibonacci.filter(numero => numero % 2 === 0);

console.log("Números pares:");
console.log(pares);

// c) Números impares
const impares = fibonacci.filter(numero => numero % 2 !== 0);

console.log("Números impares:");
console.log(impares);

// EJERCICIO 2
// Arreglo de strings en mayúsculas

console.log("===== EJERCICIO 2 =====");

let pokemon = [
    'Pikachu',
    'Charmander',
    'Bulbasaur',
    'Squirtle'
];

const pokemonMayusculas = pokemon.map(
    nombre => nombre.toUpperCase()
);

console.log("Pokémon originales:");
console.log(pokemon);

console.log("Pokémon en mayúsculas:");
console.log(pokemonMayusculas);

// EJERCICIO 3
// Pokémon tipo fuego

console.log("===== EJERCICIO 3 =====");

let pokemones = [
    {
        nombre: 'Pikachu',
        tipo: 'Electrico'
    },
    {
        nombre: 'Charmander',
        tipo: 'Fuego'
    },
    {
        nombre: 'Bulbasaur',
        tipo: 'Planta'
    },
    {
        nombre: 'Squirtle',
        tipo: 'Agua'
    },
    {
        nombre: 'Charmeleon',
        tipo: 'Fuego'
    },
    {
        nombre: 'Weedle',
        tipo: 'Bicho'
    },
    {
        nombre: 'Charizard',
        tipo: 'Fuego'
    }
];

const pokemonFuego = pokemones.filter(
    pokemon => pokemon.tipo === 'Fuego'
);

console.log("Pokémon tipo fuego:");
console.log(pokemonFuego);
