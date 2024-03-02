"use strict";
function parOuImpar(numero) {
    if (numero % 2 == 0)
        return true;
    return false;
}
if (parOuImpar(10))
    console.log("É par");