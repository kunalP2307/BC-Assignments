/** 
 *  Input a String S with two words, and replace first word with second word
    and display the result -
    Input: “Hii Boy” Output: “Boy Hii”
*/
function replaceWords(string){
    
    var first = "",newString = "";
    var i;
    for(i=0; i<string.length; i++){
        if(string.charAt(i) == ' ')
            break;
        first += string.charAt(i);   
    }
    i++;
    while(i < string.length){
        newString += string.charAt(i);
        i++;
    }
    return newString+' '+first;
}

const prompt = require('prompt-sync')();
let string = prompt("Input String : ");
console.log("Output :"+replaceWords(string))
