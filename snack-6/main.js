/* Stampa il cubo dei primi N numeri,
dove N è un numero indicato dall’utente. */

//utente indica un numero N
let UserNumber = Number(prompt("scrivi un numero"));

for (let index = 1; index <= UserNumber; index++) {
    const cuboUtente = (Math.pow(index, 3)); 
    console.log(cuboUtente)
}



//stampo numero N al cubo