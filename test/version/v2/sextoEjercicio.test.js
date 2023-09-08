import { procesarEstudiantes } from "../../../version/v2/sextoEjercicio";

const nombres = ["Estudiante1", "Estudiante2", "Estudiante3"];
const generos = ["M", "F", "M"];
const notas = [85, 92, 78];

describe("La función debe el nombre del estudiante con la nota más alta y más baja, además de la cantidad de hombre y mujeres", () => {
    test("La función debe el nombre del estudiante con la nota más alta y más baja, además de la cantidad de hombre y mujeres", () => {
        const app = procesarEstudiantes(nombres, generos, notas)
        expect(app).toBe(`El Estudiante con la nota más alta es Estudiante2 con 92; El Estudiante con la nota más baja es Estudiante3 con 78. La cantidad de hombres es 2 y de mujeres es 1`)
    })
})