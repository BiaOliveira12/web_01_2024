function primoOuNao(n:number):boolean {
    let contador : number = 0;
    
    if(n > 1) {
        for(let i = 1; i <= n; i++) {
            if(n % i == 0) {
                contador++;
            }
        }

        if(contador > 2) {
            return false;
        }
    }
    
    
    return true;
}

console.log(primoOuNao(3));
console.log(primoOuNao(6));