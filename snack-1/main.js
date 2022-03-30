/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */

//numero 1 inserito dall'utente

const first_number = prompt("inserisci il primo numero")
const second_number = prompt("inserisci il secondo numero")

if (first_number > second_number) {
    console.log(first_number);
} else if (second_number > first_number) {
    console.log(second_number);
} else {
    alert("numeri uguali")
}