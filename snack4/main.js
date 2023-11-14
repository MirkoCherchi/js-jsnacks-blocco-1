'use strict'

// Crea un array vuoto e chiedi all’utente un numero da inserire nell’array. 
// Continua a chiedere i numeri all’utente e a inserirli nell’array fino a quando la somma degli elementi è inferiore di 50.
const numero = [];
let sommaN = 0;

while (sommaN < 50) {
    const numeroUtente = prompt('inserisci numero')
    if (isNaN(numeroUtente)) {
        console.log('numero non valido');
    } else {
        numero.push(numeroUtente);
        sommaN += +numeroUtente;
    }
    
}

console.log(numero);
console.log('la somma è', sommaN);

for (let i = 0; i < numero.length; i++) {
    console.log('numero inserito', numero[i]);
    
}









