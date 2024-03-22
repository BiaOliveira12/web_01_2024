class Car {
    private _nome:string;
    private _cor:string;
    private _ano:number;
    private _anoAtual:number = new Date().getFullYear();

    constructor(nome:string, cor:string, ano:number) {
        this._nome = nome;
        this._cor = cor;
        this._ano = ano;   
    }

    get getNome():string {
        return this._nome;
    }

    get getCor():string {
        return this._cor;
    }

    get getAno():number {
        return this._ano;
    }

    get getAnoAtual():number {
        return this._anoAtual;
    }

    set setNome(nome:string) {
        this._nome = nome;
    }
    
    set setCor(cor:string) {
        this._cor = cor;
    }

    set setAno(ano:number) {
        this._ano = ano;
    }


    calcularIdade():number {
        return this._anoAtual - this._ano;
    }
    

}

let c : Carro = new Carro("Gol", "Branco", 2010);
console.log(c1.calcularIdade());