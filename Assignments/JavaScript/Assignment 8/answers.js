/**
*   1. Can we put duplicate values in the set object ? 
->  No, we can't put duplicate values in set Object
*/

/**
*   2. Write the syntax for  
*   a) Creating new set object 
->  set = new Set()   
*/
set = new Set()

/**
 *  Adding new element to set object
 *  set.add(value)
*/

set.add(12)
set.add(23)

/**
 * Deleting element from set object
 * set.delete(value)
*/

set.delete(12);
console.log(set);

/**
 * Create a set object with four random numbers from 0 to 10. Check if this
newly created set object has 8 in it. Use set object methods.
*/

newSet = new Set()

while(true){
    if(newSet.size == 4)
        break;
    else
        newSet.add(Math.floor(Math.random()*10))
}
console.log(newSet)
console.log("Does set have element 8 in it : "+newSet.has(8))