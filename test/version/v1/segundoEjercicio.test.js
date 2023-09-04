import { determinarNumero } from "../../../version/v1/segundoEjercicio";

describe("La función debe devolver si es par o impar y si es mayor a 10", ()=>{
    test("La función debe devolver que es par mayor a 10", ()=>{
        const app = determinarNumero(40);
        expect(app).toBe("El número es par y mayor que 10")
    });
    test("La función debe devolver que es par menor a 10", ()=>{
        const app = determinarNumero(6);
        expect(app).toBe("El número es par y menor que 10")
    });
    test("La función debe devolver que es impar mayor a 10", ()=>{
        const app = determinarNumero(37);
        expect(app).toBe("El número es impar y mayor que 10")
    });
    test("La función debe devolver que es impar menor a 10", ()=>{
        const app = determinarNumero(3);
        expect(app).toBe("El número es impar y menor que 10")
    });
})