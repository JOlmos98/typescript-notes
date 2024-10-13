# TypeScript notes

Aquí están mis apuntes del curso de OpenWebinars de TypeScript y algunos apuntes y archivos sobre la creación y gestión de una base de datos con MySQL y Prisma. A partir del apartado Functions del curso de OpenWebinars, pondré en este README mis apuntes.

# Indice


Aquí definiremos el índice.


## 1. Tipos

- Básicos: En el archivo [tipos-basicos.ts](./inicial/tipos-basicos.ts) podemos ver unos apuntes sobre los tipos básicos en TypeScript.

- Avanzados: En el archivo [tipos-avanzados.ts](./inicial/tipos-avanzados.ts) podemos ver unos apuntes sobre los tipos avanzados en TypeScript.

## 2. Funciones

Los breves apuntes sobre funciones se puedne ver en el archivo [functions.ts](./06-functions/functions.ts).

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