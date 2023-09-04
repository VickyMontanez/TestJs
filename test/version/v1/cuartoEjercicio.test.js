import { personas } from "../../../version/v1/cuartoEjercicio";

describe("La función debe devolver el nombre de la persona con mayor edad", ()=>{
    test("La función debe devolver el nombre de la persona con mayor edad", ()=>{
        const app = personas('Juana', 23, "Maria", 97, "Pablo", 3)
        expect(app).toBe("La persona con mayor edad es Maria con 97 años")
    })
})