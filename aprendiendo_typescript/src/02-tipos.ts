//Definir variables. Solo se usa let y cosnt
let nombreCompleto = "Antonio Heredia Morante";
//nombreCompleto = true;
//nombreCompleto = 14
console.log(nombreCompleto);
console.log(typeof(nombreCompleto));

const nacionalidd = "Española"

//string
let pais:string = "España"

//number
let habitantes:number = parseInt("160000");

//Boolen
let verdadero : boolean = true;

//Any
let locura:any = 11;
locura = "Master en Web";
console.log(locura)

//Arrays
let lenguajes: string[] = ["Js","php","Python","C"];
console.log(typeof(lenguajes))

let decadas: Array<number | boolean> = [90, 80, 70, true];

//Tipos especiales
let sinDefinir: undefined = undefined;
let nula: null = null;

//tipo personalizado
type alfanumerico = string | number;
let nombreYedad: alfanumerico = "Antonio"