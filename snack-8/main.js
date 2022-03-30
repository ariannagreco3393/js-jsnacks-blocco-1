/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
 //chiedi un numero di 4 cifre all'utente

let numero4Cifre = prompt('inserisci un numero di 4 cifre');
let somma = 0

for (let i = 0; i < numero4Cifre.length; i++) {
    somma += Number(numero4Cifre[i]);

}

console.log(somma);



 
