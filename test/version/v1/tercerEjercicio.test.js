import { voltaje } from "../../../version/v1/tercerEjercicio";

describe("La función debe devolver el voltaje en 'number' o si el voltaje no puede ser calculado", ()=>{
    test("La función debe devolver el voltaje en 'number'", ()=>{
        const app = voltaje(3, 5);
        expect(typeof app).toBe("number")
    });
    test("La función debe devolver que el voltaje no puede ser calculado", ()=>{
        const app = voltaje(2,0);
        expect(app).toBe("El voltaje no puede ser calculado")
    })
})