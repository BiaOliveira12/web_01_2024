function NumMaior(...numeros : number[]):number {
    let maior : number = 0;
    for(let i = 0; i < numeros.length; i++) {
        if(numeros[i] > maior) {
            maior = numeros[i];
        }
    }

    return maior;
}

console.log(NumMaior(10,5,25,35,68,16));