'use strict';

// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

let n = prompt('inserisci numero');

console.log(n);


for (let i = 0; i < n; i++) {
    const casual = [];
    let n = []
     
     for (let x = 0; x < 10; x++) {
        casual.push(Math.floor(Math.random() * 100) + 1);
     }

     console.log(casual);
 
}
