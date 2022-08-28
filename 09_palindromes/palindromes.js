
function isLetter(c) {
  return Boolean(c.match(/[a-zA-Z]/))
}



const palindromes = function (str) {
  let pureStr = ''
  let reversedStr = ''

  // get the pure string
  for(let i = 0; i < str.length ; i++){
    if(isLetter(str[i])){
      pureStr+= str[i]
    } 

  }

  // get the reversed pure string
  for (let i = str.length - 1; i >= 0; i--){
    if (isLetter(str[i])) {
      reversedStr += str[i]
    } 
  }

 
  // return `${pureStr} ${reversedStr}`

  if(pureStr.toLowerCase() == reversedStr.toLowerCase()){
    return true
  }else{
    return false
  }

};





/* How to find palindromes 
* i need to loop over each letter in the word
* check if it was a letter or not. if it was then append it
* have 2 variables one for the word without punctuation or special characters, another for the reversed word. 
* if the reversed word == word without punctuation return
*/


palindromes("racecar!")

// Do not edit below this line
module.exports = palindromes;
