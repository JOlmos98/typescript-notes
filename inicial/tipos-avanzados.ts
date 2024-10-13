//Aquí damos los tipos avanzados.

//////////////////////////////////////////////////
//TUPLA:
var arrayTupla: [number, number]=[1,2];
arrayTupla=[1,5];
//En JS es más dinámico, podríamos hacer arrayTupla=[1, 2, 3], haciendo que eso deje de ser una tupla
//sería un array sin más, pudiendo agrandar su tamaño.

//////////////////////////////////////////////////
//TYPE:
type person={
  name:string,
  age:number
}
//Creamos el tipo person, que es algo parecido a crear un objeto de una clase en Java, algo parecido a su constructor.

const personauno:person={
    name:'Jesus',
    age:20
}
//Y aquí arriba instanciamos y creamos un objeto de tipo person.
//No podemos declarar un objeto person sin especificaremos el atributo name y el atributo age.

type car={
    brand:string;
    model:string;
    year:number;
    color?: string; //El signo de interrogación hace que este atributo sea opcional.
}

const car1:car={
  brand:'Toyota',
  model:'Camry',
  year:2020
}
//Creamos un objeto de tipo car y asignamos los atributos excepto el color, que es opcional.

//////////////////////////////////////////////////
//INTERFACE:
//Se parece mucho a type, pero se usa en situaciones distintas,
//para trabjar con POO se suele usar interfaces.
interface animal{
  name:string;
  age:number;
  doSound?():void; //En este caso es opcional bc interrogación.
}

const cow:animal={
  name:'Cow',
  age:5,
  doSound(){
    console.log('Moo');
  }
}
//Creamos un objeto de tipo animal y vemos como podemos crear métodos.
//También se pueden crear métodos con type.

//Diferencias:
type ejemplo=12;
//interface ejemplo2=12; Esto da error.
//A un objeto type lo podemos asignar directamente un valor, una interfaz nos obliga a definir los atributos que tiene.

//OBJECT: Dejó de existir a partir de la versíon 2.2.

//RECORDS:
//Se usa para objetos dinámicos, es decir, objetos de los cuales desconocemos su tipo o 
//que se vaya adaptando conforme se ejecuta el código.

//IMPORTANT: El tipo Record en TS es muy similar a la clase HashMap en Java, usan pares clave-valor
const myRec:Record<string,number>={}; //La clave será String y el tipo de dato de los objetos será Number.
//myRec.name="Ana"; No funciona porque es un String y no un Number.
myRec.age=20;

const myObject:Record<any,any>={}; //Dentro de <> se usan genéricos <T>, usar any es como usar JS.

myObject.name='Jesus';
myObject.age=20;

//UNION (&):
//Es como si uniésemos dos interfaces o un objeto/clase heredase de dos interfaces y tuviese
//que implementar los atributos de ambas.

type normalPerson={
    name:string;
    age:number;
}
type employeePerson={
    idEmployee:number;
    salary?:number;
    sayHello?:()=>void;
}

type personNE=normalPerson|employeePerson; //Combinación de los dos tipos anteriores.

const man1:personNE={
  name:'Jesus',
  age:23, //Si quitamos edad, ya no estamos cumpliendo con AL MENOS uno de los dos tipos del OR.
}

//OR (|): Ver arriba. Un & obliga a implementar tdos los atributos y métodos, el OR obliga a implementar AL MENOS, uno tipo interfaz completo.