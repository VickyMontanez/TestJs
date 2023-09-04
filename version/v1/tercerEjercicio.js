//3.Construir el algoritmo para determinar el voltaje de un circuito a partir de la resistencia y la intensidad de corriente.

export const voltaje = (r, i) => {
    if (r === 0 || i === 0) {
        return "El voltaje no puede ser calculado";
    }

    let volt = r * i;
    return volt;
};

