"use strict";
class Produto {
    constructor(nome, preco, quantidadeEmEstoque) {
        this._nome = nome;
        this._preco = preco;
        this._quantidadeEmEstoque = quantidadeEmEstoque;
    }
    get getNome() {
        return this._nome;
    }
    get getpreco() {
        return this._preco;
    }
    get getQuantidade() {
        return this._quantidadeEmEstoque;
    }
    set setNome(nome) {
        this._nome = nome;
    }
    set setPreco(preco) {
        this._preco = preco;
    }
    set setQuantidade(quantidade) {
        this._quantidadeEmEstoque = quantidade;
    }
    calcularValorTotalEmEstoque() {
        return this._preco * this._quantidadeEmEstoque;
    }
    reporEstoque(quantidade) {
        this._quantidadeEmEstoque += quantidade;
        console.log(`Quantidade Atualizada: ${this._quantidadeEmEstoque} unidades.`);
    }
    vender(quantidade) {
        if (quantidade > this._quantidadeEmEstoque) {
            throw new Error("Saldo insuficiente em estoque");
        }
        else {
            this._quantidadeEmEstoque -= quantidade;
        }
        console.log(`Quantidade Atualizada: ${this._quantidadeEmEstoque} unidades.`);
    }
}
let p1 = new Produto("TV", 2000, 10);
console.log(p1.calcularValorTotalEmEstoque());
p1.reporEstoque(10);
console.log(p1.calcularValorTotalEmEstoque());
p1.vender(8);
console.log(p1.calcularValorTotalEmEstoque());