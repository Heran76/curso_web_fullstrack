//Promesas

let miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let correcto = true;
    if(correcto){
        let miObjeto = {
            nombre : "Rider Republic",
          return  categoria: "Conducción",
            anio: 2021
        };
        
        resolve("miObjeto")
    }else{
        reject("No se ha cumplido la promesa :(")
    }
},3500);
    });
    
    

miPromesa
 .then(resultado =>{
    console.warn(resultado);
 })
 .catch(error =>{
    console.warn("Error: ",error);
 });
 // Promesas encandenadas
 function serviPizza(){

     new Promise(resolve =>{
        setTimeout(()=>resolve("Pizza servida !!"),15000);
    });
 }

 function servirHamburguesa(){
    new Promise(resolve =>{
        setTimeout(()=>resolve("Hamburguesa servida !!"),15000);
    });
    
}

 function servirSolomilloSalsaAcitunas (){
    new Promise(resolve =>{
        setTimeout(()=>resolve("Solomillo con salsa de aceitunas servido !!"),15000);
    });
 }

 serviPizza()
   .then(resultado1 => {
    console.log(resultado1);
    return servirHamburguesa();
   } )
   .then(resultado2 =>{
    console.log(resultado2)
    return servirSolomilloSalsaAcitunas();

   })
   ,the(resultado3 =>{
    console.log(resultado3);
   })
   .catch(error =>{
    console.log("Error en las comandas ; ", error)
   })