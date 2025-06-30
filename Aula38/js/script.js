var novoParagrafo = document.createElement('p');

console.log(novoParagrafo);

var texto = document.createTextNode('Este é um novo parágrafo');

novoParagrafo.appendChild(texto);

var body = document.querySelector('body');
body.appendChild(novoParagrafo);

// inserir no container

var container = document.getElementById('container');
var el = document.createElement('span');

el.appendChild(document.createTextNode('Este é um novo span'));

console.log(el);

container.appendChild(el);

