//prefix tree maker!

// lexicon should be an array of strings.

var makePrefixTree = function(){
  var prefixTree = Object.create(ptMethods);


  return prefixTree;
}





var makeNode = function(value){
  var node = {};
  node.value = value;
  node.children = [];
  node.isWord = false;
}

var ptMethods = {};

ptMethods.buildTree = function(lexicon){
  for (var w = 0; w < lexicon.size; w++){
    var letters = lexicon[w].split('');
    for(var l = 0; l < letters.size; l++){
      this.addLettertoTree(l);
    }
  }
}

ptMethods.addLettertoTree = function(l){

}

