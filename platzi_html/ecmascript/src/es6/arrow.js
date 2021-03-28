const names = [
    {name: 'Francisco', age: 38},
    {name: 'Pancha', age: 38},
    {name: 'Simon', age: 3},
    {name: 'Luca', age: 0},
]

// es5
let listOfNames = names.map(function(item) {
    console.log(item.name);
});

// es6 arrow function 
let listOfNamesArrow = names.map(item => console.log(item.name));

/*
varios elementos a pasar
const listOfNames3 = (name, age, country) => {
    ...
}
 */

/*
const squares = num => num * num ;
 */