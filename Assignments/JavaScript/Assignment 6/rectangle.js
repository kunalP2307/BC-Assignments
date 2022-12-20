/*
Perform the following operations to provide the implementation for a
Rectangle class. The operations are:
1. Add an area() method to the Rectangle class.
2. Create a Square class that satisfies the following conditions:
○ It is a subclass of Rectangle.
○ It contains a constructor and no other methods.
○ It can use the Rectangle class' area method to print the area
of a Square object.
*/
class Rectangle{
    constructor(length,breadth){
        this.length = length;
        this.breadth = breadth;
    }
    area(){
        return (this.length*this.breadth).toFixed(4);
    }
}

class Square extends Rectangle{
    constructor(length,breadth){
        super(length,breadth)
    }
}

const side = 4.3
square = new Square(side,side);
console.log("Area of Square with side "+side+" is : "+square.area())