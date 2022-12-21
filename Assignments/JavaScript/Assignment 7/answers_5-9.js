/**
*   What string method can be used to check the occurrence of a specified
    text in a string?
 -> Array.form(string)  
*/
console.log(Array.from("kunal"))

/**
*   What string method can be used to check the occurrence of a specified
    text in a string? 
 -> indexOf("text")
*/

console.log("Hello world, welcome to the universe.".indexOf("welcome"))

/**
*   How can you break a string to a newline in Javascript ? 
 -> split("\n")
*/

console.log("kunal patil \n hey".split("\n"))

/**
*   8. Write a Javascript function to test whether the first character of a string
    is lowercase.     
*/

function isFirstCharLowerCase(string){
    return (string.charAt(0) == string.charAt(0).toLowerCase())
}

console.log("Is First Letter of String `Kunal` is lower case : "+isFirstCharLowerCase('Kunal'))

/**
*   9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
    (any combination) using string methods. 
 -> return ("YES" == string.toUpperCase(); 
*/

var str = "Yes"
console.log(("YES" == str.toUpperCase()))

/**
*   a) Convert the String into upper case. 
*/
str = str.toUpperCase()
console.log(str)

/**
*   b) Convert only the first character to uppercase. 
*/
str = "Kunal"
str = str.charAt(0).toLowerCase() + str.slice(1)
console.log(str)

/**
*   c) Convert the String into lower case. 
*/
str = str.toLowerCase()
console.log(str)

/**
*   d) Break the string into two halves and swap them. 
*/
str = "kunal patil"
str = str.slice(str.length/2) + str.slice(0,str.length/2)
console.log(str)


/**
*   e) Count the repeating characters. 
*/
str = "kunalpatil"
var charOcc = {}
for(let i=0; i<str.length; i++){
    var ch = str.charAt(i);
    if(isNaN(charOcc[ch]))
        charOcc[ch] = 1
    else 
        charOcc[ch] += 1
}
console.log(charOcc)

/**
*   f) Reverse the string 
*/
str = "kunal"
revStr = str.split('').reverse().join('')
console.log(revStr)