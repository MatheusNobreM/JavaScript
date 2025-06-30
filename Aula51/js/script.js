// evento mouseover
var title = document.querySelector('h1');

title.addEventListener('mouseover', function() {
    console.log('Mouse está sobre o título');
    this.style.color = 'red';
});

// evento mouseout
title.addEventListener('mouseout', function() {
    console.log('Mouse saiu do título');
    this.style.backgroundColor = 'black';
});
