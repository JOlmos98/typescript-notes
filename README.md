# TypeScript notes

Aquí están mis apuntes del curso de OpenWebinars de TypeScript y algunos apuntes y archivos sobre la creación y gestión de una base de datos con MySQL y Prisma. A partir del apartado Functions del curso de OpenWebinars, pondré en este README mis apuntes.

# Indice

- [Indice](#indice)
    - [1. Tipos](#1-tipos)
    - [2. Funciones](#2-funciones)
    - [3. Clases y herencia](#3-clases-y-herencia)
    - [4. Interfaces](#4-interfaces)
    - [5. Option chaining y Nullable](#5-option-chaining-y-nullable)
    - [6. Generics](#6-generics)
    - [7. Castoing](#7-casting)
    - [8. tsconfig.json](#8-tsconfigjson)

> [!NOTE]
> No hace falta compilar a JS, con el comando `node archivo.js` ejecutamos los archivos JS, pero, si instalamos ts-node, con el comando `ts-node archivo.ts` ejecutamos directamente el archivo TS sin necesidad de compilarlo a JS.

## 1. Tipos

- Básicos: En el archivo [tipos-basicos.ts](./inicial/tipos-basicos.ts) podemos ver unos apuntes sobre los tipos básicos en TypeScript.

- Avanzados: En el archivo [tipos-avanzados.ts](./inicial/tipos-avanzados.ts) podemos ver unos apuntes sobre los tipos avanzados en TypeScript.

## 2. Funciones

Los breves apuntes sobre funciones se pueden ver en el archivo [functions.ts](./06-functions/functions.ts).

Especial mención al tipo `never` que se usa cuando una función lanza o puede lanzar un error.

```ts
function generateError(message:string):never|boolean{
    if (message==='hola'){
        return true;
    }
}
```

## 3. Clases y herencia

Con JS se trabaja directamente con `function`, pero en TypeScript haremos lo siguiente:

```ts
class Person{

    gender:string;

    constructor(gender:string){
        this.gender=gender;
    }

    sayHello(){
        console.log("Hello.");
    }
}

```

Hasta aquí hemos creado la clase, la variable/atributo `gender` necesaria para su constructor, su constructor y el método sayHello() que imprime por consola "Hello.", todo muy parecido a Java. Ahora creamos una instancia/objeto de nuestra clase.

```ts
const person1=new Person('male');
```

En este punto podemos modificar el contenido del atributo de nuestro objeto así:

```ts
person1.gender='female';
```

Pero podemos modificar su acceso con ``public`` (como en Java, que se queda tal cual está, es decir, se sigue podiendo modificar) o ``private`` que ya no sería accesible directamente y tendríamos que hacerlo mediante un método setter, añadimos también el getter para imprimir y ver como se modifica. Este sería el código completo:

```ts
class Person{

    private gender:string;

    constructor(gender:string){
        this.gender=gender;
    }

    sayHello(){
        console.log("Hello.");
    }

    //Método getter:
    getGender(){
        return this.gender;
    }
    //Método setter:
    setGender(gender:string){
        this.gender=gender;
    }
}

const person1=new Person('male');
console.log(person1.getGender());

//Modificamos llamando al método setter:
person1.setGender('female');
console.log(person1.getGender());
```
Comprobamos con console.log que el género ha cambiado y también lo hemos obtenido con el getter y setter.

También esta el modificador de acceso `protected`, que determina que sólo pueden acceder al atributo la propia clase y las que hereden de ella, con `private` sólo se puede acceder desde la propia clase.

Podemos crear variables con propiedades estáticas (``static``), como en Java, eso significaría que esa vairable o función forma parte de la clase y no de una instancia de ella, así que para llamarla, en vez de escribir, por ejemplo, person1.sayHi(), al ser estática nombraríamos a la propia clase: 

```ts
Person.sayHi();
```
También podemos declarar variables con el tipo ``readonly``, que como indica su nombre, no se puede modificar, es una variable solo de lectura.

Clase hija:

```ts
class Developer extends Person{

}
const person2=new Person('male');
const dev1=new Developer('female'); 
//Vemos como nos exige introducir el género, ya que hereda de Person.

//También hereda sus métodos:
dev1.sayHello(); 
```

Ahora crearemos un constructor para Developer teniendo en cuenta que le introduciremos el ``gender`` como parámetro y un array de Strings como ``devLanguages``:

```ts

class Developer extends Person{

    private devLanguages:string[];

    constructor(gender:string, devLanguages:string[]){
        super(gender);
        this.devLanguages=devLanguages;
    }
    
}

```

Declaramos la variable `devLanguages` que será un array de strings, y en el constructor apuntamos a la clase padre con `super(gender);` para tomar como referencia la variable ya declarada allí y usarla en nuestro constructor. La construcción de un objeto de tipo ``Developer`` sería así:

```ts
const dev1=new Developer('female', ["Java", "TypeScript"]); 
```

## 4. Interfaces

Las interfaces están muy relacionadas con las clases y sus herencias.

En un nuevo archivo creamos la interfaz ``IPerson`` y la clase que la implementará ``Person``:

```ts
interface IPerson {
    gender:string;
    sayHi:()=>void;
    //Esto indica que es una función () y que devuelve `void`, o sea, nada.
}

class Person implements IPerson{ //Implementar la interfaz nos obliga a definir sus métodos.
    
    gender:string;
    sayHi: () => void;
};
```

> [!IMPORTANT]
> Una clase sólo puede heredar de una clase padre, pero puede implementar varias interfaces.

## 5. Optional chaining y Nullable

``Optional chaining`` consiste en lo siguiente:

```ts
const user={};

if (user.address){
    if (user.address.street){
        if (user.address.street.name){
            if (user.address.street.name==='Plaza España'){
                doSomething();
            }
        }
    }
}

//Todo este bloque de código podemos reducirlo con Optional Chaining a:

if (user?.address?.street?.name==='Plaza España'){
    doSomething();
}
```

``Nullable`` consiste en usar ``??`` para validar si una variable es null y devolver lo establecido:

```ts
function nombre(nameOrNull:string|null):string{
    return nameOrNull ?? 'Sin nombre'
}

const ejemplo1=nombre("Antonio");
const ejemplo2=nombre(null);

console.log(ejemplo1, ejemplo2);
```

Esto imprimirá por consola `Antonio Sin nombre`, en vez de `Antonio Null` ya que hemos validado si es null con ``??`` y hemos establecido el string ``Sin nombre`` en ese caso. Así funciona la funcionalidad Nullable.

## 6. Generics

Los ``Generics:<T>`` se crearon, entre otras cosas, para evitar el uso de ``any``, nos ayudan a no duplicar código y hace más escalable nuestro código:

```ts
//Primero creamos un ejemplo sencillo:

function identityStr(arg:string):string{
    return arg;
}

const example=identityStr("Esto sólo puede ser un string.");

//Al invocar esta función solo podriamos trabajar con el tipo String, pero si usamos genéricos:

function identityGen<T>(arg:T):T{
    return arg;
}

const example1=identityGen<string>("En este caso usamos string");
const example2=identityGen<number>(56);
const example3=identityGen<boolean>(true);

//Como vemos, con la misma función podemos castear a cualquier tipo.
//También podemos usar dos genéricos:

function exampleFn<T, Z>(arg1:T, arg2:Z):T{
    return arg1;
}
```

## 7. Casting

Como en Java, podemos castear variables de un tipo a otro, en TypeScript usamos la palabra reservada `as` seguido del tipo al que queremos castear:

```ts
type Employee={
    name:string;
}

const object={
    name:"John",
} as Employee
//Con esta última línea casteamos el object a tipo Employee.

const example=('hello' as any) as number;
//En este caso si casteamos directamente 'hello' as number dará error, debemos castearlo a any (o unknow) primero.
```

## 8. tsconfig.json

Para generar un fichero por defecto ``tsconfig.json`` escribiremos en consola ``tsc --init``. En él podemos ver muchas líneas de texto comentadas que son posibles opciones para la configuración de nuestro ``tsconfig.json``. 

- En la línea "target" podemos especificar a qué versión de JS queremos compilar.
- En la línea "module" definimos qué tipo de módulo va a utilizar, en nuestro caso por defecto es "commonjs", pero también podríamos especificar "ESNext".
- La línea "outDir" que aparece comentada es para establecer el directorio donde se generará nuestro archivo JS compilado. Por ejemplo: `"outDir": "./build"`
- La línea "lib" se usa para nombrar las librerías que queremos importar, por ejemplo, "ESNext".
- La línea ``"allowJs": true`` nos permite que los archivos JS también sean compilados.
- La línea ``"checkJs": true`` habilita la verificación de tipos y la comprobación de errores en archivos JavaScript en un proyecto TS.

Recomiendo preguntarle a chatGPT, o a cualquier IA que funcione medio bien, cuáles son las líneas más importantes a configurar del tsconfig y cuáles las más importantes para vuestro tipo de proyectos.