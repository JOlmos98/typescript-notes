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

//Creamos clase hija de Person, Developer:

class Developer extends Person{

    private devLanguages:string[];

    constructor(gender:string, devLanguages:string[]){
        super(gender);
        this.devLanguages=devLanguages;
    }

}

const person2=new Person('male');
const dev1=new Developer('female', ["Java", "TypeScript"]); 
//Vemos como nos exige introducir el género, ya que hereda de Person.
//También hereda sus métodos:
dev1.sayHello(); //Ejecutamos con "ts-node clases-herencia.ts"

//Recordamos que con los métodos o variables "private" no podremos acceder
//con las clases hijas, pero con "protected" si.