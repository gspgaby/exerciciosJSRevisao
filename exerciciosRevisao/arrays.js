//Arrays e seus métodos
//1 A partir da variável abaixo e utilizando um método de array, retorne a raiz quadrada de todos os valores do array original em um novo array

var numbers = [4, 9, 16, 25];
var sqrtNumbers = numbers.map(Math.sqrt)
console.log(numbers, sqrtNumbers)


//2 A partir da variável abaixo e utilizando um método de array, multiplique todos os valores do array por 10. Utilize arrow function.

var numbers = [65, 44, 12, 4];
var multDez = numbers.map((num)=>{ return num * 10 })
console.log(numbers, multDez)


//3 A partir da variável abaixo retorne um array com valores de ​age​ (idade) maiores ou iguais a 18 com arrow function e filter

var ages = [32, 33, 16, 40];
var filterMaior18 = ages.filter((arr) => { return arr >= 18 })
console.log(filterMaior18)


//4 A partir do objeto abaixo, retorne somente os nomes dos objetos do tipo cachorro (​type: dog)​ com filter

data = [
    {
        name: 'Butters',
        age: 3,
        type: 'dog',
    },
    {
        name: 'Lizzy',
        age: 6,
        type: 'dog',
    },
    
    {
        name: 'Red',
        age: 1,
        type: 'cat',
    },
    {
        name: 'Joey',
        age: 3,
        type: 'dog',
    },
];

var filterDog = data.filter((type)=> { return data.type == 'dog' })
console.log(filterDog)

// // 5 Por fim, ainda utilizando o array acima, retorne a soma da idade de todos os cachorros (​type: dog)​

