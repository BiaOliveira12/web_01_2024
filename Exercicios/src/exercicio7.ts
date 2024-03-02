function valorAcrescido(valor : number, porcentagem : number) : number {
    return valor * (1 + (porcentagem / 100));
}


console.log(valorAcrescido(10,50));