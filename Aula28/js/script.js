// length

const nome = "Matheus";
console.log(nome.length); // 7

// indexOf
console.log((nome[2])); // t

console.log(nome.indexOf("t")); // 2

var frase = "O rato roeu a roupa do rei de Roma";

console.log(frase.indexOf("roeu")); // 7

//slice 
console.log(frase.slice(7, 11)); // roeu

//replace
console.log(frase.replace("roeu", "comeu")); // O rato comeu a roupa do rei de Roma

// lastIndexOf
console.log(nome.lastIndexOf("t")); // 3