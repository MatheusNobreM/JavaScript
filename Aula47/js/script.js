//clearTimeout
var x =0;
var mytimer = setTimeout(function() {
    console.log("O x é 0");
}, 2000);

x = 10;

if(x > 0) {
    clearTimeout(mytimer);
    console.log("O x é maior que 0, o timer foi cancelado");
}

//clearInterval
var myInterval = setInterval(function() {
    console.log("Executando callback a cada 1 segundo");
}, 500);

setTimeout(function() {
    clearInterval(myInterval);
    console.log("O setintervalo foi cancelado");
}, 5000);