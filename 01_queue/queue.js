function Queue(){
    this.queueSize = 0;
    this.array = []; 
 }

Queue.prototype.enqueue = function(str){
    this.array[this.queueSize] = str;
    this.queueSize++;      
};

Queue.prototype.dequeue = function(){
    if (this.queueSize === 0) {
        return undefined;
    }
    this.queueSize--;
    var captured = this.array[0];        
    this.array = this.array.slice(1);
    return captured;
};

Queue.prototype.size = function(){
   return this.queueSize;
};