function nombre(nameOrNull:string|null):string{
    return nameOrNull ?? 'Sin nombre'
}

const ejemplo1=nombre("Antonio");
const ejemplo2=nombre(null);

console.log(ejemplo1, ejemplo2);