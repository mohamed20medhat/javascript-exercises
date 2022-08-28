const fibonacci = function(num) {
  let init = 0
  let prev1 = 1
  let prev2 = 0

  if (num <= 0) return "OOPS"
  if (typeof num === 'string'){
    num = Number(num)
  }
  if(num-2 < 0) return 1

  // num-2 cause the current is ahead init by 2. 
  for(let i = 0; i <= num-2 ; i++){
    prev2 = prev1 + init
    init = prev1
    prev1 = prev2
  }

  return prev2


};










// Do not edit below this line
module.exports = fibonacci;
