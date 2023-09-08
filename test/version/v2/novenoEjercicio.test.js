import { atletas } from "../../../version/v2/novenoEjercicio"
const nombres1 = ["Atleta1", "Atleta2", "Atleta3"];
const saltos1 = [14.5, 10.0, 8.2];

const nombres2 = ["Atleta1", "Atleta2", "Atleta3"];
const saltos2 = [14.5, 15.6, 15.2];

describe("La función debe la atleta que ganó y si la atleta rompió el record", () => {
    test("La función debe la atleta que ganó y si la atleta rompió el record", () => {
        const app = atletas(nombres1, saltos1)
        expect(app).toBe(`La Atleta CAMPEONA es Atleta1 con una marca de salto de 14.5`)
    });
    test("La función debe la atleta que ganó y si la atleta rompió el record", () => {
        const app = atletas(nombres2, saltos2)
        expect(app).toBe(`La Atleta CAMPEONA es Atleta2 con una marca de salto de 15.6`)
    })
})