// ELSE IF;
//EJERCICIO 2.
 let quieroCebolla = true;

 if(quieroCebolla){
    //Si la condicion es verdadera.
    console.log("Tu hamburguesa lleva cebolla");
 }else{
    console.log("Tu hamburguesa no lleva cebolla");
 }

 //ejemplo 3

 let nombre = "Antonio Heredia";
 let edad = 20;

 if(edad >= 18){
     // es mayor edad
     console.log(`${nombre} tiene ${edad} años y es mayor de edad `);
     if(edad <= 20){
        console.log("Eres un adolescente");
     }else if(edad >= 70){
        console.log("Eres un anciano");
     }else{
        console.log("Eres un adulto" );
     }
 
 
    }else{
    // no es mayor de edad
    console.log(`${nombre} tiene  ${edad} años y es menor de edad`);
 }