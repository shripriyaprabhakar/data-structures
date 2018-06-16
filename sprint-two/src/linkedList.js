 var LinkedList = function() {
 var list = {};
 list.head = null;
 list.tail = null;


 list.addToTail = function(value) {
   var node = new Node(value);
   if (this.tail === null) {
     this.tail = node;
     this.head = node;
   } else {
     this.tail = node;
     this.head.next = this.tail;
   }
 };

 list.removeHead = function() {
   if (this.head !== this.tail) {
     var headoriginal = this.head.value;
     var pointed = this.head.next;
     this.head = pointed;
     return headoriginal;
   }
   return this.tail.value;
 };


 list.contains = function(target) {
   for (var key in list) {
     if (list[key].value === target) {
       return true;
     }  
   }
   return false;
 };

 return list;
};

var Node = function(value) {
 var node = {};
 node.value = value;
 node.next = null;

 return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
