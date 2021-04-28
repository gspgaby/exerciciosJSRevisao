//2. Faça fetch dos dados através da aPI (https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772) e retorne a ficha desta refeição com id, nome, área (país de origem), ingredientes (em uma única string) e as intruções.
//Formato:
//Nome: [nome]
//ID: [id]
//Região: [area]
//Ingredientes: [ingredientes (string única)]
//Instruções: [instruções]

const fetch = require('node-fetch')

async function buscarInfo() {
    const response = await fetch('https://www.themealdb.com/api/json/v1/1/lookup.php?i=52772')
    const dados = await response.json()
    return dados
}

buscarInfo()
    .then((dados) => {
        console.log(dados);
        const refeicoes = dados.meals
        refeicoes.forEach(refeicao => {
            const infoCompleta = {
                'Nome': `${refeicao.strMeal}`,
                'ID': `${refeicao.idMeal}`,
                'Regiao': `${refeicao.strArea}`,
                'Instrucoes': `${refeicao.strInstructions}`
            }
            console.log(infoCompleta);
        })
    })