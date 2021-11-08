let inputHandler = require("./InputHandler");
let functions = require("./functions");

let firstBinaryInput = inputHandler.GetValidBinaryInput("Input the first binary number: ");
let secondBinaryInput = inputHandler.GetValidBinaryInput("Input the second binary number: ");

console.log(functions.BinarySum(firstBinaryInput, secondBinaryInput));


//console.log(functions.CheckPalindrome(binaryInput));
