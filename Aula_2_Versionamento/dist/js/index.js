"use strict";
/*

Exercício:
Considere um sistema de cadastro de usuários onde precisamos armazenar informações sobre os usuários.
Vamos criar variáveis e objetos para representar diferentes tipos de dados relacionados a um usuário.

1- Crie as seguintes variáveis primitivas:
    nomeCompleto: do tipo string, representando o nome completo de um usuário.
    idade: do tipo number, representando a idade do usuário.
    email: do tipo string, representando o endereço de e-mail do usuário.
    isAtivo: do tipo boolean, representando se o usuário está ativo ou não.

*/
/*

2 -Crie um objeto usuario com as seguintes propriedades:

    nome: string, representando o primeiro nome do usuário.
    sobrenome: string, representando o sobrenome do usuário.
    idade: number, representando a idade do usuário.
    contato: objeto com as seguintes propriedades:
    email: string, representando o endereço de e-mail do usuário.
    telefone: string, representando o número de telefone do usuário (opcional).
    Em seguida, imprima todas as variáveis e propriedades do objeto usuario usando console.log.

*/
let usuario;
usuario = {
    nome: "Beatriz",
    sobrenome: "Oliveira",
    idade: 18,
    contato: {
        email: "aguiarbeatriz12ba@gmail.com",
        telefone: "234242353252",
    }
};
let contato1;
contato1 = {
    email: "aguiarbeatriz12ba@gmail.com",
    telefone: "78218316371238"
};
let user;
user = {
    nome: "Beatriz",
    sobrenome: "Oliveira",
    idade: 18,
    contato: {
        email: "aguiarbeatriz12ba@gmail.com",
        telefone: "2346246284284",
    }
};
