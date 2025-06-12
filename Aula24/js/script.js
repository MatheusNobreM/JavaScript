var list = ['Laranja', 'Maçã', 'Pera', 'Uva', 'Banana'];

var listUl  = document.createElement('ul');

var body = document.getElementsByTagName('body');

//console.log(body[0]);

body[0].appendChild(listUl);

var listNoBody = document.getElementsByTagName('ul');

console.log(listNoBody[0]);

for (var i = 0; i < list.length; i++) {
    var liFor = document.createElement('li');
    var textoLi = document.createTextNode(list[i]);
    liFor.appendChild(textoLi);
    listNoBody[0].appendChild(liFor);
}