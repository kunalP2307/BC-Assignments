function isArmstrong(n){
    temp = n
    sum = 0;
    while(temp != 0){
        remainder = temp % 10;
        sum += remainder*remainder*remainder;
        temp /= 10;
        temp = Math.floor(temp)   
    }
    if(sum == n){
        console.log(n+" is a Armstrong Number")
        return true
    }
    console.log(n+" is not a Armstrong Number")
    return false
}

isArmstrong(153)