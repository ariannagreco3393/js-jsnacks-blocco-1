/* L’utente inserisce due numeri in successione, con due prompt.
Il software stampa il maggiore. */


const first_number = prompt("inserisci due numeri diversi: qui il primo")
const second_number = prompt("inserisci due numeri diversi: qui il secondo")

if (first_number > second_number) {
    console.log(first_number);
} else if (second_number > first_number) {
    console.log(second_number);
} else {
    alert("hai inserito 2 numeri uguali, devi inserirli diversi")
}