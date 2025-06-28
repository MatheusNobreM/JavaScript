//toLowerCase e toUpperCase

var frase = '   Olá, Mundo!   ';
 
var fraseCaixaUpper = frase.toUpperCase();

console.log(frase.toLowerCase()); // '   olá, mundo!   '
console.log(frase.toUpperCase()); // '   OLÁ, MUNDO!   '

//trim
console.log(frase.trim()); // 'Olá, Mundo!'

//trimStart e trimEnd
console.log(frase.trimStart()); // 'Olá, Mundo!   '
console.log(frase.trimEnd()); // '   Olá, Mundo!'

//split
var fraseSplit = frase.split(' ');

console.log(fraseSplit); // ['   ', 'Olá,', 'Mundo!', '   ']

