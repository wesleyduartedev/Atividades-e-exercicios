/*(OBRIGATÓRIO) Crie uma aplicação em JS que receba um nome e uma idade do
usuário e crie um novo usuário com o nome e a idade fornecida e o imprima na tela(ex.:
"{nome: 'Italo', idade: 22}"). Este objeto deve ser criado usando uma classe.*/


var rs = require('readline-sync');

class Usuario {
    constructor (){
        this.nome = rs.question('Digite seu nome: ');
        this.idade = rs.question('Digite sua idade: ');

    }
  
}

const usuarioQualquer = new Usuario();

console.log(usuarioQualquer);
//console.log( `Nome do usuário é: ${usuarioQualquer}`);