module.exports = {
    multiplyMatrices,
    sumOfMatrices,
    sumOfEachRow
};

function isRect(matrix)
{
    let length = -1;
    for(let arr of matrix)
    {
        if(length === -1)
        {
            length = arr.length;
        }
        else
        {
            if(length != arr.length)
            {
                return false;
            }
        }
    }
    return true;
}
function getMatrixWidth(matrix)
{
    return matrix[0].length;
}
function getMatrixHeight(matrix)
{
    return matrix.length;
}

function multiplyMatrices(matrix1, matrix2)
{
    if(!(isRect(matrix1) && isRect(matrix2)) || getMatrixWidth(matrix1) !== getMatrixHeight(matrix2)) return false;

    let resArray = [];

    for (let i = 0; i < getMatrixHeight(matrix1); i++) {
        let row = [];
        for (let j = 0; j < getMatrixWidth(matrix2); j++) {
            let sum = 0;
            for (let k = 0; k < getMatrixWidth(matrix1); k++) {
                sum += matrix1[i][k] * matrix2[k][j];
            }
            row.push(sum);
        }
        resArray.push(row);
    }
    return resArray;
}
function sumOfMatrices(matrix1, matrix2)
{
    let resArray = [];
    for(let i = 0; i < matrix1.length; i++)
    {
        let row = [];
        for(let j = 0; j < matrix1[i].length; j++)
        {
            row.push(matrix1[i][j] + matrix2[i][j]);
        }
        resArray.push(row);
    }
    return resArray;
}

function sumOfArray(arr)
{
    let r = 0;
    for(let el of arr)
    {
        r += el;
    }
    return r;
}
function sumOfEachRow(matrix)
{
    let res = [];
    for(let arr of matrix)
        res.push(sumOfArray(arr));
    return res;
}
//console.log(sumOfEachRow([[1,2,3],[1,5,6,7],[12,67,5]]));
//console.log(multiplyMatrices([[1,2],[1,2],[1,5],[1,6]],[[2,1],[2,2]]));
