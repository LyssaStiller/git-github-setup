function Queue(){
    var returnVal = 0
    var array = [];
    var counter = 0;
    this.enqueue = function(str){
        array[returnVal] = str;
        // counter++;
        // array.push(str);
        returnVal++;      
    };
 
    this.dequeue = function(){
        if (returnVal === 0) {
            return undefined;
        }
        returnVal--;
        var captured = array[0];        
        array = array.slice(1);
        return captured;
        // array.pop(str);
 
    };
 
    this.size = function(){
        
       return returnVal;
 
    };
 
 }