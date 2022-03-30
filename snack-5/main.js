/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

//creo un Array vuoto che contenta i numeri dispari
const contenitoreDispari = [];

//con il ciclo for chiedo all'utente 6 volte di inserire un numero dispari
for (let index = 0; index < 6; index++) {
    let userNumber = Number(prompt('inserisci un numero dispari'));
// con la condizione if verifico se i numeri inseriti dall'utente sono dispari
    if (userNumber % 2 != 0) {
        //se sono dispari li aggiungo all'Array
        contenitoreDispari.push(userNumber);
        console.log(contenitoreDispari);
    } else {
        //altrimenti faccio uscire un alert che dica che il numero inserito è pari
        alert('numero pari')
    }
}