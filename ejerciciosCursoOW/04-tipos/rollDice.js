function rollTheDice(userName, maxOfTries) {
    var results = []; //Este era el error de TS.
    var MAX_DICE_NUMBER = 6;
    /*if (!maxOfTries) {
      throw new Error('Max could not be undefined');
    } Básicamente este if no tiene sentido en TS obliga a que el usuario ingrese un número.
  
    if (typeof maxOfTries === 'string') {
      maxOfTries = parseInt(maxOfTries, 10);
    } Básicamente este if no tiene sentido en TS obliga a que el usuario ingrese un número, tipo NUMBER.
  
    if (typeof maxOfTries !== 'number') {
      throw new Error('Max should be a number');
    }*/ //Básicamente este if no tiene sentido en TS obliga a que el usuario ingrese un número, tipo NUMBER.
    /*if (!userName) {
      throw new Error('Please enter a user name');
    } Básicamente este if no tiene sentido en TS obliga a que el usuario ingrese un nombre, si o si.
  
    if (typeof userName !== 'string') {
      throw new Error('Username should be a string, not a: ' + typeof userName);
    } Básicamente este if no tiene sentido en TS obliga a que el usuario ingrese un nombre de tipo String.*/
    MAX_DICE_NUMBER = 6;
    for (var index = 0; index < maxOfTries; index++) {
        var result = Math.ceil(Math.random() * MAX_DICE_NUMBER);
        if (result === MAX_DICE_NUMBER) {
            results.push("".concat(userName, " is a WINNER"));
        }
        else {
            results.push("".concat(userName, " is a LOSER"));
        }
    }
    return results;
}
var results = rollTheDice('TypeScript', 2);
console.log(results);
//Esta app es una mierda que no está bien hecha.
//Actualizamos.
