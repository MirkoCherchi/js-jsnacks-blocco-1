'use strict';

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
let somma = 0;

let conta = 10;

for (let i = 1; i <= conta; i++) {

    const numeroCorrente = Number(prompt(`${i} - inserisci un numero`));
    if (!isNaN(numeroCorrente)){
        console.log(`${i} - hai inserito il numero ${numeroCorrente}`);
    somma += numeroCorrente;
    console.log(`${i} - la somm a ora è ${somma}`);

    } else {
        console.log(`${i}hai inserito un numero che è stato escluso dalla somma`);
    }
}

console.log(`la somma di tutti i numeri è: ${somma}`);
