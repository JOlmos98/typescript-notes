console.log("Hola mundo.");

//Si usamos let, de momento da error al compilar a JS.
var nombre = "Jesus";
var edad = 20;

var hombre:boolean=true;
var mujer:boolean=false;

var numero:number=158;

var apellido:string="Olmos";

var st1:string="Primero";
var st2:string='Segundo';
var st3:string=`Tercero`;

//Arrays:
var array1=[1, "Hello", true]; //TS permite arrays dinámicos.
array1.push(2);
array1.push("Adiós");
array1.push(false);

var array2:number[]=[1998, 2002, 2014, 2018];
//array2.push("Champions"); Esto da error en TS porque estamos añadiendo un String a un array de tipo number.

//El tipo dinámico any no está recomendado:
var item:string="Hello";
//Ahora al poner item. el IDE no es capaz de identificar que item es un string, por lo que no me recomienda métodos.