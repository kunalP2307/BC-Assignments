
function matchHouse(step){
    if(step == 1)
        return 6;
    else 
        return (6*step) - (step - 1)
}

console.log("matchHouse(1) : "+matchHouse(1))
console.log("matchHouse(4) : "+matchHouse(4))
console.log("matchHouse(87) : "+matchHouse(87))
