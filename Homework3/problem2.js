let inputHandler = require("./InputHandler");
let functions = require("./functions");

let min = inputHandler.GetValidIntegerInput("Input the min value: ");
let max = inputHandler.GetValidIntegerInput("Input the max value: ");

if(max < min)
    [min, max] = [max, min];

console.log(functions.GetPrimesBetween(min, max));


