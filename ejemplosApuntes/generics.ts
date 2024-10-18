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

example1.length
example2.toExponential
example3.valueOf
//Como vemos, con la misma función podemos castear a cualquier tipo.
//También podemos usar dos genéricos:

function exampleFn<T, Z>(arg1:T, arg2:Z):T{
    return arg1;
}