import { area } from "../../../version/v2/octavoEjercicio";

let cuadradoLado = 3;
let rectAltura = 2;
let rectBase = 9;

describe("La función debe devolver el perimetro de un cuadrado segun  su lado y el area de un rectangulo segun la base y la altura", () => {
    test("La función debe devolver el perimetro de un cuadrado segun  su lado y el area de un rectangulo segun la base y la altura", () => {
        const app = area(cuadradoLado, rectBase, rectAltura)
        expect(app).toBe(`El perimetro del Cuadrado es 12, y el area del Rectangulo es 18`)
    })
})