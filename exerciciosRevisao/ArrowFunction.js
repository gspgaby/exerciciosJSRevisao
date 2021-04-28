//Transforme as funções declarativas abaixo em Arrow Functions
// 1 const upperName = function (name) {
  //return name.toUpperCase();
//};

const upperName = (name)=> name.toUpperCase()
console.log(upperName('gabriella'))

// 2 function myFunction(p1, p2) {
  // return p1 * p2;
// }

const produto = (p1,p2)=> p1*p2
console.log(produto(56,456))

// function toCelsius(fahrenheit) {
  // return (5 / 9) * (fahrenheit - 32);
// }

const toCelsius = (fahrenheit) => (5/9) * (fahrenheit -32)
console.log(toCelsius(56))