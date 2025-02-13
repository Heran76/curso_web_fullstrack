//Promesas

let miPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let correcto = true;
    if(correcto){
        let miObjeto = {
            nombre : "Rider Republic",
            categoria: "Conducción",
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