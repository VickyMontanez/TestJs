//4. Construir el algoritmo que solicite el nombre y edad de 3 personas y determine el nombre de la persona con mayor edad.

export const personas = (n1, e1, n2, e2, n3, e3) => {
    const nombres = [n1, n2, n3];
    const edades = [e1, e2, e3];
    let indice = edades.indexOf(Math.max(...edades));
    let mayor = Math.max(...edades);
  
    indice = edades.indexOf(Math.max(...edades));
    mayor = Math.max(...edades);
    return `La persona con mayor edad es ${nombres[indice]} con ${mayor} años`
};
  