// var songverse = function() {
//     for(i=100; i>= 1; i--)
// }
//
// songverse = function((song.verse(i)) {
//
//     return '8 bottles of beer on the wall, 8 bottles of beer.\nTake one down and pass it around, 7 bottles of beer on the wall.\n';
//
// }
// module.exports = songverse;
//
//


function BeerSong(x){
    return x+ ' bottles of beer on the wall,' +x+ 'bottles of beer.\nTake one down and pass it around,' +(x-1)+ 'bottles of beer on the wall.\n';
}


var beer = function(){



// 2   1  0
  var zeroBottlesLeft = "No more bottles of beer on the wall, no more bottles of beer.\n Go to the store and buy some more, 99 bottles of beer on the wall.\n";
  var oneBottleLeft =   "1 bottle of beer on the wall, 1 bottle of beer.\n Take it down and pass it around, no more bottles of beer on the wall.\n";
  var twoBottlesLeft =  "2 bottles of beer on the wall, 2 bottles of beer.\n Take one down and pass it around, 1 bottle of beer on the wall.\n";
// i cant belive i;m stumbling through this


  function countBottlesOnWall(num) {
    return num +" bottles of beer on the wall, " + num +
          " bottles of beer.\nTake one down and pass it around, " + (num - 1) +
          " bottles of beer on the wall.\n";
  }

  var _responses = { 0: zeroBottlesLeft, 1: oneBottleLeft, 2: twoBottlesLeft }

  return {

    verse: function(num) {;
      if (_responses[num] ===  undefined) {
        return countBottlesOnWall(num);
      } else {
        return _responses[num];
      }
    },

    sing: function(start, end) {
      end = end || 0;
      var verses = []
      for (var i = start; i >= end; i--) {
        verses.push(this.verse(i));
      };
      return verses.join("\n");
    }

  };

}();


module.exports = Beer;
