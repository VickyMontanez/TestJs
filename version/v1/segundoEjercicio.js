//Dado un número indicar si es par o impar y si es mayor de 10/
export const determinarNumero = (number) => {
  const esPar = number % 2 === 0;
  const esMayorQue10 = number > 10;

  switch (true) {
    case esPar && esMayorQue10:
      return "El número es par y mayor que 10";
    case esPar:
      return "El número es par y menor que 10";
    case esMayorQue10:
      return "El número es impar y mayor que 10";
    default:
      return "El número es impar y menor que 10";
  }
}