function exibir(num){
    console.log("o resultado: "+ num);
}

function soma(a, b, callback) {
    var resultado = a + b;
    callback(resultado);
}   

function multiplica(a, b, cb) {
    var resultado = a * b;
    cb(resultado);
}

soma(2,4, exibir);
multiplica(2,4, exibir);

