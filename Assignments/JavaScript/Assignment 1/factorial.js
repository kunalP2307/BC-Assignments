const prompt = require('prompt-sync')();

function getFactorial(n){
    fact = 1
    for(let i=1; i<=n; i++)
        fact = fact*i
    return fact
}

let n = prompt("Enter number : ")
console.log(getFactorial(Number(n)))
