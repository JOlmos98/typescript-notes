//Aquí damos los tipos avanzados.
//////////////////////////////////////////////////
//TUPLA:
var arrayTupla = [1, 2];
arrayTupla = [1, 5];
//Creamos el tipo person, que es algo parecido a crear un objeto de una clase en Java, algo parecido a su constructor.
var personauno = {
    name: 'Jesus',
    age: 20
};
var car1 = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020
};
var cow = {
    name: 'Cow',
    age: 5,
    doSound: function () {
        console.log('Moo');
    }
};
//interface ejemplo2=12; Esto da error.
//A un objeto type lo podemos asignar directamente un valor, una interfaz nos obliga a definir los atributos que tiene.
//OBJECT: Dejó de existir a partir de la versíon 2.2.
//RECORDS:
//Se usa para objetos dinámicos, es decir, objetos de los cuales desconocemos su tipo o 
//que se vaya adaptando conforme se ejecuta el código.
//IMPORTANT: El tipo Record en TS es muy similar a la clase HashMap en Java, usan pares clave-valor
var myRec = {}; //La clave será String y el tipo de dato de los objetos será Number.
//myRec.name="Ana"; No funciona porque es un String y no un Number.
myRec.age = 20;
var myObject = {}; //Dentro de <> se usan genéricos <T>, usar any es como usar JS.
myObject.name = 'Jesus';
myObject.age = 20;
var man1 = {
    name: 'Jesus',
    age: 20,
    idEmployee: 1234,
    salary: 1000, //Declarar este atributo es opcional, los demás son obligatorios.
    sayHello: function () {
        console.log('Hello, my id is ' + this.idEmployee + " and my salary is " + this.salary);
    }
};
man1.sayHello();
