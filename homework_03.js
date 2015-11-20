/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.
*/

function sumUntilNegF(array) {
    var tot = 0;
    array.every( x => { 
        if(x > 0) {
            tot += x;
        }
        return x > 0;        
       });
       return tot;
}

SumUntilNegF.prototype = function(myArray) {
    var tot = 0;
    this.every(function(x) {
        if(x >0){
            tot += x;
        }
        return x > 0;
    });
    return tot;
}

function [].ex_1(x) {
    return sumUntilNegF(x);   
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function avgF(myArray) {
    var sum = myArray.reduce(function(acc, x){return acc + x}, 0);
    var avg = sum / myArray.length;
    return avg;
}



/*
Esercizio 11 
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi 
dispari precedano nello stesso ordine tutti gli elementi pari. 
Esempio 
Input: A = {2, 5, 1, 8} 
Output: A = {5, 1, 2, 8} 
*/

