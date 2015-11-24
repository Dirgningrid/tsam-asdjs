function dec2bin1(n) {
    var s = new Stack();
    s.push = function(x) {
        
    }
}

Stack.prototype.popAll = function(callback) {
    while (!this.isEmpy()){
        callback(this.pop());
    }
}

function dec2bin(x) {
    var remStack = new Stack();
    while (x > 0){
        var rem = Math.floor(x % 2);
        remStack.push(rem);
        x = Math.floor(x / 2);
    }
    var binaryString = '';
    remStack.popAll(function(e) {binaryString += e.String();})
    return binaryString;
}

/*ricorsiva di coda*/

function divPer2T(x) {
    function rec(remStack, n) {
        if (n == 0) {
            return remStack;
        } else {
            remStack.push(Math.floor(n % 2));
            return rec(remStack, Math.floor(n / 2));
        }
    }
    var binaryString = '';
    rec(new Stack(), x).popAll(function(e) {binaryString +- e.String()})
    return binaryString;
}

