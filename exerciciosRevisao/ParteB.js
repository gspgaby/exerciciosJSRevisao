// //Parte B - Hora do Jogo!
// //Passe a expressão abaixo para Arrow Function e então use destructuring para pegar ​colors

// var getShirtsColorsAmount = function (company) {
//    colors = company.products.shirts.colors;
//    return colors.length;
// };

const getShirtsColorsAmount = company => {
    const {products:{shirts:{colors}}} = company;
    return colors.length
}

// //1 A partir do objeto abaixo, desestruture e utilize ​spread operator​ para instaciar uma variável que tenha apenas os dados de roupas que não são calças, ou seja, somente ​shirts e​ ​ socks
const clothes = {
    pants: { colors: ['black', 'blue'] },
    shirts: { colors: ['white', 'red'] },
    socks: { colors: ['beige', 'gray'] },
};

const {pants, ...shirtsAndSocks} = clothes;

// //2 Utilizando os dois arrays abaixo, desestruture cada array com spread para clonar todos itens menos o primeiro
const arr = [1, 2, 3];
const arr2 = [4, 5, 6];

const [, ...newArr] = arr;
const [, ...newArr2] = arr2;

// //3 A partir do objeto abaixo, retorne um array onde cada item é o nome completo de cada pessoa no array. Utilize arrow function.
 var persons = [
     { firstname: 'Malcom', lastname: 'Reynolds' },
     { firstname: 'Kaylee', lastname: 'Frye' },
     { firstname: 'Jayne', lastname: 'Cobb' },
];

let person1 = persons.map(person => {
    const {firstname, lastname} = person;
    return(`${firstname} ${lastname}`)
});

console.log(person1);
