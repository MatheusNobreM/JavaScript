var titulo = document.querySelector('#title');

titulo.setAttribute("class", "testando-atributo");

console.log(titulo);

var btn = document.querySelector('#button');

btn.setAttribute("disabled", "disabled");

// remover atributo

var lista = document.querySelector('#lista');

lista.removeAttribute("id");
