//Promesas

let miPromesa = new Promise((resolve, reject)=>{
    let correcto = true;
    if(correcto){
        resolve("la promesa se ha cumplido!!")
    }else{
        reject("No se ha cumplido la promesa :(")
    }
});

console.log(miPromesa)