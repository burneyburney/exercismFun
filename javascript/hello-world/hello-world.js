// This is a stub file for the 'Hello World' exercise. It's been provided as a
// convenience to get you started writing code faster.
// Make sure to look at hello-world.spec.js--that should give you some hints about what is
// expected here.

//////////// Versian Updates: ///////////////////////////////////////
//   this is version 1.0
//   version 2.0 = using a ternary instead of if/else
// /////////////////////////////////////////////////

var HelloWorld = function() {};

HelloWorld.prototype.hello = function(input) {
    // if there is an input RETURN "Hello input!"
    if (input){
        return "Hello, " +input+ "!";
    }
    // if there is no input RETURN "Hello, World!";
    else {
        return "Hello, World!";
    }
};

module.exports = HelloWorld;
