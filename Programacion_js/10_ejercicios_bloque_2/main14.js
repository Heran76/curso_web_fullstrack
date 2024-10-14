/*
Ejercicio 14;
Un DJ no sabe que genero musical poner en la fiesta...
Preguntale al usuario que genero quiere(POP, rock o rap)
Según lo que prefiera devuelva un mensaje diferente
*/

let genero = prompt("¿Elige un genero? pop, rock, rap");
genero = genero.toLowerCase();
switch(genero){
    case "pop":
        alert(`Has elegido pop`);
        break;
     case "rock":
        alert("Has elegido rock");
        break;
     case "rap":
        alert("Has elegido rap");
        break; 
     default:
        alert("No has escogido un genero");      
}