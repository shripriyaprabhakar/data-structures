var Queue = function() {
 var someInstance = Object.create(queueMethods);
 someInstance.storage = {};

 return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
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


