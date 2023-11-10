'use strict';

// L’utente inserisce due parole in successione, con due prompt.


const parola1 = prompt('inserisci la prima parola');
const parola2 = prompt('inserisci la seconda parola');

// Il software stampa prima la parola più corta, poi la parola più lunga.

if (parola1.length < parola2.length) {
    console.log(parola1);
    console.log(parola2);   
} else if (parola2.length < parola1.length) {
    console.log(parola2);
    console.log(parola1);  
} else {
    console.log(parola1, parola2);
}

