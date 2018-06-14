var Stack = function() {

	 var someInstance = Object.create(stackMethods);
 someInstance.storage = {};

 return someInstance;

  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

var stackMethods = {
	push : function(value) {
  // count++;
    this.storage[Object.keys(this.storage).length] = value;
  },

  pop : function() {
    // count = count--;
    var keys = Object.keys(this.storage);
    var toBeDeleted = this.storage[keys.length - 1];
    delete this.storage[keys.length - 1];
    return toBeDeleted;
    },

  size : function() {
    // if(count < 0) {
    // return 0;
    // } else {
    // return count;
    // }
    return Object.keys(this.storage).length;
  }
};


