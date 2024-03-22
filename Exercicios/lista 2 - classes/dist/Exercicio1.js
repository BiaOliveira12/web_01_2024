"use strict";
class Carro {
    constructor(nome, cor, ano) {
        this._anoAtual = new Date().getFullYear();
        this._nome = nome;
        this._cor = cor;
        this._ano = ano;
    }
    get getNome() {
        return this._nome;
    }
    get getCor() {
        return this._cor;
    }
    get getAno() {
        return this._ano;
    }
    get getAnoAtual() {
        return this._anoAtual;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    set setCor(cor) {
        this._cor = cor;
    }
    set setAno(ano) {
        this._ano = ano;
    }
    calcularIdade() {
        return this._anoAtual - this._ano;
    }
}
let c1 = new Carro("Gol", "Branco", 2010);
console.log(c1.calcularIdade());