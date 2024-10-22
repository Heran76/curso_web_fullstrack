/*
Funciones dentro de funciones.
*/

function operacines(numero1,numero2){
   let resultados ={
    "suma": (numero1+numero2),
    "resta": (numero1 + numero2),
    "multiplicacion" : (numero1 + numero2),
    "division": (numero1 / numero2),
   }

    return resultados;
}




function porConsola(numero1,numero2){
         
       let resultado = operacines(numero1,numero2);
     
        console.log("Suma =  "+resultado.suma);
        console.log("Resta = "+resultado.resta);
        console.log("Multiplicacion = "+resultado.multiplicacion);
        console.log("División = "+resultado.division)
        return true;
}

function porPantalla(numero1,numero2){
         
        let resultado = operacines(numero1,numero2);
        
        document.write("<h2> ****** Operaciones con funciones *******</h2>")
        document.write("<h3>Suma =  "+resultado.suma+"</h3>");
        document.write("<h3>Resta = "+resultado.resta+"</h3>");
        document.write("<h3>Multiplicacion = "+resultado.multiplicacion+"</h3>");
        document.write("<h3>Division = "+resultado.division+"</h3>");
        return true;
}

function calculadora(numero1, numero2, mostrar=false){
    
    if(mostrar == false){
        porConsola(numero1,numero2);
    }else{
        porPantalla(numero1,numero2);
    }
    
    return true;
}

calculadora(40,2,true);
calculadora(10,35,false);