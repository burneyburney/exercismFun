var Bob = function() {};
Bob.prototype.hey = function(input) {
    // turn input into an array
    var arrayInput = input.split();
    // get last index of array
    var lastIndex = arrayInput.length - 1;
    // get last character of array
    var lastItem = arrayInput[lastIndex];

    if (input == input.toUpperCase()){
        return "Whoa, chill out!";
    } else if (lastIndex === String.fromCharCode(33)){
        return "Sure.";
    } else {
        return "Whatever.";
    }
};
module.exports = Bob;


//
// switch (input) {
//     case 0:
//         return "Sunday";
//         break;
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//         break;
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day = "Thursday";
//         break;
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//         break;
// }

// hard coded zone
// if (input == "WATCH OUT!"){
//     return "Whoa, chill out!";
// } else if (input == "Does this cryogenic chamber make me look fat?"){
//     return "Sure.";
// }else if("Let\'s go make out behind the gym!"){
//     return "Whatever."
// }
//  else{
//     return "Whatever.";
// }
