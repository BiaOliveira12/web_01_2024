"use strict";
function inverteArray(...lista) {
    let novaLista = [];
    for (let i = lista.length - 1; i >= 0; i--) {
        novaLista.push(lista[i]);
    }
    return novaLista;
}
console.log(inverteArray(1, 2, 3, 4, 5));