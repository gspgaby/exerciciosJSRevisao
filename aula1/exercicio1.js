//1. Escreva uma função soma que retorna a soma dos números de um array usando spread operator array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89];

const array = [1, 5, 23, 76, 87, 34, 687, 86, 98, 103, 489, 423, 89]
const somar = (array) => {
    let novoArray = [...array].reduce((acc, soma) => acc + soma)
    return novoArray
}

console.log(somar(array))
