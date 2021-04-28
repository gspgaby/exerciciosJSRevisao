//  3. Faça fetch dos dados através da API (https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood) e retorne uma lista(array) com os nomes dos primeiros 10 resultados.

const fetch = require('node-fetch')
const url = 'https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood'
const resultados = [];

const bucarDados = async () =>  {
    const response = await fetch(url)
    const dados = await response.json()
    return dados
}

bucarDados()
    .then(dados => {
        const refeicoes = dados.meals.slice(0, 10)
        const listaFinal = refeicoes.map(comida => comida.strMeal)
        resultados.push(listaFinal)
        console.log(resultados);
    })