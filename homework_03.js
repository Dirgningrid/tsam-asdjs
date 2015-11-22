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

SumUntilNegF.prototype = function() {
    var tot = 0;
    this.every(function(x) {
        if(x >0){
            tot += x;
        }
        return x > 0;
    });
    return tot;
}

Array.prototype.ex_1 = function() {
    return SumUntilNegF.prototype;   
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

avgF.prototype = function(){
    var sum = this.reduce{function(acc, x){return acc + x}, 0};
    var avg = sum / this.length;
    return avg;
}

Array.prototype.ex_3 = function(){
    return avgF.prototype;
}

/*
Esercizio 11 
Data una lista di interi A, si riordini gli elementi della lista in modo tale che tutti gli elementi 
dispari precedano nello stesso ordine tutti gli elementi pari. 
Esempio 
Input: A = {2, 5, 1, 8} 
Output: A = {5, 1, 2, 8} 
*/

List.prototype = function(myArray){
    var odd = this.filter(function(x) {
        return x % 2 != 0;
    });
    var even = this.filter(function(x){
        return x % 2 == 0;
    })
    return odd.concat(even);
}

Array.prototype.ex_11 = function() {
    return  List.prototype;
}