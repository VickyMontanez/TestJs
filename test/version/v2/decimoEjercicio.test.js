import { analizarNumeros } from "../../../version/v2/decimoEjercicio";


describe("La función almacena datos hasta que se le entra 0, se acumulan y con ellos, se da su sumatoria, su promedio, la cantidad de valores digitados y el mayor, el menor", () => {
    test("La función termina sin pasarle más numeros (parametros), acumula los datos, se hacer la suma, el promedio, la cantidad de valores digitados y el mayor y el menor", () => {
        const app = analizarNumeros(5, 10, 15, 20, 25);
        expect(app).toBe(`
        Suma de los valores: 75
        Promedio de los valores: 15
        Cantidad de valores: 5
        Mayor valor: 25
        Menor valor: 5`)
    });
    test("La función termina al colocarle 0, con los datos anteriores almacenados se hacer la suma, el promedio, la cantidad de valores digitados y el mayor y el menor", () => {
        const app = analizarNumeros(5, 10, 0, 15, 20, 25);
        expect(app).toBe(`
        Suma de los valores: 15
        Promedio de los valores: 7.5
        Cantidad de valores: 2
        Mayor valor: 10
        Menor valor: 5`)
    });
})