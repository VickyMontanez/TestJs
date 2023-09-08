// Taller JavaScript 2
/* 10.Desarrolle un programa cíclico que capture un dato
numérico cada vez, y los vaya acumulando. El programa se
detiene cuando el usuario digita un cero. El programa debe
mostrar: LA SUMATORIA DE LOS VALORES, EL VALOR DEL
PROMEDIO, CUÁNTOS VALORES FUERON DIGITADOS, MAYOR
VALOR Y MENOR VALOR. */

export const analizarNumeros = (...valores) => {
    if (valores.length === 0) {
        return "No se proporcionaron valores para analizar.";
    }

    let suma = 0;
    let mayor = valores[0];
    let menor = valores[0];
    let cantidad = 0;

    for (const valor of valores) {
        if (valor === 0) {
            break;
        }
        suma += valor;
        cantidad++;
        if (valor > mayor) {
            mayor = valor;
        }
        if (valor < menor) {
            menor = valor;
        }
    }

    if (cantidad === 0) {
        return "No se proporcionaron números válidos para analizar.";
    }

    const promedio = suma / cantidad;

    return `
        Suma de los valores: ${suma}
        Promedio de los valores: ${promedio}
        Cantidad de valores: ${cantidad}
        Mayor valor: ${mayor}
        Menor valor: ${menor}`;
}