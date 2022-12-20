/*
Write a javascript function find_largest to return the nth largest number

in an array-
eg- given an array of integers- [3,45,6,7,23,5,7,8]

find_largest(3) will return third largest number from the above array -
which is 8.
*/

array = [3,45,6,7,23,5,7,8]

function find_largest(n){
    for(let i=0; i<array.length; i++){
        for(let j=0; j<array.length-1; j++){
            if(array[j] < array[j+1]){
                temp = array[j]
                array[j] = array[j+1]
                array[j+1] = temp
            }
        }
    }
    
    let k = 0
    let count = 1

    while(true){
        if(count == n)
            return array[k]
        if(array[k] != array[k+1])
            count ++
        k++
    }
}

console.log(find_largest(5))