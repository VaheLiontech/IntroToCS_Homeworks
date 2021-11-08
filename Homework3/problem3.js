let inputHandler = require("./InputHandler");
let functions = require("./functions");

let num = inputHandler.GetValidNumberInput("Input an integer to reverse: ");

console.log(functions.ReverseArrayAsString(functions.SplitToArray(num)));
