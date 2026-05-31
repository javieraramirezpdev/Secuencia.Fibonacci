//Mostrar en consola los números del 1 al 1000, indicando pares e impares.
let fibonacci = [0, 1];

while (true) {
    let siguiente = fibonacci[fibonacci.length - 1] + fibonacci[fibonacci.length - 2];
    if (siguiente > 1000) {
        break;
    }   
    fibonacci.push(siguiente);
}

console.log("Secuencia de Fibonacci entre 0 y 1000:");
console.log(fibonacci);

console.log("Números pares entre 0 y 1000:");
console.log(fibonacci.filter(num => num % 2 === 0));

console.log("Números impares entre 0 y 1000:");
console.log(fibonacci.filter(num => num % 2 !== 0));
