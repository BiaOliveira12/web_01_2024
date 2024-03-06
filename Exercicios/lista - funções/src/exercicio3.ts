function mediaArit(...medias:number[]):number {
    let soma : number = 0;
    
    for(let i = 0; i < medias.length; i++) {
        soma += medias[i];
    }
    
    let media : number = soma / medias.length;
    return media;
}

console.log(mediaArit(5,6,8,9,10).toFixed(2));
console.log(mediaArit(5,4,9,10,2,6).toFixed(2));
console.log(mediaArit(5,6,8,9,10,8).toFixed(2));
console.log(mediaArit(5,6,3,1,10,10,8).toFixed(2));
console.log(mediaArit(5,6,8,9,4,10).toFixed(2));
console.log(mediaArit(5,6,1,2,5,6,8,9,10).toFixed(2));