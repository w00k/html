var myCar = {
   brand: "Toyota",
   model: "Corolla",
   year: 2020,
   detailCar: function () {
   	console.log(`Car ${this.model} ${this.year}`);
   }
}

function auto(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var auto1 = new auto('Tesla', 'Model X', '2018');
var auto2 = new auto ('Tesla', 'Model 3', '2020');
var auto3 = new auto ('Toyota', 'Corona', '2020');
