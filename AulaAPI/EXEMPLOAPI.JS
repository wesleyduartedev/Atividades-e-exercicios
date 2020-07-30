const axios = require('axios')
let urlApi = 'https://api.covid19api.com'
// axios é a biblioteca para acessar um endereço com métodos http
// get é o método que eu quero executar na api
// e 'https://api.covid19api.com' é a url que eu quero acessar a api
// axios.get('https://api.covid19api.com')
axios.get(urlApi)
  .then(respostaDaApi => {
    // consegui acessar a API e peguei os dados
    // os dados que eu peguei, independente do que for
    // eu salvei no respostaDaApi
    console.log(respostaDaApi.data)
  })