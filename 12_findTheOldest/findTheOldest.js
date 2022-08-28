const findTheOldest = function(arr) {
  let agesArr = []
  arr.forEach(obj => {
    if ("yearOfDeath" in obj){
      agesArr.push(obj.yearOfDeath - obj.yearOfBirth)
    }else{
      agesArr.push(2022 - obj.yearOfBirth)
    }
  })

  let oldest = -100000
  let oldestIndex = -10000
  for(let i = 0; i <= agesArr.length; i++){
    if(oldest < agesArr[i]){
      oldest = agesArr[i]
      oldestIndex = i
    }
  }


  return arr[oldestIndex]

};

// Do not edit below this line
module.exports = findTheOldest;
