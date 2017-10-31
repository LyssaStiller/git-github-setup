function LinkedList() {
    this.head = null;
    this.tail = null;
 }
 
 LinkedList.prototype.addToTail = function(value) {
    var nodeInstance = new Node(value);
    if (this.head === null && this.tail === null) {
        this.head = nodeInstance;
        this.tail = nodeInstance;
    } else{
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

};
 
 LinkedList.prototype.search = function() {
 
 };
 
 LinkedList.prototype.addToHead = function(value) {
    if (this.head === null && this.tail === null) {
        var nodeInstance = new Node(value);
        this.head = nodeInstance;
        this.tail = nodeInstance;
    } else{
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