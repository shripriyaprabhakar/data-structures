var Stack = function() {

	this.storage = {};
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
};

Stack.prototype.push = function(value) {
  // count++;
    this.storage[Object.keys(this.storage).length] = value;
  };


Stack.prototype.pop = function() {
    // count = count--;
    var keys = Object.keys(this.storage);
    var toBeDeleted = this.storage[keys.length - 1];
    delete this.storage[keys.length - 1];
    return toBeDeleted;
    };

   Stack.prototype.size = function() {
    // if(count < 0) {
    // return 0;
    // } else {
    // return count;
    // }
    return Object.keys(this.storage).length;
  };