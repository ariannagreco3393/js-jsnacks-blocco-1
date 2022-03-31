/* 
Il software deve chiedere per 10 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
*/
let somma = 0
i = 0
while (i < 10) {
    let userNumber = parseInt(prompt('inserisci un numero'))
    somma += userNumber
    i++
}

console.log(somma);