//(OBRIGATÓRIO) A partir do objeto
//const carro = {
//nome: ‘carro’,
//valor: 100.00
//}
//Faça uma arrow function que faça um destruct no parâmetro desse objeto e imprima na
//tela apenas o nome do carro.


const veiculo = {
    nome: 'Onix',
    valor: 100.00
    }
   const apenasNomedocarro = ({nome}) => nome;
   let apenasValordoCarro =({valor}) => valor;
   
  console.log(apenasNomedocarro(veiculo));
  console.log(apenasValordoCarro(veiculo));