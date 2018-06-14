var Stack = function() {
  var someInstance = {};
  // Use an object with numeric keys to store values
  var storage = {};
  // var count = 0;
  // Implement the methods below
  someInstance.push = function(value) {
  // count++;
    storage[Object.keys(storage).length] = value;
  };

  someInstance.pop = function() {
    // count = count--;
    var keys = Object.keys(storage);
    var toBeDeleted = storage[keys.length - 1];
    delete storage[keys.length - 1];
    return toBeDeleted;
    };

  someInstance.size = function() {
    // if(count < 0) {
    // return 0;
    // } else {
    // return count;
    // }
    return Object.keys(storage).length;
  };

  return someInstance;
};