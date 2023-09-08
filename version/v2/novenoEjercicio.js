// Taller JavaScript 2
/* 9.
N atletas han pasado a finales en salto triple en los juegos
olímpicos femenino de 2022. Diseñe un programa que pida por
teclado los nombres de cada atleta finalista y a su vez, sus
marcas del salto en metros. Informar el nombre de la atleta
campeona que se quede con la medalla de oro y si rompió
récord, reportar el pago que será de 500 millones. El récord
esta en 15,50 metros. */

export const atletas = (nombre, salto) => {
    let mayor = Math.max(...salto);
    let nombremax = nombre[salto.indexOf(mayor)];
    let record = null;

    for (let i = 0; i < salto.length; i++) {
        if (salto[i] > 15.50) {
            record = `La Atleta que rompió el récord es ${nombre[i]} GANA 500 MILLONES!`;
            break;
        }
    }

    switch (true) {
        case mayor && record:
            return record;
        default:
            return `La Atleta CAMPEONA es ${nombremax} con una marca de salto de ${mayor}`;
    }
};