let prompt = require("prompt-sync")();

let a = GetValidInput("Input a: ");
let b = GetValidInput("Input b: ");
let c = GetValidInput("Input c: ");


if(parseInt(a) === 0)
{
    console.log("X: " + -c/b);
    return;
}


let disc = b**2 - (4 * a * c);

if(disc > 0)
{
    let x1 = (-b - Math.sqrt(disc))/ (2 * a);
    let x2 = (-b + Math.sqrt(disc))/ (2 * a);
    console.log("X1: " + x1 + " X2: " + x2);
}
else if(disc === 0)
{
    let x = (-b)/ (2 * a);
    console.log("X: " + x);
}
else
{
    console.log("No Solution");
}

function GetValidInput(inputRequestText)
{
    let res = prompt(inputRequestText);
    while(isNaN(res))
    {
        res = prompt("Please enter a valid input: ");
    }
    return res;
}
