function newFunction(name, age, country) {
  var name = name || "Francisco";
  var age = age || 39;
  var country = country || "CL";
  console.log(name, age, country);
}

//es6 
function newFunction2(name = "Francisco", age = 39, country ="CL") {
  console.log(name, age, country);
};

newFunction2();
newFunction2("Pancha", 38, "CL");

let hello = "hello"; 
let world = "world"; 
// template literal
let epicPhrase = `${hello} ${world}`;
console.log(epicPhrase);

// es6
let lorem2 = `
frase epica de ecmascript 6 ...
con salto de linea incluida, por que se puede. 
`;

console.log(lorem2); 

let person = {
  name: "Francisco",
  age: 39,
  country: "CL",
}; 

console.log(person.name, person.age);

let {name, age, country} = person;

console.log(name, age, country);
