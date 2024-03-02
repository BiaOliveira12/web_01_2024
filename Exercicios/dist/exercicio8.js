"use strict";
function reverteS(texto) {
    let separa = texto.split("");
    let junta = separa.reverse().join("");
    return junta;
}
console.log(reverteS('beatriz'));