// Taller JavaScript 2
/* 7.Programa que pida el ingreso del nombre y precio de un artículo y la cantidad que lleva el cliente.
 Mostrar lo que debe pagar el comprador en su factura.*/

export const myFactura =(articulos, precios, cantidades) => {
    let resultado = 0;
    for (let i = 0; i < articulos.length; i++) {
        resultado += precios[i] * cantidades[i];
    }
    const productos = { Producto: articulos.join(', '), Precio: precios.join(', '), Cantidad: cantidades.join(', ') };
    return `Su compra fue:\n${productos.Producto}\nPrecios: ${productos.Precio}\nCantidades: ${productos.Cantidad}\nSu total a pagar es: ${resultado}`;
} 