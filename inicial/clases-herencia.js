var Person = /** @class */ (function () {
    function Person(gender) {
        this.gender = gender;
    }
    Person.prototype.sayHello = function () {
        console.log("Hello.");
    };
    //Método getter:
    Person.prototype.getGender = function () {
        return this.gender;
    };
    //Método setter:
    Person.prototype.setGender = function (gender) {
        this.gender = gender;
    };
    return Person;
}());
var person1 = new Person('male');
console.log(person1.getGender());
//Modificamos llamando al método setter:
person1.setGender('female');
console.log(person1.getGender());
