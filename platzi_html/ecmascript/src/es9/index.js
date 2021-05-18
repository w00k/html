const obj = {
  name: "Francisco",
  age: 38,
  country: "CHL",
};

// quita el elemento name, y crea el objeto con el resto de los parametros
// operador de reposo
let { name, ...all } = obj;

console.log(name, all);

// propiedades de propagacion
const obj0 = {
  name: "Francisco",
  age: 38,
};

const obj1 = {
  ...obj0,
  country: "CHL",
};

console.log(obj1);

// promise finally
const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((response) => console.log(response))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizado"));

// regex
const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec("2018-04-20");
const year = match[1];
const month = match[2];
const day = match[3];

console.log(year, month, day); 
