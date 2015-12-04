/* test initialArray */

function initialArray() {
	var seed = 1;
	function random() {
		var x = Math.sin(seed++) * 10000;
		return Math.floor(x);
	}

	var a = [];
	for(var i = 0; i < 10000; ++i) {
		a.push(random());
	}
	return a;
}

function sumAll(myA) {
    return myA.reduce((x, acc) => {return x + acc}, 0);
}

var A = initialArray();

/* Esercizio Ricorsione NON di coda 

containsValue(initialArray(), 5070)
2

*/

function containsValue(array, x){
    if(array.length == 0) {
        return 0;
    } else {
        
        if(array[0] == x) {
            return 1 + containsValue(array.slice(1), x);
        }
        return 0 + containsValue(array.slice(1), x);
    }
}

/* Esercizio filter/map/reduce - la radice quadrata della somma dei quadrati dei soli elementi positivi (>= 0) pari 
risultato 
resultArray(A)
344161.650263361
*/

function resultArray(myA) {
    return Math.sqrt(myA.filter(x => {return x >= 0;})
                        .filter(x => {return x % 2 == 0;})
                        .map(x => {return x * x;})          
                        .reduce((acc, x) => {return x + acc}, 0));                    
}


/* Tree 

Si implementi un albero binario di ricerca in javascript 
e si inseriscano gli elementi contenuti nell’array A[0..n-1], ottenuto da initialArray(), 
nell’ordine dall’indice 0 all’indice n-1.
Si calcoli, mediante l’implementazione di un algoritmo ricorsivo, il valore massimo all’interno dell’albero.

*/

function Node(value, leftNode, rightNode) {
    this.item = value;
    this.left = leftNode;
    this.right = rightNode;
}

function BST() {
    this.root = null;
}

BST.prototype.addNode = function(currentNode, e) {
    if (e < currentNode.item) {
        if (currentNode.left == null) {
            currentNode.left = new Node(e, null, null);
        } else {
            this.addNode(currentNode.left, e);
        }
    } else {
        if (currentNode.right == null) {
            currentNode.right = new Node(e, null, null);
        } else {
            this.addNode(currentNode.right, e);
        }
    }
}

BST.prototype.add = function(e) {
    if (this.root == null) {
        this.root = new Node(e, null, null);
    } else {
        this.addNode(this.root, e);
    }

}

BST.prototype.searchNodeR = function(node, e){
    if(node == null){
        return null;
    } else {
        if(node.item == e) {
            return node;
        } else {
            if(e > node.item) {
                return this.searchNodeR(node.right, e);
            } else {
                return this.searchNodeR(node.left, e);
            }
        }
    }
}

BST.prototype.searchNode = function(e) {
    return this.searchNodeR(this.root, e)
}

/*search maximum value

risultato: 
myTree.searchMax()
9999
*/

BST.prototype.addArray = function(myA){
	return myA.forEach(x => {return this.add(myA.pop())});
}

BST.prototype.getMax = function(node) {
    if (node.right == null) {
		return node.item;		    	
    } else {
    	return this.getMax(node.right);
    }
}

BST.prototype.searchMax = function(){
	return this.getMax(this.root);
}

var myTree = new BST();
A.reverse();
myTree.addArray(A);

/* Tree complessità (15 punti)
In riferimento all’albero creato nell’esercizio precedente.
Si indichi perché il numero di confronti effettuato è diverso (più grande) al logaritmo in base 2 di n + 1 (n = numero elementi Array).


albero ha complessità O(n log(n))
*/


/* Esercizio Stack (25 punti) */

function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }

function fullyParentherized (expression) {
	var myA = expression.split(' ');	
    var v = new Stack();
    var s = new Stack();
    for(var i = 0; i < myA.length; i++){
		if(parseInt(myA[i]) >= 0){
            v.push(parseInt(myA[i]));        
        } else {
        	if(myA[i] == ')'){
        		var n2 = v.pop();
				var n1 = v.pop();
				var op = s.pop();				
					switch(s.pop()){
					case('*'):
						stack.push(n1 * n2);           
						break;
					case('-'):
						stack.push(n1 - n2);
						break;
					case('+'):
						stack.push(n1 + n2);
						break;
					case('/'):
						stack.push(n1 / n2);
						break;
					}
        	}
        	s.push(myA[i]);               	
        }
			
    }
}

/*
Esercizio Bonus: Algoritmo ordinamento (10)
Si indichi qual è la complessità dell’algoritmo di ordinamento merge sort nella versione vista in classe, 
nel caso in cui l’array in input contenga gli elementi già ordinati.
*/

// O(n(log(n)))

function merge(ar1, ar2) {
    var result = [];
    var i1 = 0;
    var i2 = 0;

    while(i1 < ar1.length && i2 < ar2.length) {
        if(ar1[i1] < ar2[i2]) {
            result.push(ar1[i1]);
            i1++;
        } else {
            result.push(ar2[i2]);
            i2++;
        }
    }
    return result.concat(ar1.slice(i1)).concat(ar2.slice(i2))
}