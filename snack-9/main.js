/* 
Calcola la somma e la media dei primi 10 numeri.
*/

let totale;
let somma = 0

let primi10Numeri = [1,2,3,4,5,6,7,8,9,10]

for (let index = 0; index < primi10Numeri.length; index++) {
    somma += Number(primi10Numeri[index])
}


//media
totale = somma / 10
console.log(totale);


