"use strict";
function somaPar(...pares) {
    let soma = 0;
    for (let i = 0; i < pares.length; i++) {
        if (pares[i] % 2 == 0) {
            soma += pares[i];
        }
    }
    return soma;
}
console.log(somaPar(1, 2, 6, 3, 8, 10));