//inserir click
var btn = document.querySelector('#btn');

console.log(btn);

btn.addEventListener('click', function() {
    console.log('Clicou no botão');
    console.log(this);
    this.style.backgroundColor = 'red';

});

var title = document.querySelector('#title');

title.addEventListener('click', function() {
    console.log('Clicou no título');
    this.style.color = 'blue';
});

// double click
title.addEventListener('dblclick', function() {
    console.log('Clicou duas vezes no título');
    this.style.color = 'green';
});