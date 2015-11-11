/*
Esercizio 1
Dato un array di interi, restituire la loro somma fino a che non viene ritrovato un valore
negativo.
*/

function sumwhileneg(myArray) {
    var tot = 0;
    for (i = 0; i < myArray.length; ++i){
        var x = myArray[1];
        if(x < 0) {
            return tot;
        }
        tot += x;
    }
        
}

function ex_1_I(x){
    return sumwhileneg(x);
}

/*
ricorsivo
*/

function sumWhileNegR(array) {
    if(array.length == 0 || array[0] < 0) {
        return 0;
    } else {
        return array[0] + sumWhileNegR(array.slice(1));
    }
}

function ex_1_R(x){
    return sumWhileNegR(x);
}

/*
Esercizio 2
Dato un numero n, restituire la somma dei primi n numeri interi positivi dispari
*/

function sumOdd(n) {
    var tot = 0;
    for (i = 0; i < n; ++i) {
        tot += 1 + 2 * i;
    }
    return tot;
}

function ex_2_I(x){
    return sumOdd(x);
}

/*
ricorsivo
*/

function sumOddR(n){
    if(n == 0){
        return 0; 
    } else {
        return 2 * n - 1 + sumOddR(n - 1);
    }
}

function ex_2_R(x){
    return sumOddR(x);
}

/*
Esercizio 3
Dato un array di 10 elementi, calcolarne la media
*/

function average(array) {
    tot = 0;
    for(i = 0; i < 10; i++) {
        tot = tot + array[i];
    }
    avg = tot / 10;
    return avg;
}

function ex_3_I(x){
    return average(x);
}

/*
ricorsiva
*/

function averageR(array) {
    if(array.length == 0) {
        return 0;
    } else {
        return array[0] + averageR(array.slice(1));
    }
}

function averageRW(array) {
    return averageR(array) / array.length;
}

function ex_3_R(x){
    return averageRW(x);
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

function sumInterval(a, b) {
    var tot = 0;
    for(i = a; i <= b; i++) {
        tot += i;
    }
    return tot;
}

function sumIntervalW(a,b) {
    if(a < b){
        return sumInterval(a, b);
    } else {
        return sumInterval(b, a);
    }
}

function ex_4_I(x, y){
    return sumIntervalW(x, y);
}

/*
ricorsiva
*/

function sumIntervalR(a, b){
    if(a == b){
        return b;
    } else {
        return a + sumIntervalR(a + 1, b);
    }
}

function sumIntervaRW(a, b){
    if(a < b){
        return sumIntervalR(a, b);
    } else {
        return sumIntervalR(b, a);
    }
}

function ex_4_R(x, y){
    return sumIntervaRW(x, y);
}

/*
Esercizio 5 
Si calcoli il prodotto di due numeri a, b maggiori o uguali a zero, tramite l’utilizzo del solo 
operatore somma. 
Esempio: 
mult(2, 3) => 6
*/

function mult(a, b){
    var count = 0;
    for(i = 1; i <= b; i++){
        count += a;
    }
    return count;
}

function ex_5_I(x, y){
    return mult(x, y);
}

/*
ricorsiva
*/

function multR(a, b){
    if(b == 0){
        return 0;
    } else {
        return a + multR(a, b - 1);
    }
}

function ex_5_R(x, y){
    return multR(x, y);
}

/*
Esercizio 6 
Si calcoli la divisione e il resto della divisione tra due numeri a, b maggiori a zero, tramite 
l’utilizzo dei soli operatori somma e sottrazione. 
Esempio: 
div(5, 3) => 1 resto 2
*/

function div(a, b) {
    q = 0;  
    for(i = 0; a>b; i++) {
        a = a - b;
        q++;
    }
    array = [q, a];
    return array;           
}

function ex_6_I(x, y){
    return div(x, y);
}

/*
ricorsiva
*/
function divRic(a, b){
    return divR(a, b, 0);
}
function divR(a, b, q){
    if(a == 0 || a < b) {
        return a;
    } else {
        array = [];
        array[0] = q;
        array[1] = divR(a - b, b, ++q);
        return array;
    }
}

function ex_6_R(x, y){
    return divRic(x, y);
}

/*Esercizio 7
Si calcoli la potenza (x^y) di due numeri x y maggiori o uguali a zero, tramite l’utilizzo dei soli 
operatori somma, sottrazione e della funzione mult. Esempio: 
pow(2, 3) => 8 
*/

function pow(a, b){
    var count = 0;
    for(i = 0; i < b; i++){
        count += mult(i * a, a);
    }
    return count;
}