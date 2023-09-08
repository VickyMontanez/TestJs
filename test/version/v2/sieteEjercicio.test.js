import { myFactura } from "../../../version/v2/sieteEjercicio";

const articulos = ["Producto A", "Producto B", "Producto C"];
const precios = [1200, 5600, 8800];
const cantidades = [3, 2, 1]; 

describe("La función permite ingresar el nombres, precios y cantidades de los articulos y esta devuelve su factura o el total a pagar", ()=>{
    test("La función permite ingresar el nombres, precios y cantidades de los articulos y esta devuelve su factura o el total a pagar",()=>{
        const app = myFactura(articulos, precios, cantidades)
        expect(app).toBe(`Su compra fue:\nProducto A, Producto B, Producto C\nPrecios: 1200, 5600, 8800\nCantidades: 3, 2, 1\nSu total a pagar es: 23600`)
    })
})