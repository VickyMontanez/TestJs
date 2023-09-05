// Taller JavaScript 2
//5. Construir el algoritmo que lea por teclado dos números, si el primero es mayor al segundo informar su suma y diferencia, en caso contrario, informar el producto y la división del primero respecto al segundo.


export const operacion = (n1, n2) => {
    switch (true) {
        case n1 > n2:
            const suma = n1 + n2;
            const resta = n1 - n2;
            return `La suma de los números es ${suma} y su resta es ${resta}`;
        default:
            const multi = n1 * n2;
            const divi = n1 / n2;
            return `El producto de los números es ${multi} y su división es ${divi}`;
    }
};