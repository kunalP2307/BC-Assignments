class Sphere{
    constructor(radius){
        this.raduis = radius;
    }
    getVolume(){
        return ((4/3)*3.142*this.raduis*this.raduis*this.raduis).toFixed(4)
    }
}

radius = 3.23
sphere = new Sphere(radius)
console.log("Volume of Sphere with radius "+radius+" is : "+sphere.getVolume())