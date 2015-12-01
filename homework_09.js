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

function ex_3(myA) {
    var oddStack = new Stack();
    var evenStack = new Stack();
    
    myA.filter(x => x % 2 == 0).forEach(x => evenStack.push(x))
    myA.filter(x => x % 2 != 0).forEach(x => oddStack.push(x))       
    var resultStack = new Stack();   
    
    while (!evenStack.isEmpty() && !oddStack.isEmpty()) {
        resultStack.push(evenStack.pop() * oddStack.pop());
    }
    
    var sum = 0;
    while(!resultStack.isEmpty()) {
        sum += resultStack.pop();
    }
    return sum;
}

/*implementare linked list */

function LinkedList() {

    var Node = function(item, succ, prec){

        this.item = item;
        this.succ = succ;
        this.prec = prec;
    };

    this.first = null;
    this.last = null;
}

LinkedList.prototype.getNode = function(index) {
    function nodeR(node, i) {
        if (index == i || node == null)
            return node;
        else
            return nodeR(node.succ, i + 1);
    }

    return nodeR(this.first, 0);
}

LinkedList.prototype.get = function(index) {
    var node = this.getNode(index);
    if(node == null) {
        return null
    } else {
        return node.item
    }
}

LinkedList.prototype.add = function(index, e) {
    var node = this.getNode(index);

    if (this.first == null) {
        var newNode = new Node(e, null, null);
        this.first = newNode;
        this.last = newNode;
        return;
    }

    if (node == null) {
        var newNode = new Node(e, this.last, null);
        this.last.succ = newNode;
        this.last = newNode;
    } else {

        if (index == 0) {
            var newNode = new Node(e, null, node);
            node.prec = newNode;
            this.first = newNode;

        }    

        if (index != 0) {
            var newNode = new Node(e, node.prec, node);
            node.prec.succ = newNode;
            node.prec = newNode;
        }
    }

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


   