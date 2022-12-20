class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        return ((3.142* this.radius*this.radius* this.height)/3).toFixed(4)
    }
}

const radius = 3.3
const height = 4.2
cone = new Cone(radius,height)
console.log("Volume of Cone wiht radius "+radius+" and height "+height+" is : "+cone.getVolume())
