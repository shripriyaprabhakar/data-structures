var Queue = function() {
	
	var storage = {};
	  var someInstance = {};
   someInstance.storage = {};
   someInstance.length = 0;
    
	extend(someInstance, queueMethods);

     return someInstance;
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

 var extend = function (ob1, ob2){
   for (var key in ob2){
     ob1[key]=ob2[key];
   }
   return ob1;
 };

var queueMethods = {
	enqueue : function(value) {
    this.storage[Object.keys(this.storage).length] = value;
  },
  dequeue :  function() {
    var keys = Object.keys(this.storage);
    var toBeDeleted = this.storage[keys[0]];
    delete this.storage[keys[0]];
    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }
     delete this.storage[(Object.keys(this.storage).length - 1)];
    return toBeDeleted;
  },
    //    delete this.keys[0];
    // for (var key in storage) {
    //  this[key-1] = this.key;
    // }
    //  delete this[Object.keys(storage).length - 1];
     size :  function() {
    return Object.keys(this.storage).length;
  }

  };

   



