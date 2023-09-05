import { operacion } from "../../../version/v1/quintoEjercicio";

describe("La función debe devolver una suma y resta si el primer número es mayor respecto al segundo, de lo contrario devolver una múltiplicación y division", ()=>{
    test("La función debe devolver una suma y resta si el primer número es mayor respecto al segundo",()=>{
        const app = operacion(7, 3)
        expect(app).toBe('La suma de los números es 10 y su resta es 4')
    });
    test("La función debe devolver una múltiplicación y division", ()=>{
        const app = operacion(7,8)
        expect(app).toBe('El producto de los números es 56 y su división es 0.875')
    })
})