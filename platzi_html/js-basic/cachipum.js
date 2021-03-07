// objetivo: simular el juego de papel, piedra y tijera. Por medio de una funcion, 
// la idea es que por las opciones que se ingresen, se debe retornar el resultado. 
// reglas del juego. 
// papel le gana a piedra. 
// piedra le gana a tijera.
// tijera le gana a papel. 
function cachipum(user, cpu) {
   var op1 = validaVariable(user);
   var op2 = validaVariable(cpu);
   if (op1 === "" || op2 === "") {
     return "variable sin datos validos"; 
   } else {
      if (op1 == op2) {
      	return "Empate";
      } else if (op1 === "papel") {
	 if (op2 === "piedra") return "Gano user";
	  else return "Gano cpu";
      } else if (op1 === "piedra") {
      	if (op2 === "tijera") return "Gano user";
	 else return "Gano cpu";
      } else if(op1 === "tijera") {
      	if (op2 === "papel") return "Gano user";
	 else return "Gano cpu";
      }
   }
}

function validaVariable(variable) {
	if (variable === "piedra") {
	   return "piedra";
	} else if (variable === "papel") {
	   return "papel";
	} else if (variable === "tijera") {
	   return "tijera";
	} else {
		return "";
	}
}
