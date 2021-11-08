let inputHandler = require("./InputHandler");
let functions = require("./functions");



let input = inputHandler.GetValidIntegerInput();

console.log(functions.isPrime(input));


