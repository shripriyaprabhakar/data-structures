class BinarySearchTree {

	constructor(value) {
    	 this.value = value;
    	 this.left = null;
         this.right = null;
         }
    
insert(value) {

	if (value < this.value) {
		if (this.left === null){
		this.left = new BinarySearchTree(value);
		} else {
		this.left.insert(value);
		}
	} 

	else if (value > this.value) {
		if (this.right === null){
			this.right = new BinarySearchTree(value);
		
	    } else {
		this.right.insert(value);
		
	  }
    }
}  


contains(val) {
  if (this.value === val) {
  	return true;
  }
 else if (val > this.value && this.right !== null) {
	var result = this.right.contains(val);
	if(result === true) return true;
} else if (val < this.value && this.left !== null) {
	var result = this.left.contains(val);
	if(result === true) return true;
} 
	return false;
}

depthFirstLog (cb) {
 cb(this.value);
 	if(this.left) {
 		this.left.depthFirstLog(cb)
 	}
 	if (this.right){
 		this.right.depthFirstLog(cb)
  }
}

}

/*
 * Complexity: What is the time complexity of the above functions?
 */
