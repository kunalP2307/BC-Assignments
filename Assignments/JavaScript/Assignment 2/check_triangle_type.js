/*
* Write a Javascript function to check whether a triangle is equilateral,
* isosceles or scalene
*/

function getTriangleType(a,b,c){
    if((a+b+c) == 180 && (a >= 1) && (b >= 1) && (c >= 1)){
        if(a == b && b== c)
            console.log("Given Triangle is Equilateral")
        else if(a == b || a == c || b == c) 
            console.log("Givem Triangle is Isosceles")
        else 
            console.log("Gicen Triangle is Scalene")
    }
    else
        console.log("Not a Triangle")
}

getTriangleType(45,45,90)
