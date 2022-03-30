/* 
Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero.
*/
 //chiedi un numero di 4 cifre all'utente

let numero4Cifre = prompt('inserisci un numero di 4 cifre')

let somma = 0;

console.log(typeof numero4Cifre);


somma += numero4Cifre % 10;
numero4Cifre = Math.floor(numero4Cifre / 10)
 
