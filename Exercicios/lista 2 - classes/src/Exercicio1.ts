class Car {
    private modelo: string;
    private anoFabricacao: number;

    constructor(modelo: string, anoFabricacao: number) {
        this.modelo = modelo;
        this.anoFabricacao = anoFabricacao;
    }

    getModelo(): string {
        return this.modelo;
    }

    setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    getAnoFabricacao(): number {
        return this.anoFabricacao;
    }

    setAnoFabricacao(anoFabricacao: number): void {
        this.anoFabricacao = anoFabricacao;
    }

    calcularIdade(): number {
        const anoAtual: number = new Date().getFullYear();
        return anoAtual - this.anoFabricacao;
    }
}

const meuCar: Carro = new Carro("Fiat Uno", 2010);

console.log("Modelo: " + meuCarro.getModelo());
console.log("Ano de Fabricação: " + meuCarro.getAnoFabricacao());
console.log("Idade do Carro: " + meuCarro.calcularIdade() + " anos");