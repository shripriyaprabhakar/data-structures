

// Instantiate a new graph
var Graph = function() {
	
	this.container = [];
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
	var obj = {};
	obj.value = node;
	obj.edges = [];
	this.container.push(obj);
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
	for (var i = 0; i < this.container.length; i++){
		if(this.container[i].value === node) {
			return true;
		}
	}
	return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
	for (var i = 0; i < this.container.length; i++){
		if(this.container[i].value === node) {
			this.container.splice(i, 1);
		}
	}
	};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
	var result = false;
	for (var i = 0; i < this.container.length; i++) {
      if (this.container[i].value === fromNode) {
        result = this.container[i].edges.includes(toNode);
      }
    }
	return result;
	};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.container.length; i++) {
      if (this.container[i].value === fromNode) {
         this.container[i].edges.push(toNode);
      }
      if (this.container[i].value === toNode) {
         this.container[i].edges.push(fromNode);
      }
    }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
	for (var i = 0; i < this.container.length; i++) {
    	if (this.container[i].value === fromNode) {
      		for(var j = 0; j < this.container[i].edges.length; j++) {
        		if(this.container[i].edges[j] === toNode) {
        		(this.container[i].edges).splice(j,1);
        		//console.log((this.container[i].edges));
        		}
      		}
       	}
    }
    for (var k = 0; k < this.container.length; k++) {
    	if (this.container[k].value === toNode) {
      		for(var m = 0; m < this.container[k].edges.length; m++) {
        		if(this.container[k].edges[m] === fromNode) {
        		(this.container[k].edges).splice(m,1);
        		//console.log((this.container[i].edges));
        		}
      		}
       	}
    }
     
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
	this.container.forEach(function(elem){
		return cb(elem.value);
	});
	
	
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


