var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[Object.keys(storage).length] = value;
  };

  someInstance.dequeue = function() {
    var keys = Object.keys(storage);
    var toBeDeleted = storage[keys[0]];
    delete storage[keys[0]];
    for (var key in storage) {
      storage[key-1] = storage[key];
    }
     delete storage[(Object.keys(storage).length - 1)];
    return toBeDeleted;
  };

  someInstance.size = function() {
    return Object.keys(storage).length;
  };

  return someInstance;
};
