
interface IPerson {
    gender:string;
    sayHi:()=>void;
    //Esto indica que es una función () y que devuelve `void`, o sea, nada.
}

class PersonExample implements IPerson{ //Implementar la interfaz nos obliga a definir sus métodos.
    
    gender:string;
    sayHi: () => void;
};

