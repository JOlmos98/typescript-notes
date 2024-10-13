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