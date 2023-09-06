import { procesarEstudiantes } from "../../../version/v2/sextoEjercicio";

const estudiante1 = { nombre: 'Juan', sexo: 'M', nota: [85, 90, 78] };
const estudiante2 = { nombre: 'Maria', sexo: 'F', nota: [92, 88, 96] };
const estudiante3 = { nombre: 'Pedro', sexo: 'M', nota: [89, 76, 85] };

describe("La función debe el nombre del estudiante con la nota más alta y más baja, además de la cantidad de hombre sy mujeres", () => {
    test("La función debe devolver el nombre del estudiante con la nota más alta", () => {
        const app = procesarEstudiantes(estudiante1, estudiante2, estudiante3)
        expect(app).toEqual({
            bestStudent: "El con la nota más alta es Maria con 92",
        })
    })
})