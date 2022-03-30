/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

let invitati = ['invitato1', 'invitato2', 'invitato3'];

let userName = prompt("dimmi il tuo nome")

let canAccess = false

for (let index = 0; index < invitati.length; index++) {
    const invitato = invitati[index];
    if (userName == invitato) {
        canAccess = true
    }    
}


if (boolean == true) {
    console.log("puoi partecipare"); 
} else {
    console.log("non puoi partecipare");
    
}






