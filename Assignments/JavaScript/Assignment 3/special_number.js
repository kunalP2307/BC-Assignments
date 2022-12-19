function factorial(n){
    fact = 1
    for(let i=1; i<=n; i++)
        fact = fact*i
    return fact
}

function isSpecialNumber(n){
    temp = n
    sum = 0;
    while(temp != 0){
        remainder = temp % 10;
        sum += factorial(remainder)
        temp /= 10;
        temp = Math.floor(temp)   
    }   
    if(sum == n){
        console.log(n+" is a Special Number")
        return true
    }
    console.log(n+" is not a Special Number")
}

isSpecialNumber(145)