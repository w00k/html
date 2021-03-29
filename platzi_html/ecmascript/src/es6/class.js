class calculator {
    constructor() {
        this.valueA = 0; 
        this.valueB = 0;
    }
    sum(valueA, valueB) {
        this.valueA = valueA; 
        this.valueB = valueB; 
        return this.valueA + this.valueB
    }
}

const calc = new calculator(); 
console.log(calc.sum(25, 100));