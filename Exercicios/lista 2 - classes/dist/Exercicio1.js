class Carro {
    constructor(modelo, anoFabricacao) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }

    getModelo() {
        return this.modelo;
    }

    setModelo(modelo) {
        this.modelo = modelo;
    }

    getAnoFabricacao() {
        return this.anoFabricacao;
    }

    setAnoFabricacao(anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoFabricacao;
    }
}

const meuCarro = new Carro("Fiat Uno", 2010);

console.log("Modelo: " + meuCarro.getModelo());
console.log("Ano de Fabricação: " + meuCarro.getAnoFabricacao());
console.log("Idade do Carro: " + meuCarro.calcularIdade() + " anos");