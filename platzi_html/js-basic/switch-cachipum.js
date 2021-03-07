// objetivo: simular el juego de papel, piedra y tijera. Por medio de una funcion, 
// la idea es que por las opciones que se ingresen, se debe retornar el resultado. 
// reglas del juego. 
// papel le gana a piedra. 
// piedra le gana a tijera.
// tijera le gana a papel. 
function cachipum(user, cpu) {
   var op1 = validaVariable(user);
   var op2 = validaVariable(cpu);
      if (op1 == "" || op2 == "") {
           return "Variabes no validas";
        } else if (op1 == op2) {
        return "Empate";
      } else {
        switch (op1) {
           case "piedra":
              if (op2 === "tijera") return "Gano user";
              else return "Gano cpu";
              break;
           case "papel":
              if (op2 === "piedra") return "Gano user";
              else return "Gano cpu";
              break;
           case "tijera":
              if (op2 === "papel") return "Gano user";
              else return "Gano cpu";
              break;
           default:
              return "Variables sin datos validos";
        }
      }
}

function validaVariable(variable) {
   switch (variable) {
      case "piedra":
         return "piedra";
      case "papel":
         return "papel";
      case "tijera":
         return "tijera";
      default:
         return "";
   }
}
