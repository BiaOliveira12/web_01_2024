class Calculador {
  private _valor1 : number;
  private _valor2 : number;

  constructor(valor1:number, valor2:number) {
      if(valor1 == 0 || valor2 == 0) {
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

  set setValor1(valor:number) {
      this._valor1 = valor;
  }

  set setValor2(valor:number) {
      this._valor2 = valor;
  }


  somar() : number {
      return this._valor1 + this._valor2;
  }

  subtrair() : number {
      return this._valor1 - this._valor2;
  }

  multiplicar() : number {
      return this._valor1 * this._valor2;
  }

  dividir() : number {
      return this._valor1 / this._valor2;    
  }

  calcularPorcentagem() : number {
      return (this._valor1 / this._valor2) * 100;
  }

}

let calculador : Calculadora = new Calculadora(15,5);

console.log(calculadora.somar());
console.log(calculadora.subtrair());
console.log(calculadora.multiplicar());
console.log(calculadora.dividir());
console.log(calculadora.calcularPorcentagem());