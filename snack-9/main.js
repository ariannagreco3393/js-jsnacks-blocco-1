/* 
Calcola la somma e la media dei primi 10 numeri.
*/

let media = 0
let somma = 0

for (let index = 1; index <= 10; index++) {
    somma += index;  
}

media = somma / 10

console.log(somma, media);
