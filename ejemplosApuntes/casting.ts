type Employee={
    name:string;
}

const object={
    name:"John",
} as Employee
//Con esta última línea casteamos el object a tipo Employee.

const example=('hello' as any) as number;
//En este caso si casteamos directamente 'hello' as number dará error, debemos castearlo a any (o unknow) primero.