const prompt = require('prompt-sync')();

function isLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        console.log("Given Year is a Leap Year")
        return true;
    }
    else {
        console.log("Given Year is not a Leap Year")
        return false;
    }
}


const num = prompt("Enter year : ")

isLeapYear(Number(num))