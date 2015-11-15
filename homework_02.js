/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.
*/

function sumAll(array) {
    var tot = 0;
    for (i = 0; i < array.length; i++){
        var x = array[i];        
        if(x < 0) {
                return tot;
            }
            tot += x;
        }
        return tot;
    }

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

function ex_1_F(x) {
    return sumUntilNegF(x);
}

function sumUntilNegF2(array) {
    var tmparray = [];
    array.every( x => {
        if(x > 0) {
            tmparray.push(x);
        }
        return x > 0;
    });
}

function buildUntil(array, check) {
    var tmparray = [];
    array.every( x => {
        if(check(x)) {
            tmparray.push(x);
            return true;
        } else {
            return false;
        }
    });
    return tmparray;
}

function sumUntilNegF3(array) {
    return builtUntil(array, x => x > 0).reduce((acc, x) => acc + x, 0);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function range(n) {
    a = [];
    for(i = 0; i < n; i++) {
        a[i] = i;
    }
    return a;
}

function sumOdd(n) {
    range(n).map(x => 2 * x + 1).reduce((acc, x) => acc + x);
}

function ex_2_F(x) {
    return sumOdd(x);
}

function replicate(a, n) {
    var array = [];
    for(var i = 0; i < n; ++i) {
        array[i] = a;
    }
    return array;
}
/*
Esercizio 4
Dato un intervallo [a, b] con a e b due interi positivi, restituire la somma di tutti i numeri
compresi all’interno dell’intervallo, estremi inclusi. Nel caso che b fosse minore di a,
calcolare la somma nell’intervallo [b,a]

Esempio:
sumInterval(3, 5) => 12
sumInterval(5, 3) => 12
*/


/*
Esercizio 5
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo
operatore somma.

Esempio:
mult(2, 3) => 6
*/

function multR(a, b){
    var count = 0;
    for(i = 1; i <= b; i++){
        count += a;
    }
    return count;
}

function mult(a, b){
    return replicate(a, b).reduce((x, y) => x + y);
}

function ex_5_F(h, k){
    return mult(h, k);
}

/*
Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli
operatori somma, sottrazione e della funzione mult.

Esempio:

pow(2, 3) => 8
*/

function powF(x, y) {
    if(x == 0) return 0;
    if(y == 0) return 1;
    return replicate(x, y).reduce((h,k) => mult(h, k));
}

function ex_7_F(x,y){
    return powF(x,y);
}

