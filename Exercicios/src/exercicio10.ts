function fatorial(n:number):number {
    let fatorial:number = 1;

    for(let i = 0; i < n; i++ ) {
        fatorial *= (n-i);
    }

    return fatorial;
}

console.log(fatorial(5));
console.log(fatorial(4));
console.log(fatorial(6));
console.log(fatorial(10));