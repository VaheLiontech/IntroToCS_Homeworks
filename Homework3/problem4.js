let inputHandler = require("./InputHandler");
let functions = require("./functions");

let num = inputHandler.GetValidNumberInput("Input a number to check palindrome: ");

console.log(functions.CheckPalindrome(num));
