// let idade = 5;
// console.log(idade);

// const valorIngresso = 20;
// console.log(valorIngresso);

let pessoa = {
    nome: 'Rafael',
    idade: 30,
    estaAprovado: true,
    sobrenome: "de souza"
};

console.log(pessoa);

//Arrays

let familia = [29,'matheus',20444, false];

console.log(familia[2]);

// Verbo + Substantivo
let corSite = "azul";
function resetaCor(cor, tom){
    corSite = cor + " " + tom;
};

console.log(corSite);
resetaCor("vermelho", "escuro");
console.log(corSite);

// Realizar uma tarefa, não devolve nada

function dizerNome(){
    console.log('Matheus');
}

dizerNome();

function MultiplicarPorDois(valor){
    return valor*2;
}

console.log(MultiplicarPorDois(5));

let resultado = MultiplicarPorDois(7);

console.log(resultado);

// Operadores Aritiméticos(matemáticos)
// + , - , * , / , ** 

// ++ --
let idade= 19;

console.log(idade++);
console.log(idade);
console.log(++idade);

// Operadores Atribuição
let valorTecladoGamer = 100;
// valorTecladoGamer = valorTecladoGamer + valorTecladoGamer
valorTecladoGamer += valorTecladoGamer;
console.log(valorTecladoGamer);

// Igualdade estrita
console.log (1 === 1); // true
console.log('1' === 1); // false

//Igualdade solta
console.log (1 == 1); // true
console.log('1' == 1); // true

// Operador Ternário

// tem um cliente, 100 premium, comum?
let pontos = 200;
let tipo = pontos > 100 ? 'premium' : 'comum';
console.log(tipo);//        true        false

// Falsy:
// underfined
// null
// 0
// false
// '' - string vazia
// NaN - not a number

// Truthy:
// Tudo que não é falsy

let corPersonalizada = 'Vermelho';
let corPadrao = 'Azul';
let corPerfil = corPersonalizada || corPadrao;

console.log(corPerfil); // vermelho, se vermelho fosse '' seria falsy

//IF e ELSE

let hora = 10;

if (hora > 6 && hora < 12) {
    console.log("Bom dia")
} 
else if (outraCondicao) {
    // codigo a ser executado
}
else {
    // codigo a ser executado
}

// Switch case

let permissao = 'comum'; // comum, gerente

switch(permissao){
    case 'comum':
        console.log('usuário comum');
        break;
    case 'gerente':
        console.log('usuário gerente');
        break;
    default:
        console.log('Usúario não reconhecido!')
}


// for

for(let i = 0; i < 5; i++){
    console.log('Estou aprendendo!', i)
}

//while
let i = 5;

while (i >= 1) {
    if(i % 2 !== 0){
        console.log(i);
    }
    i--;
}

// do while
let r = 0;
do {
    console.log('digitando!');
    r++;
} while (r < 10)

//for-in

const pessoas = {
    nome: 'Matheus',
    idade: 25
};

for(let key in pessoas) {
    console.log(key,pessoas['nome']) // pessoas.nome
}

const cores =['vermelho', 'Azul', 'verde'];

for (let indice in cores ) {
    console.log(indice, cores[indice])
}

//for-of

for(let cor of cores) {
    console.log(cor);
}



const filme = {
    titulo: "tres",
    ano: 2313,
    diretor: "eu"
}

exibirPropriedades(filme);
function exibirPropriedades(obj) {
    for(let i in obj) { 
        if(typeof obj[i] === 'string' ){
            console.log(i, obj[i])
        }
    };
}

// Factory Functions (Função de fábrica)

const celular = {
    marcaCelular: 'Apple',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidade: 5000,
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}


function criarCelular(marcaCelular, tamanhoTela, capacidade) {
    return {
        marcaCelular,
        tamanhoTela,
        capacidade,
        ligar(){
            console.log("Fazendo ligação...")
        }
    }
}

const celular1 = criarCelular("Motorola", 5.5, 5000);
console.log(celular1);

// Constructor Functions
//Pascal Case - UmDoisTresQuatro
function Celular(marcaCelular, tamanhoTela, capacidade){
    this.marcaCelular = marcaCelular,
    this.tamanhoTela = tamanhoTela,
    this.capacidade = capacidade,
    this.ligar = function () {
        console.log("Fazendo ligação...")
    }

}

const celularT = new Celular('asus', 5.5, 5000);
console.log(celularT);

// Clonando Objetos

const celular2 = {
    marcaCelular: 'Apple',
    tamanhoTela: {
        vertical: 155,
        horizontal: 75
    },
    capacidade: 5000,
    ligar: function(){
        console.log("Fazendo ligação...")
    }
}

const novoObjeto = Object.assign({}, celular2);
console.log(novoObjeto);

const objeto2 = {...celular2};
console.log(objeto2);

//Math - biblioteca

console.log(Math.random());

// String

// tipo primitivo
const msg = 'minha msg';
console.log(typeof msg);

//tipo objeto
const outramsg = new String('bom dia');
console.log(typeof outramsg);

console.log(msg[2]);
console.log(outramsg[2]);
console.log(msg.includes('minha'));

//template literal
const msg1 = 'oi teste para usar\n \'outra\' coisa';

// template ``

const nome = 'Matheus';

const email = ` oi ${nome} isso é
um teste 'primeiro' ${2+5} assim`;
console.log(email);

// Date biblioteca

const data1 = new Date(); // vai pegar a data atual
const data2 = new Date('March 06 2020 09:30');
const data3 = new Date(2020,3,4,9,20);
console.log(data3);

// add elementos arrays
const array =  [5,2,3];

//inicio
array.unshift(0);
console.log(array);
//meio
array.splice(1, 0, 'a'); // onde quer, se quer deletar, e o numero
console.log(array);
//final
array.push(5);
console.log(array);

// encontrando elemento(primitivos)
const num = [1,2,3,4,1];
console.log(num.indexOf(2));// volta o indice, se não encontrar retornara -1
console.log(num.includes(2));// fala se tem o numero
console.log(num.lastIndexOf(1));// ultima vez q apareceu

//encontrando por referencias
const marcas = [
    {id:1, nome: 'a'},                
    {id:2, nome: 'b'},                            
];

const marca = marcas.find(function(marca){
    return marca.nome === 'a'
});
console.log(marca);

// arrow functions

const marca1 = marcas.find(marca => marca.nome === 'a');
console.log(marca1);

// removendo elementos

const num1 = [1,2,3,4,5, 6];

//final
const ultimo = num1.pop();
console.log(ultimo);
console.log(num1);
//inicio
const primeiro = num1.shift();
console.log(primeiro);
console.log(num1);
//meio
const meio = num1.splice(2,1);//onde e quantos
console.log(meio);
console.log(num1);

// esvaziando um array
let num2 = [1,2,3,4,5,6];

num2.length = 0;
console.log(num2);

// combinando e cortando arrays
const pri = [1,2,3];
const seg = [4,5,6];

//combinar
const combinado = pri.concat(seg);
console.log(combinado);

//dividir
const dividido = combinado.slice(1,3);//onde começar e onde termina
console.log(dividido);

//Spread combinado

const junto = [...pri,'a',...seg];//pode adicionar elementos tbm
console.log(junto);

// spread clonando

const clonado = [...junto];
console.log(clonado);

//iterando um array
const array1= [1,2,3,4,5,6];
//forEach

array1.forEach((arr, i) => console.log(arr,i));


//Combinando arrays
const array2= [1,2,3,4,5,6];

const combinado1 = array2.join('-'); // pode usar o split e depois usar o join 
console.log(combinado1);

// input - prompt


