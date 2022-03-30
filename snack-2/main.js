/* L’utente inserisce due parole in successione, con due prompt.
Il software stampa prima la parola più corta, poi la parola più lunga. */

const primaParola = prompt("inserisci una parola");
const secondaParola = prompt("inserisci un'altra parola");


if (primaParola.length < secondaParola.length) {
    console.log(primaParola, secondaParola);
} else if (primaParola.length > secondaParola.length) {
    console.log(secondaParola, primaParola);   
} else {
    alert("le parole devono avere lunghezza differente, riprova!")
}