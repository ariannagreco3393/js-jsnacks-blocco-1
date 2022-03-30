/* 
Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array.
*/

const contenitoreDispari = [];

for (let index = 0; index < 6; index++) {
    let userNumber = prompt('inserisci un numero');

    if (userNumber % 2 != 0) {
        contenitoreDispari.push(userNumber);
        console.log(contenitoreDispari);
    } else {
        console.log("numero pari");
    }
}