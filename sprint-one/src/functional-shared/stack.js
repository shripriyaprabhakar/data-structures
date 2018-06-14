var Stack = function() {
 
	var storage = {};
	  var someInstance = {};
   someInstance.storage = {};
   someInstance.length = 0;
    
	extend(someInstance, stackMethods);

     return someInstance;
};
  var extend = function (ob1, ob2){
   for (var key in ob2){
     ob1[key]=ob2[key];
   }
   return ob1;
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


