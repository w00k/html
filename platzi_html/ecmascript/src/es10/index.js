let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

// niveles - profundidad 
console.log(array.flat());

console.log(array.flat(2));

let arrayMap = [1, 2, 3, 4, 5];

console.log(arrayMap.flatMap(value => [value, value * 2]));

let hello = '   hello world  ';

console.log(hello);
console.log(hello.trimStart());
console.log(hello.trimEnd());

/*
try {

} catch (error) {
  error ... 
}

ahora se puede usar 

try {

} catch {
 error
}
*/

let entries = [["name", "Francisco"], ["age", 38]];
console.log(Object.fromEntries(entries));

// descripcion a objetos
let mySymbl = 'My Symbol';
let symbol = Symbol(mySymbl);
console.log(symbol.description);
