// criar um elemento
const elemento = document.createElement('h3');
elemento.classList = "testando-classe";

var texto = document.createTextNode('Texto do elemento trocado');

elemento.appendChild(texto);

console.log(elemento);

//selecionar o elemento q quero trocar
var titulo = document.querySelector('h1');

console.log(titulo);

//selecionar o elemento pai
var pai = titulo.parentNode;
console.log(pai);
//trocar os elementos
pai.replaceChild(elemento, titulo);