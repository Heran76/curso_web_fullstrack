/*
Ejercicio20:
En base al número que nos de el usuario.
Decirle si es par o impar.
*/

let numero;

while(isNaN(numero)){
    numero= parseInt(prompt("Mete el número para ver si es par o impar",0));

}
if(numero % 2 === 0){
    alert(`El número ${numero} es par`);

}else{
    alert(`El número ${numero} es impar `);
}