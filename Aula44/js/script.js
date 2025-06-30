//propriedades document
console.log(document.title); //pega o titulo do documento
console.log(document.head); //pega o head do documento
console.log(document.body); //pega o body do documento

console.log(document.links); //pega todos os links do documento

document.links[0].href = 'https://www.google.com'; //altera o href do primeiro link
document.links[0].textContent = 'Face';

console.log(document.URL); //pega a url do documento

document.title = 'Aula 44'; //altera o titulo do documento