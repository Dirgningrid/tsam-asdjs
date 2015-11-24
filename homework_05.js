
function Stack() {
    this.myarray = []
    Stack.prototype.push = function(e) { this.myarray.push(e); }
    Stack.prototype.pop = function() { return this.myarray.pop(); }
    Stack.prototype.peek = function() { return this.myarray[this.myarray.length - 1]; }
    Stack.prototype.isEmpty = function() { return this.myarray.length == 0; }
}

function everyString(value) {
    value = value.split(' ')
    return value;   
}
 


function rpn(myA) {  
    var stack = new Stack();
    for(var i = 0; i < myA.length; i++){
        if(parseInt(myA[i]) > 0){
            stack.push(parseInt(myA.pop()));        
        } else {
            var a = stack.pop();
            var b = stack.pop();
            switch(myA[i]){
                case('*'):
                    stack.push(b * a);           
                    break;
                case('-'):
                    stack.push(b - a);
                    break;
                case('+'):
                    stack.push(b + a);
                    break;
                case('/'):
                    stack.push(b / a);
                    break;
            }            
        }        
    }
    return stack.peek();
}