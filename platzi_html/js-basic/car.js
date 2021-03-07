function myFunction() {
  document.write(`
  <style>
  .form-car ul {
    list-style: none; 
  }
  .form-car ul li {
    margin: 10px 0px;
  }
  #car-element {
    display: table;
    margin: 10px 5px;
    border: 0px solid;
    padding: 5px;
  }
  .row {
    display: table-row;
  }
  .cell {
    display: table-cell;
    border: 0px solid;
    padding: 1px 5px;
  }
  </style>
  <h1>Object loop challenge</h1>
  <div class="form-car">
  <p>La idea es que en este formulario agrege hasta 30 vehiculos, se debe ingresar los datos de un vehiculo y 
   hacer clic en el boton <i>Add Car</i> (se agrega uno a uno).
  </p>
  <ul>
  <li> <input id="brand" type="text" placeholder="Brand"> </li>
  <li> <input id="model" type="text" placeholder="Model"> </li>
  <li> <input id="year" type="text" placeholder="Year"> </li>
  </ul>
  <button onclick="buttonAddCar()">Add Car</button>
  </div>
  <div id="car-element"></div>
  <p id='info'></p>
  `);
}

function car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

var carArray = [];

function buttonAddCar() {
  var elements = "";
  var brand = document.getElementById("brand").value;
  var model = document.getElementById("model").value;
  var year = document.getElementById("year").value;

  carArray.push(new car(brand, model, year));

  document.getElementById("brand").value = "";
  document.getElementById("model").value = "";
  document.getElementById("year").value = "";

  document.getElementById("info").textContent =
    "Cantidad de vehiculos ingresados: " + carArray.length;

  if (carArray.length >= 30) {
    document.getElementById("info").textContent = "";

    elements += "<div class='row'>";
    elements += "<div class='cell'>Brand</div>";
    elements += "<div class='cell'>Model</div>";
    elements += "<div class='cell'>Year</div>";
    elements += "</div>";

    for (var carElement of carArray) {
      elements += "<div class='row'>";
      elements += "<div class='cell'>" + carElement.brand + "</div>";
      elements += "<div class='cell'>" + carElement.model + "</div>";
      elements += "<div class='cell'>" + carElement.year + "</div>";
      elements += "</div>";
    }

    document
      .querySelector("#car-element")
      .insertAdjacentHTML("afterbegin", elements);
  }
}

myFunction();
