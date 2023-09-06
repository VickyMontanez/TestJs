// Taller JavaScript 2
/* 6.Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle 
al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres. */

export const procesarEstudiantes = (...estudiantes) => {
    let mj = 0;
    let hm = 0;
    let maxNota;
    let minNota
    let mejorEstudiante;
    let peorEstudiante;
    for (const std of estudiantes) {
        const { nombre = [], genero = [], nota = [] } = std;

        maxNota = Math.max(...nota);
        minNota = Math.min(...nota)
        mejorEstudiante = nombre[indexOf(maxNota)];
        peorEstudiante = nombre[indexOf(minNota)];

        genero.forEach((val) => {
            if (val === "M") {
                hm++;
            } else if (val === "F") {
                mj++;
            }
        });

        if (genero.length !== hm + mj) {
            return "Ingresaste un valor para géneros incorrecto. Solo puedes ingresar 'M' o 'F'.";
        }

    }

    return {
        bestStudent:`El con la nota más alta es ${mejorEstudiante} con ${maxNota}`,
        worseStudent : `El Estudiante con la nota más baja es ${peorEstudiante} con ${minNota}`,
        cantidad: `La cantidad de hombres es ${hm} y de mujeres es ${mj}`
    }
}