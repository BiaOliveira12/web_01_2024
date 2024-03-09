function inverteArray(...lista:any):any {   
    let novaLista:any[] = [];
    
    for(let i = lista.length - 1; i >= 0; i--) {
        novaLista.push(lista[i]);
    }

    return novaLista;
}

console.log(inverteArray(1,2,3,4,5));