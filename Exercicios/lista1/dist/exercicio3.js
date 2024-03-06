"use strict";
function mediaArit(...medias) {
    let soma = 0;
    for (let i = 0; i < medias.length; i++) {
        soma += medias[i];
    }
    let media = soma / medias.length;
    return media;
}
console.log(mediaArit(5, 6, 8, 9, 10).toFixed(2));
console.log(mediaArit(5, 4, 9, 10, 2, 6).toFixed(2));
console.log(mediaArit(5, 6, 8, 9, 10, 8).toFixed(2));
console.log(mediaArit(5, 6, 3, 1, 10, 10, 8).toFixed(2));
console.log(mediaArit(5, 6, 8, 9, 4, 10).toFixed(2));
console.log(mediaArit(5, 6, 1, 2, 5, 6, 8, 9, 10).toFixed(2));