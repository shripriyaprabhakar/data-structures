var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me
  _.extend(newTree, treeMethods);

  return newTree;
};


var treeMethods = {};

treeMethods.addChild = function(value) {
	this.targetNode = value;
	this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
	   var node = this.children;
	 //   console.log(node.includes(target));
	 //   console.log(this.children);
		if (this.value === target) {
		  return true;	
      	} 
     var isFound = false;
     node.forEach(function (element) {
      isFound = isFound || element.contains(target);
      // console.log(element);
    });
        
         
     
 	return isFound;	
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
