const sumAll = function (firstNum, secondNum) {
  let result = 0
  let smallNumber;
  let bigNumber;

  //handle negative numbers or passing a string
  if (firstNum < 0 || secondNum < 0){
    return 'ERROR'
  } else if (typeof firstNum !== "number" || typeof secondNum !== "number") {
    return 'ERROR'
  }

  //handle if the big number was passed first
  if(firstNum < secondNum){
    smallNumber = firstNum
    bigNumber = secondNum
  } else {
    smallNumber = secondNum
    bigNumber = firstNum

  }

  
  for (let i = smallNumber; i <= bigNumber ; i++){
    result += i
  }

  return result
};

// Do not edit below this line
module.exports = sumAll;
