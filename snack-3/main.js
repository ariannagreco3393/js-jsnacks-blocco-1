/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let somma = 0

for (let index = 0; index < 10; index++) {
    let userNumber = Number(prompt("inserisci un numero"));
    somma += userNumber
}

console.log(somma);   //scrivere il console log fuori dal ciclo for per far uscire solo il numero finale



