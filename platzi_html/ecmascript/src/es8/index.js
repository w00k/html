const data = {
	frontend: 'Oscar', 
	backend: 'Isabel',
	design: 'Ana',
};

// de objeto a matriz
const entries = Object.entries(data);
console.log(entries);
// largo de la matriz
console.log(entries.length);

// de objeto a array de valores
const values = Object.values(data);
console.log(values);

const str = 'hello';
console.log(str.padStart(7, 'hi'));
console.log(str.padEnd(12, ' ------'));
