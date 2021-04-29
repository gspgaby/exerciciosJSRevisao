//Rest & Spread
 // 1 Utilizando um operador clone o objeto c​lothes
// const clothes = {
//    pants: { colors: ['black', 'blue'] },
//    shirts: { colors: ['white', 'red'] },
//    socks: { colors: ['beige', 'gray'] },
// };

const  clothesClone  = { ...clothes };
console.log(clothesClone)

//2 Novamente utilizando um operador, clone o objeto c​lothes​ acima e adicione a este clone um objeto ​shoes​ com propriedade​ colors: ['yellow', 'purple'] ​de modo que fique igual aos objetos p​ants, shirts ​e​ socks
 
const cloneClothes = { ...clothes, shoes:{colors:['yellow', 'purple']}}
console.log(cloneClothes)