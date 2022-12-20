class Cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }

    getVolume(){
        return (3.142*this.radius*this.radius*this.height).toFixed(4);
    }
}

const cylinder = new Cylinder(10.434,4.43);
console.log(cylinder.getVolume())