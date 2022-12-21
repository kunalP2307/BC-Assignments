/**
 *  Input a String S with multiple words, and remove whitespaces and
    output the result -
    Input: “Hii Boy” Output: “HiiBoy”
*/

function removeSpaces(string){
    return string.replaceAll(' ','');
}

const prompt = require('prompt-sync')();
let string = prompt("Input String : ");
console.log("Output : "+removeSpaces(string));
