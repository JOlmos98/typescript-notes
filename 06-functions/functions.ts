//////////FUNCTIONS//////////

function suma(a:number, b:number):number{
    return a + b;
} //En este método los parámetros son obligatorios, si introducimos sólo uno dará error.
//Evidentemente, si pasamos una variable distinta de number también dará error.
//Podemos poner b:number|undefined, pero eso hará que el parámetro b sea opcional.
//Podemos hacer que el parámetro b sea opcional con b?:number que quedaría mejor, pero entonces lo tomará como undefined si no lo introducimos.
//Lo que podemos hacer para que funcione perfecto haciendo b opcional es poner un valor por defecto b:number=0 y así, cuando
//no especifiquemos b tomará el valor 0.

const result=suma(1,2);
console.log(result); //Imprime 3.

//Creamos una variable tipo Function:
let combineValues:Function;

function sumar(a:number, b:number):number{
    return a + b;
}

function sayHello(name:string):void{
    console.log('Hi, im '+name);
}

combineValues=sumar; //Esto lo único que hace es validar que el valor recibido es una función, pero no valida los parámetros.

//Para una validación más estricta haremos lo siguiente:
let combineValuesTrue:(a:number, b:number)=>number;
//Esto validará que el valor recibido sea una función que reciba dos parámetros NUMBER y devuelva un NUMBER.

//////////NEVER//////////