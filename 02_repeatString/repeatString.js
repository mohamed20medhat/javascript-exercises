const repeatString = function(text, number) {

  if (number >= 0){
    let repeatedWord = ''
    for (let i = 0; i < number; i++){
      repeatedWord += text
    }
    return repeatedWord
  } else {
    return "ERROR"
  }
};

// Do not edit below this line
module.exports = repeatString;
