let prompt = require("prompt-sync")();

let baseTriangle = GetValidInput("Please enter the base length of the triangle: ");
let heightTriangle = GetValidInput("Please enter the height of the triangle: ");

let widthRectangle = GetValidInput("Please enter the width of the rectangle: ");
let heightRectangle = GetValidInput("Please enter the height of the rectangle: ");

let areaTriangle = baseTriangle*heightTriangle/2;
let areaRect = widthRectangle * heightRectangle;

if(areaTriangle > areaRect)
{
    console.log("Triangle has a bigger area");
}
else if(areaTriangle < areaRect)
{
    console.log("Rectangle has a bigger area");
}
else if(areaTriangle === areaRect)
{
    console.log("Rectangle and triangle have equal areas");
}

function GetValidInput(inputRequestText)
{
    let res = prompt(inputRequestText);
    while(isNaN(res) || res <= 0)
    {
        res = prompt("Please enter a valid input ( >0 and a number): ");
    }
    return res;
}
