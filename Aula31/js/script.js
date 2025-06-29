// splice
var arr = [1, 2, 3, 4, 5];
arr.splice(2, 0, 99);

console.log(arr); // [1, 2, 99, 3, 4, 5]

arr.splice(4, 1);

//indexOf
var index = arr.indexOf(99);
console.log(index); // 2

//join
var arr2 = ["a", "b", "c"];
var joined = arr2.join("-");
console.log(joined); // "a-b-c"

//reverse
var arr3 = [1, 2, 3, 4, 5];
var reversed = arr3.reverse();
console.log(reversed); // [5, 4, 3, 2, 1]