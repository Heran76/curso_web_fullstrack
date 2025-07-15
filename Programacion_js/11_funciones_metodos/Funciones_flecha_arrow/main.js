// funciones flecha arrow

//sitaxis

let saludo = () =>{
    console.log("Hello World");

}
saludo();

let nombre = nombre =>{  //si a la función flecha solo tiene un parametro no hace falta parentesis
    console.log(`Tu nombre es ${nombre}`);
}

nombre("Antonio");

// utilizar callback

setTimeout(()=>{
    console.log("Estoy usando una funcion arrow")
}, 2000);