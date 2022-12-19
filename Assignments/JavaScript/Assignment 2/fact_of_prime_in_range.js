/*
Write a program to find the factorial of all prime numbers between a
given range . Range will be passed as 2 values in the function
parameters. eg- if it is needed to find the values for numbers 1-100, then
function declaration can look like - function prime(1,100).
*/

function getFactorial(n){
    fact = 1
    for(let i=1; i<=n; i++)
        fact = fact*i
    return fact
}

function isPrime(n){
    
    for(let i=2; i<=n/2; i++){
        if(n%i == 0)
            return false;           
    }
    return true;
}

function prime(n1,n2){
    for(let i=n1; i<=n2; i++){
        if(isPrime(i))
            console.log("Factorial of "+i+" is : "+getFactorial(i))
    }
}

prime(2,10)