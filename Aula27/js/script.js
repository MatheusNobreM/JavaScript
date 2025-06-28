//parsefloat

console.log(parseFloat('10.5')); // 10.5
console.log(Number.parseFloat('10.5abc')); // 10.5

//parseint
console.log(parseInt('10')); // 10
console.log(parseInt('10.5')); // 10

//tofixed
console.log((10.123456).toFixed(2)); // '10.12'

//isNaN
console.log(isNaN('abc')); // true  
console.log(isNaN(10)); // false

//MAX_VALUE E MIN_VALUE
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MIN_VALUE); // 5e-324