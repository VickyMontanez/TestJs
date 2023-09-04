import  {calificarAlumno}  from "../../../version/v1/primerEjercicio.js";

describe("El promedio debe devolver Estudie o Becado", ()=>{
    test("La funcion nota debe devolver 'Estudie' si la nota es meno o igual a 3.9", ()=>{
        const app = calificarAlumno(4,1,2);
        expect(app).toBe("Estudie");
    });
    test("La funcion nota debe devolver 'Estudie' si la nota es meno o igual a 3.9", ()=>{
        const app = calificarAlumno(4,5,3);
        expect(app).toBe("Becado");
    });
});