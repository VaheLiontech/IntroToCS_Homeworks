let inputHandler = require("./InputHandler");
let functions = require("./functions");

let binaryInput = inputHandler.GetValidBinaryInput("Input the binary number to invert: ");

console.log(functions.BinaryInverse(binaryInput));


//console.log(functions.CheckPalindrome(binaryInput));
