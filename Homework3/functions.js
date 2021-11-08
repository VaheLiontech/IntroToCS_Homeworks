module.exports = {
    isPrime,
    GetPrimesBetween,
    SplitToArray,
    ReverseArrayAsString,
    CheckPalindrome,
    BinarySum,
    BinaryInverse,
    BinaryTwosComplement
};


function isPrime(num) {
    if (num <= 1)
        return false;
    if (num % 2 === 0 && num > 2)
        return false;
    const sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i += 2) {
        if (num % i === 0)
            return false;
    }
    return true;
}

function GetPrimesBetween(min, max) {
    let res = [];
    for (let i = min; i <= max; i++) {
        if (isPrime(i)) {
            res.push(i);
        }
    }
    return res;
}

function SplitToArray(num) {
    //let strVersion = toString(num);
    return num.toString().split('');
}

function ReverseArrayAsString(arr) {
    return arr.reverse().join('');
}

/*
Example how to do the without array functions
function Reverse(num) {
    let n = num;
    let rev = 0;
    let rem = 0;
    while (n > 0) {
        rem = n % 10;
        rev = rev * 10 + rem;
        n = Math.floor(n / 10);
    }
    return rev;
}*/


function CheckPalindrome(input) {
    let initInput = input;
    let reversedInput = ReverseArrayAsString(SplitToArray(initInput));
    return initInput === reversedInput;

}

function BinarySum(firstNum, secondNum, isSigned = false) {
    let str_firstNum = firstNum.toString();
    let str_secondNum = secondNum.toString();
    let arr_firstNum = str_firstNum.split("");

    // can be done with for
/*
    arr_firstNum = [];
    for(let i = 0; i < str_firstNum.length; i++)
    {
        arr_firstNum.push(str_firstNum.charAt(i))
    }*/


    let arr_secondNum = str_secondNum.split("");

    while (arr_firstNum.length < arr_secondNum.length) {
        arr_firstNum.unshift("0");
    }
    while (arr_secondNum.length < arr_firstNum.length) {
        arr_secondNum.unshift("0");
    }

    let carryBit = 0;
    let firstBit;
    let secondBit;
    let resBit;
    let resArray = []
    for (let i = arr_firstNum.length - 1; i >= 0; i--)
    {
        firstBit = parseInt(arr_firstNum[i]);
        secondBit = parseInt(arr_secondNum[i]);
        resBit = firstBit + secondBit + carryBit;

        if(resBit === 0)
        {
            resArray.unshift(0);
            carryBit = 0;
        }
        else if(resBit === 1)
        {
            resArray.unshift(1);
            carryBit = 0;
        }
        else if(resBit === 2)
        {
            resArray.unshift(0);
            carryBit = 1;
        }
        else if(resBit === 3)
        {
            resArray.unshift(1);
            carryBit = 1;
        }
    }
    if(carryBit === 1 && !isSigned)
        resArray.unshift(1);

    return resArray.join('');
}

function BinaryInverse(num)
{
    let str_num = num.toString();
    let res_num = "";
    for(let i = 0; i < str_num.length; i++)
    {
        str_num.charAt(i) === "0" ? res_num += "1" : res_num += "0";
    }
    return res_num;
}

function BinaryTwosComplement(num, bits = num.length + 1)
{
    let input = num;
    while(bits > input.length)
    {
        input = '0' + input;
    }

    return BinarySum(BinaryInverse(input), 1, true);
}



