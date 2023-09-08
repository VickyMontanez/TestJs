// Taller JavaScript 2
/* 6.Construir el algoritmo en Javascript para un programa para cualquier cantidad de estudiantes que lea el nombre, el sexo y la nota definitiva y halle 
al estudiante con la mayor nota y al estudiante con la menor nota y cuantos eran hombres y cuantos mujeres. */

export const procesarEstudiantes = (nombre, genero, nota) => {
    let maxNota;
    let minNota
    let mejorEstudiante;
    let peorEstudiante;

    maxNota = Math.max(...nota);
    minNota = Math.min(...nota)
    mejorEstudiante = nombre[nota.indexOf(maxNota)];
    peorEstudiante = nombre[nota.indexOf(minNota)];

    let { hm, mj } = genero.reduce((count, val) => {
        if (val === "M") count.hm++; else if (val === "F") count.mj++;
        return count;
    },  { hm: 0, mj: 0 });

    if (genero.length !== hm + mj) {
        return "Ingresaste un valor para géneros incorrecto. Solo puedes ingresar 'M' o 'F'.";
    }


    let result = `El Estudiante con la nota más alta es ${mejorEstudiante} con ${maxNota}; El Estudiante con la nota más baja es ${peorEstudiante} con ${minNota}. La cantidad de hombres es ${hm} y de mujeres es ${mj}`;
    return result;
}