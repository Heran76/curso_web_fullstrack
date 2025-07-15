function getNombre(miNombre:string = "Antonio Heran76"):string{
    return "Mi nombre es "+miNombre;
}
console.log(getNombre());

let miFuncion = (parametro:string):number =>{
    return parseInt(parametro)
}
console.log(miFuncion("48"))