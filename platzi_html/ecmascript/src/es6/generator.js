function* helloWorld() {
    if (true) {
        yield 'Hello, ';
    }
    if (true) {
        yield 'world.'
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);