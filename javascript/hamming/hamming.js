// version 1.0 = Just make it work
// im gonna browse other peoples solutions because there has to be a more elegant way of going about this.
// lets talk about levels of abstraction..

var Hamming = function(){}

Hamming.prototype.compute = function($DNA1, $DNA2){
  // initialize variable
  var distance = 0;

  if($DNA1.length === $DNA2.length){
    if($DNA1 === $DNA2){
        return 0;
    }
    else {
      for(var i=0; i<$DNA1.length; i++){
        if($DNA1.charAt(i) != $DNA2.charAt(i)){
          distance++;
        }
      } return distance;
    }
  }else {
    throw new Error('DNA strands must be of equal length.');
  }
}

module.exports = Hamming;
