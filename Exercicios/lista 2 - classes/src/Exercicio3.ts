class Produt {
  private _nome:string;
  private _preco:number;
  private _quantidadeEmEstoque:number;


  constructor(nome:string, preco:number, quantidadeEmEstoque:number) {
      this._nome = nome;
      this._preco = preco;
      this._quantidadeEmEstoque = quantidadeEmEstoque;
  }

  get getNome():string {
      return this._nome;
  }

  get getpreco():number {
      return this._preco;
  }

  get getQuantidade():number {
      return this._quantidadeEmEstoque;
  }

  set setNome(nome:string) {
      this._nome = nome;
  }

  set setPreco(preco:number) {
      this._preco = preco;
  }

  set setQuantidade(quantidade:number) {
      this._quantidadeEmEstoque = quantidade;
  }

  calcularValorTotalEmEstoque():number {
      return this._preco * this._quantidadeEmEstoque;
  }

  reporEstoque(quantidade: number):void {
      this._quantidadeEmEstoque += quantidade;
      console.log(`Quantidade Atualizada: ${this._quantidadeEmEstoque} unidades.`);
  }

  vender(quantidade: number):void {
      if(quantidade > this._quantidadeEmEstoque) {
          throw new Error("Saldo insuficiente em estoque");
      } else {
          this._quantidadeEmEstoque -= quantidade;
      }

      console.log(`Quantidade Atualizada: ${this._quantidadeEmEstoque} unidades.`);
  }

}

let p:Produto = new Produto("TV", 2000, 10);
console.log(p1.calcularValorTotalEmEstoque());
p1.reporEstoque(10);
console.log(p1.calcularValorTotalEmEstoque());
p1.vender(8);
console.log(p1.calcularValorTotalEmEstoque());