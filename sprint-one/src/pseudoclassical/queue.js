var Queue = function() {

	this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};


Queue.prototype.enqueue = function(value) {
	this.storage[Object.keys(this.storage).length] = value;
  };

  Queue.prototype.dequeue = function() {
  	 var keys = Object.keys(this.storage);
    var toBeDeleted = this.storage[keys[0]];
    delete this.storage[keys[0]];
    for (var key in this.storage) {
      this.storage[key-1] = this.storage[key];
    }
     delete this.storage[(Object.keys(this.storage).length - 1)];
    return toBeDeleted;

  };

  Queue.prototype.size = function() {
    return Object.keys(this.storage).length;
  };