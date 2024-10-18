//Optional chaining consiste en lo siguiente:

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
