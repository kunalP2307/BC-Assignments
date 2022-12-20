/*
Write a JavaScript program which accept a number as input in the
function parameter and insert dashes (-) between each two even
numbers.
For example if you accept 025468 as the output should be 0-254-6-8.
computeDash(025468) -> 0-254-6-8.
*/

function putDashBetEven(n){
    var dashedNum = ""

    for(let i=0; i<n.length; i++){
        dashedNum += n.charAt(i)
        if(parseInt(n.charAt(i)) % 2 == 0 && parseInt(n.charAt(i+1)) % 2 == 0){
            dashedNum += "-"
        }
    }
    console.log(dashedNum)
}

const prompt = require('prompt-sync')();
// let str_n = prompt("Enter number : ")
putDashBetEven("025468")
