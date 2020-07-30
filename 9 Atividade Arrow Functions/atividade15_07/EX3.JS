//(OBRIGATÓRIO) Desenvolva uma arrow function que receba quatro parâmetros, sendo
//NOME, DIA, MÊS e ANO DE NASCIMENTO e retorne a idade da pessoa, imprimindo
//na tela o Nome informado, a data de seu nascimento e a idade calculada dentro da
//arrow function.
var ano_atual = new Date().getFullYear();
let rn=require('readline-sync');
let rs=require('readline-sync');
let ra=require('readline-sync');
let rt=require('readline-sync');

let nome=rn.question('Informe seu nome: ');
let dia=rs.question('Informe o dia de seu nascimento:  ');
let mes=ra.question('Informe seu  mes de nascimento :  ');
let ano=rt.question('Informe seu  ano de nascimento :  ');

      let ImprimaInt =(nome,dia,mes,ano) => `Seu nome é: ${nome}  ` + `Seu dia de nascimento é: ${dia} `+ ` E seu mes nascimento é: ${mes} `+
       `Seu ano de nascimento é: ${ano}`+ `Sua idade é  : ${(Calculodeidade())}` ;
    
        let Calculodeidade = a => (ano_atual-ano); 
    
    
      
    
     


    
    console.log(ImprimaInt(nome,dia,mes,ano));
