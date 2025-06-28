// length
var arr = [1, 2, 3, 4, 5];
console.log(arr.length); // 5

//push
arr.push(6);    

//pop
arr.pop(); // remove o último elemento do array

//unshift
arr.unshift(0); // adiciona um elemento no início do array

 console.log(arr); // [0, 1, 2, 3, 4, 5]
//shift
arr.shift(); // remove o primeiro elemento do array
console.log(arr); // [1, 2, 3, 4, 5]
//acesssar o último elemento
console.log(arr[arr.length - 1]); // 5

//isArray
console.log(Array.isArray(arr)); // true

