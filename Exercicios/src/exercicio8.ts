function reverteS(texto:string): string {
    let separa:string[] = texto.split("");
    let junta:string = separa.reverse().join("");
    return junta;
  }
  
  
  console.log(reverteS('beatriz'));