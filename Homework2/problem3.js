let prompt = require("prompt-sync")();

let x1 = GetValidInput("Input x1: ");
let y1 = GetValidInput("Input y1: ");
let x2 = GetValidInput("Input x2: ");
let y2 = GetValidInput("Input y2: ");

console.log("The distance between points is: " + Math.sqrt((x2-x1)**2 + (y2-y1)**2));


function GetValidInput(inputRequestText)
{
    let res = prompt(inputRequestText);
    while(isNaN(res))
    {
        res = prompt("Please enter a valid input: ");
    }
    return res;
}