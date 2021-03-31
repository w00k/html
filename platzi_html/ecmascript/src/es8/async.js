//promesa con tiempo de espera
const helloWorld = () => {
	return new Promise((resolve, reject) => {
		(true)
		? setTimeout(() => resolve('Hello World'), 3000)
		: reject(new Error('Test error'))
	});
};

// palabra reservada async
const helloAsync = async () => {
	const hello = await helloWorld();
	console.log(hello);
};

helloAsync();

const anotherFunction = async() => {
	try {
		const hello = helloWorld();
		console.log(hello);
	} catch(error) {
		console.log(error);
	}
}

anotherFunction();
