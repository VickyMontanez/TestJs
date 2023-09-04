/**. Construir el algoritmo para un programa que ingrese tres
notas de un alumno, si el promedio es menor o igual a 3.9
mostrar un mensaje "Estudie“, de lo contrario un mensaje que
diga "becado"
 */
export const calificarAlumno = (n1, n2, n3) => {
    const notas = [n1, n2, n3];
    if (notas.some((nota) => nota < 0 || nota > 5 || typeof nota !== "number")) {
      throw new Error("Las notas deben estar en el rango de 0 a 5 y ser números.");
    }
    const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
    if (promedio <= 3.9) {
      return "Estudie";
    } else {
      return "Becado";
    }
  };