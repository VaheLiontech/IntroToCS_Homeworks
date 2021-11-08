let inputHandler = require("./InputHandler");
let functions = require("./functions");

let binaryInput = inputHandler.GetValidBinaryInput("Input the binary number to calculate Two's complement: ");
let bits = inputHandler.GetValidIntegerInput("Input the number of bits to hold the signed binary number: ");
console.log(functions.BinaryTwosComplement(binaryInput, bits));


//console.log(functions.CheckPalindrome(binaryInput));
