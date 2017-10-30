function LinkedList() {
    this.head = null;
    this.tail = null;
 }
 
 LinkedList.prototype.addToTail = function(value) {
 
        if (this.head === null && this.tail === null) {
            var nodeInstance = new Node(value);
            this.head = nodeInstance;
            this.tail = nodeInstance;
        }
        else{
            var nodeInstance = new Node(value);
            this.tail.next = nodeInstance;
            nodeInstance.previous = this.tail;
            this.tail = nodeInstance;
            
        }
    }; 
 LinkedList.prototype.removeHead = function() {
        var prevHead = this.head;
        this.head = this.head.next;
        this.head.previous = null;
        return prevHead.value;
 
    };function Queue(){
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
 
 LinkedList.prototype.search = function() {
 
 };
 
 LinkedList.prototype.addToHead = function(value) {
 
        if (this.head === null && this.tail === null) {
            var nodeInstance = new Node(value);
            this.head = nodeInstance;
            this.tail = nodeInstance;
        }
        else{
            var nodeInstance = new Node(value);
            nodeInstance.next = this.head
            this.head.previous = nodeInstance;
            this.head = nodeInstance; 
 
 
 
 
        }
 };
 
 
 function Node(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
 
 }