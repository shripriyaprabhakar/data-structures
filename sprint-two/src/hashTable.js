
var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};
// find bucket index
 //check if bucket index has arr
  //if has arr
   //iterate check key === saved key
    // if found replace val
   //otherwise insert at end w/key
  //if no arr 
   //crete arr
  //save in bucket[index]
   // save key:value tuple
HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var tuple = [k, v]
  var bucket = this._storage.get(index);
    if (!bucket) {
    this._storage.set(index, [tuple]);
  } else {
   for (let i = 0; i < bucket.length; i++) {
      if (k === bucket[i][0]){
        bucket[i][1] = v;
      } else {
        bucket.push(tuple);
      }
    }
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
    var bucket = this._storage.get(index);
     for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]) {
      return bucket[i][1];
    }
  }
 };

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (k === bucket[i][0]){
      bucket[i][1] = undefined;
    }
  }
   
 };



/*
 * Complexity: What is the time complexity of the above functions?
 */
// 




