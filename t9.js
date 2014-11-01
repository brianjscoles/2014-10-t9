//prefix tree maker!

// lexicon should be an array of strings.
//
//
// expected behavior:
// myTree = makePrefixTree(myLexicon);
// myTree.hasPrefix("appl") ... returns true
// myTree.hasWord("appl") ... returns false
//
//

var makePrefixTree = function(lexicon){
  var prefixTree = Object.create(ptMethods);

  return prefixTree;
}


var ptMethods = {};

ptMethods.buildTree = function(lexicon){
  this.root = makeNode('');
  for (var w = 0; w < lexicon.size; w++){
    this.root.addWordToTree(w.split(''));
    }
  }
}

ptmethods.makeNode = function(str){
  var node = Object.create(nodeMethods);
  node.value = str;
  node.children = [];
  node.isWord = false;
  return node;
}

ptMethods.hasPrefix = function(str){


  //return a boolean
}


ptMethods.hasWord = function(str)


  return boolean
}

//helper method: returns reference to end node of string, or false if string not possible in tree.
ptMethods.findString = function(str){
  if(str.length === 0){
    return this;
  }
  var letter = str.slice(0,1);
  var remainingString = str.slice(1);
  if(letter in this.children){
    return this.children[letter].findString(remainingString);
  }
}





var nodeMethods = {};

nodeMethods.addWordToTree = function(w){
  var letter = w.shift();
  if(!letter in this.children)){
    this.children[letter] = makeNode(this.value + letter);
  }
  if(w.length===0){
    this.children[letter].isWord = true;
  } else {
    this.children[letter].addWordToTree(w);
  }

}

