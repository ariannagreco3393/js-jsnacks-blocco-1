/* 
In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

//creo una lista invitati alla festa con un Array
let invitati = ['invitato1', 'invitato2', 'invitato3'];
// chiedo all'utente di scrivere il suo nome
let userName = prompt("dimmi il tuo nome")
//creo una variabile booleana falsa
let canAccess = false
//verifico se il nome inserito dall'utente si trova nell array e salvo in una const 
for (let index = 0; index < invitati.length; index++) {
    const invitato = invitati[index];
    //se il nome inserito dall'utente è uguale al nome salvato nella const invitato allora la variabile boolean canAccess diventa vera
    if (userName == invitato) {
        canAccess = true
    }    
}

//stampo il messaggio all'utente

if (boolean == true) {
    console.log("puoi partecipare"); 
} else {
    console.log("non puoi partecipare");
    
}






