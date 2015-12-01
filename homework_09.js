/* Ricorsione -  e la ricorsiva della somma dei quadrati degli elementi pari */

function ex_1a(myA) {
    if(myA.length == 0) {
        return 10;
    } else {
        return 5 * myA[0] + ex_1a(myA.slice(1));
    }
}

function ex_1b(myA) {
    var sqr = 0;
    var sumSqr = 0;
    for(var i = 0; i < myA.length; ++i){
        if(myA[i] % 2 == 0){
            sqr = myA[i] * myA[i];
            sumSqr += sqr;
        }
    }
    return sumSqr;
}

/*somma quadrati degli elementi pari - FUNZIONALE */

function ex_2(myA){
    sumSqr = myA.filter(function(x){
        return x % 2 == 0;
    })
    .map(function(a){
        return a * a;
    })
    .reduce(function(acc, x){
        return acc + x;
    }, 0)
    return sumSqr;
}

/* esercizio sullo stack */

function Stack() {
    this.myarray = []
}

Stack.prototype.push = function(e) { this.myarray.push(e); }
Stack.prototype.pop = function() { return this.myarray.pop(); }
Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }
Stack.prototype.reduce = function() { return this.myarray.reduce(function(acc, x){return acc + x;},0)}

function ex_3(myA) {
    var oddStack = new Stack();
    var evenStack = new Stack();
    var resultStack = new Stack();

    var evenMyA = myA.filter(function(x){
        return x % 2 == 0;
        });          
    for(var i = 0; i < evenMyA.length; i++){
        evenStack.push(evenMyA[i]);
    }

    var oddMyA = myA.filter(function(x){
        return x % 2 != 0;
        });    
    for (var j = 0; j < oddMyA.length; j++){
        oddStack.push(oddMyA[j]);
    }
       
    while (!evenStack.isEmpty() && !oddStack.isEmpty()) {
        resultStack.push(evenStack.pop() * oddStack.pop());
    }
    
    return resultStack.reduce();
}

/*implementare linked list */

function LinkedList() {

    var Node = function(item){

        this.item = item;
        this.succ = null;
    };
}

/* search tree */

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
   