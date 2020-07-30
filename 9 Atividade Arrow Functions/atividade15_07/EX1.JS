//1. (OBRIGATÓRIO) Faça uma arrow function que retorne a soma de dois parâmetros em
//uma única linha.
var  readlineSync = require('readline-sync');
let numero1 = readlineSync.questionInt('Digite o primeiro numero:  ');
 let numero2 = readlineSync.questionInt('Digite o segundo numero:  ');

let soma = a => numero1 + numero2 ;
console.log(`A SOMA É: ${soma()} `);




