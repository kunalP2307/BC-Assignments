const prompt = require('prompt-sync')();

function fahrenheitToCelsius(f){
    celcius = (f-32)/(1.8);
    return celcius
}

function celciusToFahrenheit(c){
    fahrenheit = c*1.8 + 32;
    return fahrenheit
}


let tempreture = prompt("Enter Tempreture in Celcius : ")
console.log(tempreture+" C is "+celciusToFahrenheit(tempreture)+" F")

tempreture = prompt("Enter Tempreture in Fahrenheit : ")
console.log(tempreture+" F is "+fahrenheitToCelsius(tempreture)+" C")
