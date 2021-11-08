let prompt = require("prompt-sync")();

module.exports = {
    GetValidIntegerInput: function (inputRequestText) {
        let res = prompt(inputRequestText)
        res = res.replace(' ', '');
        while (isNaN(res) || !res || Number.isInteger(res)) {
            res = prompt("Please enter a valid input: ");
        }

        return parseInt(res);
    },
    GetValidNumberInput: function (inputRequestText) {
        let res = prompt(inputRequestText);
        while (isNaN(res) || !res) {
            res = prompt("Please enter a valid input: ");
        }
        return res;
    },
    GetValidBinaryInput: function (inputRequestText) {
        let res = prompt(inputRequestText);
        while (!isBinary(res.split('')) || !res) {
            res = prompt("Please enter a valid binary input: ");
        }
        return res;
    },
    GetValidInput: function (inputRequestText) {
        let res = prompt(inputRequestText);
        while (!res) {
            res = prompt("Please enter a valid input: ");
        }
        return res;
    }

};

function isBinary(arr) {
    for (let i of arr) {
        if (i != 0 && i != 1) return false;
    }
    return true
}