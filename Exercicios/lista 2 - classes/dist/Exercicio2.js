"use strict";
class Calculadora {
    constructor(valor1, valor2) {
        if (valor1 == 0 || valor2 == 0) {
            throw new Error("O valor não pode ser 0");
        }
        this._valor1 = valor1;
        this._valor2 = valor2;
    }
    get getValor1() {
        return this._valor1;
    }
    get getValor2() {
        return this._valor2;
    }
    set setValor1(valor) {
        this._valor1 = valor;
    }
    set setValor2(valor) {
        this._valor2 = valor;
    }
    somar() {
        return this._valor1 + this._valor2;
    }
    subtrair() {
        return this._valor1 - this._valor2;
    }
    multiplicar() {
        return this._valor1 * this._valor2;
    }
    dividir() {
        return this._valor1 / this._valor2;
    }
    calcularPorcentagem() {
        return (this._valor1 / this._valor2) * 100;
    }
}
let calculadora = new Calculadora(15, 5);
console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());
console.log(calculadora.calcularPorcentagem());