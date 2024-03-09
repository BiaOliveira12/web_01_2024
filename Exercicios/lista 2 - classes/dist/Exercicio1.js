class Carro {
    constructor(modelo, anoFabricacao) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }

    // Getter para o modelo
    getModelo() {
        return this.modelo;
    }

    // Setter para o modelo
    setModelo(modelo) {
        this.modelo = modelo;
    }

    // Getter para o ano de fabricação
    getAnoFabricacao() {
        return this.anoFabricacao;
    }

    // Setter para o ano de fabricação
    setAnoFabricacao(anoFabricacao) {
        this.anoFabricacao = anoFabricacao;
    }

    // Método para calcular a idade do carro com base no ano atual
    calcularIdade() {
        const anoAtual = new Date().getFullYear();
        return anoAtual - this.anoFabricacao;
    }
}

// Criando uma instância de Carro
const meuCarro = new Carro("Fiat Uno", 2010);

// Exibindo informações do carro
console.log("Modelo: " + meuCarro.getModelo());
console.log("Ano de Fabricação: " + meuCarro.getAnoFabricacao());
console.log("Idade do Carro: " + meuCarro.calcularIdade() + " anos");